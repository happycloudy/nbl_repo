export const newAcc = () => {
  const acc = document.getElementsByClassName("new-accordion__button");
  const aa = document.querySelectorAll('[data-is-hide-active]')
  let i;


  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.add("new-accordion__button--active");
      const isHideActive = this.hasAttribute('data-is-hide-active')
      
      for (i = 0; i < acc.length; i++){
        acc[i].classList.remove('new-accordion__button--active');
        const panel1 = acc[i].nextElementSibling;
          panel1.style.maxHeight = null;
      }
      
      aa.forEach((el) => {
        if (el.hasAttribute('data-is-hide-active')) {
          el.style.display = 'flex'
        }
  
        if (isHideActive) {
          this.style.display = 'none'
        }
      })
  
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}



