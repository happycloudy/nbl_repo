'use strict';

export default (menuList) => {
  const menu = document.getElementById('menu')
  
  menu.insertAdjacentHTML('beforeend', `
      <nav class="menu">
          ${menuList?.map(({name, link, subMenu}) => `
          <ul class="menu-list">
            <li class="menu-list__item"><a class="${name === 'logo' ? 'logo--container': 'menu-list__item-link'}" href=${link}>${name=='logo'?'':name}</a>
              ${subMenu
                ? `<ul class="submenu-list">
                     ${subMenu.map((t) => `<li class="submenu-list__item"><a class="submenu-list__item-link" href=${t.link}>${t.name}</a></li>`).join('')}
                   </ul>`
                : ''
              }
            </li>
          </ul>
        `).join('')}
     </nav>
     <button class="burger" id="side-menu-open-button">
        <svg class="burger__icon">
          <use href="#burger" />
        </svg>
    </button>
  `)
  
  document.getElementById('side-menu-open-button').addEventListener('click', () => {
    console.log('open menu')
  })
}



