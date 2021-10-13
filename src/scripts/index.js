'use strict';

import WOW from 'wowjs/dist/wow.min';
import {scroll, scrolling} from "./utils/scroll";
import {initAcc} from "./includes/accordion";
import {contactsSlider} from "./includes/contactsSlider";

/**
 * Загрузка svg иконок для возможность использования через use
 */
const iconFiles = require.context('../resources/icons', false, /.*\.svg$/);
iconFiles.keys().forEach(iconFiles);


/**
 * Открытие закрытие side menu
 */
  // const sideMenu = () => {
  //   // const sideMenuOpenButton = document.getElementById('side-menu-open-button');
  //   const sideMenuCloseButtons = document.querySelectorAll('[data-side-menu-close]');
  //   const sideMenu = document.querySelector('.side-menu');
  //   // sideMenuOpenButton.addEventListener('click', () => {
  //   //   sideMenu.classList.remove('hidden');
  //   //   sideMenu.classList.remove('animate__fadeOutUp');
  //   //   sideMenu.classList.add('animate__fadeInDown');
  //   // });
  //   sideMenuCloseButtons.forEach((elem) => {
  //     elem.addEventListener('click', () => {
  //       sideMenu.classList.remove('animate__fadeInDown');
  //       sideMenu.classList.add('animate__fadeOutUp');
  //     });
  //   });
  // };


const contentLoaded = () => {
    /**
     * Инициализация плагина который запускает анимации когда элемент появляется на странице
     */
    new WOW.WOW().init();
    
    /**
     * Функционал открытия закрытия side menu
     */
    // sideMenu();
    
    /**
     * Функционал формы обратной связи
     */
    // orderForm();
    
    /**
     * Функционал Слайдер контактов
     */
    contactsSlider()

    /**
     * При загрузке страницы произвести скроллинг по указанному хешу
     */
    setTimeout(() => scrolling(location.hash.slice(1)), 100);
    /**
     * Функционал скроллинга по странице
     */
    scroll();
    
    /**
     * accordion
     */
    initAcc('.accordion', true);
  };

document.addEventListener('DOMContentLoaded', contentLoaded);
