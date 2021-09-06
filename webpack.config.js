const path = require('path');
const fs = require('fs')
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const environment = require('env2');

/**
 * Главная страница которая будет переименована в index
 */
const INDEX_PAGE = 'home';
/**
 * Директория шаблонов страниц
 */
const TEMPLATE_DIR = 'src/templates/pages';
/**
 * Директория скриптов (скрипты страниц должны называться также как и страница)
 */
const SCRIPTS_DIR = 'src/scripts';

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';



/**
 * Находит все файлы в директории TEMPLATE_DIR и берет их имя = имена страниц
 */
const findNamePages = () => (
  fs.readdirSync(path.resolve(__dirname, TEMPLATE_DIR)).map((item) => item.split('.')[0])
);

/**
 * Генерирует чанки на каждую страницу для того чтобы не тянуть здоровенный файл с js
 */
const generateEntries = () => (
  findNamePages().reduce((acc, pageName) => ({
    ...acc,
    [pageName]: [
      path.resolve(__dirname, `${SCRIPTS_DIR}/index.js`),
      path.resolve(__dirname, `${SCRIPTS_DIR}/pages/${pageName}.js`),
    ],
  }), {})
);

/**
 * Генерирует html страницы
 */
const generateHtmlPlugins = () => (
  findNamePages().map((pageName) => (
    new HtmlWebpackPlugin({
      filename: `${pageName === INDEX_PAGE ? 'index' : pageName}.html`,
      template: path.resolve(__dirname, `${TEMPLATE_DIR}/${pageName}.html`),
      chunks: [pageName],
      minify: false,
    })
  ))
);

const getUrlLoaders = (isDevMode, dirName) => ([
  {
    loader: 'url-loader',
    options: {
      limit: 1024 * 4,
      name: `${dirName}/${isDevMode ? '[name]' : `[name].[contenthash:5]`}.[ext]`,
    },
  },
]);


module.exports = (env) => {
  environment(path.join(__dirname, `environment/env.${env.mode}.json`));
  const isDevMode = env.mode !== PRODUCTION;

  const cssLoaders = [
    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: isDevMode,
      },
    },
    !isDevMode && ({
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['cssnano', 'autoprefixer'],
        },
      },
    }),
  ].filter(Boolean);

  return {
    mode: env.mode,
    entry: generateEntries(),
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'scripts/[name].js',
      // publicPath: process.env.PUBLIC_PATH.toString(),
    },
    module: {
      rules: [
        // JS
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader'
          }
        },
        // CSS
        {
          test: /\.css$/,
          use: cssLoaders,
        },
        // SASS/SCSS
        {
          test: /\.(sass|scss)$/,
          use: [
            ...cssLoaders,
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        // SVG
        {
          test: /\.(svg)$/,
          include: path.resolve(__dirname, 'src/resources/icons'),
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                symbolId: '[name]',
              },
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  { removeTitle: !isDevMode },
                ],
              },
            },
          ],
        },
        // IMAGES
        {
          test: /\.(jpe?g|gif|png|webp|svg)$/,
          exclude: path.resolve(__dirname, 'src/resources/icons'),
          use: getUrlLoaders(isDevMode, 'images'),
        },
        // VIDEO
        {
          test: /\.(mp4)$/,
          include: path.resolve(__dirname, 'src/resources/video'),
          use: getUrlLoaders(isDevMode, 'video'),
        },
        // FONTS
        {
          test: /\.(eot|otf|ttf|woff2?)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            publicPath: url =>'../fonts/' + url
          }
        },
        // DOCUMENTS
        {
          test: /\.(xlsx|pdf)$/,
          use: getUrlLoaders(isDevMode, 'docs'),
        },
        // HTML - Переводит в строку встраиваемые шаблоны в страницу
        {
          test: /\.html$/,
          include: path.resolve(__dirname, 'src/templates/includes'),
          use: ['raw-loader'],
        },
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      ...generateHtmlPlugins(),

      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
        chunkFilename: 'styles/[id].css',
      }),
      !isDevMode && new CssoWebpackPlugin(),
      new DefinePlugin({
        ENV: {
          app: process.env.APP.toString(),
          version: process.env.VERSION.toString(),
          mode: process.env.MODE.toString(),
          apiUrl: process.env.API_URL.toString(),
          publicPath: process.env.PUBLIC_PATH.toString(),
        },
      }),
    ].filter(Boolean),

    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        minSize: 5000,
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
          },
        }
      }
    },

    resolve: {
      extensions: ['.js', '.scss'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    devServer: {
      port: 8000,
      open: true,
      compress: true,
      overlay: true,
      clientLogLevel: 'silent',
      // historyApiFallback: {
      //   rewrites: findNamePages().map((pageName) => ({
      //     from: pageName === INDEX_PAGE ? '/' : `/${pageName}`,
      //     to: `/${TEMPLATE_DIR}/${pageName}.html`,
      //   })),
      // },
    },
  };
};
