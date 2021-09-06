'use strict';

import {toggle} from "../../includes/toggle";

export default ({data, openDefault, target}) => {
  const tab = document.getElementById(target)
  
  tab.insertAdjacentHTML('beforeend', `
    <div class="tab__header">
      ${data.map(item => `<button id=${item.title} class="tab__header-links title__extra">${item.title}</button>`).join(
        `<svg width="161">
            <use href="#Arrow-1"></use>
        </svg>`
  )}
    </div>
    ${data.map(item => `
       <div id=${'content-' + item.title} class="tab__content">
          <div class="tab__img-container">
            <img src=${item.img} alt="">
          </div>
          <div class="tab__content-description">${item.description}</div>
       </div>`)
    .join('')}
  `)
  
  toggle({openDefault})
  
  data.forEach(({title}) => {
    document.getElementById(title).addEventListener('click', () => toggle({
      targetId: title
    }))
  })
}



