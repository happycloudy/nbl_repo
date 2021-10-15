export const tab = () => {
  let i;
  
  const dActive = document.querySelectorAll('[data-active]')
  
  dActive.forEach((el) => {
    if (el.getAttribute('data-active') === 'true') {
      el.classList.add('tab-js__link--active')
    } else {
      el.classList.remove('tab-js__link--active')
    }
  })
  
  document.addEventListener('click', (evt) => {
    let myElem = evt.target.closest('button')
    if (!myElem) return
    
    const targetName = myElem.getAttribute('data-target')
    const dTarget = document.querySelectorAll('[data-target]')
  
    dTarget.forEach((el) => {
      if (el.getAttribute('data-target') !== targetName) {
        el.removeAttribute('data-active')
        el.classList.remove('tab-js__link--active')
      }
      else {
        el.setAttribute('data-active', 'true');
        el.classList.add('tab-js__link--active')
      }
    })
    
   const tabcontent = document.getElementsByClassName("tab-js__content-item");
    for (i = 0; i < tabcontent.length; i++) {
      if (tabcontent[i].id !== targetName) {
        tabcontent[i].classList.remove('tab-js__content-item--active')
      } else {
        tabcontent[i].classList.add('tab-js__content-item--active')
      }
    }
  })
}
