'use strict';

export default ({data, target, openDefault}) => {
  const toggle = document.getElementById(target)
  
  toggle.insertAdjacentHTML('beforeend', `
    <div class="accordion">
        ${data.map(item => `
            <div class="a-container ${item.title === openDefault? 'active' : ''}">
                <p class="a-btn">
                    <span class="a-btn__text">${item.title}</span>
                    <span class="a-btn__icon"></span>
                </p>
                <div class="a-panel">
                    <span class="a-panel__text">${item.description}</span>
                    <div class="a-panel__img">
                        <img src=${item.img}>
                    </div>
                </div>
            </div>
        `).join('')}
    </div>`)
}


