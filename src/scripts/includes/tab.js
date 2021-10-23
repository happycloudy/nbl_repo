export const tab = () => document.querySelectorAll('.tab-js').forEach((tab) => {
    
    let btns = tab.querySelectorAll('.tab-js__link');
    let items = tab.querySelectorAll('.tab-js__content-item');
    
    for(let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', () => {
        change([btns, items], i)
      })
    }
  })


function change(arr, i) {
  arr.forEach( item => {
    item.forEach( i => {i.classList.remove('active')})
    item[i].classList.add('active')
  })
}
