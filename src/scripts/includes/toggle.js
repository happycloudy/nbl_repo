export const toggle = ({targetId, openDefault}) => {
  const openDefaultEl = document.getElementById(`content-${openDefault}`)
  
  const tabcontent = document.querySelectorAll(".tab__content");
  tabcontent.forEach(item => {
    if (openDefaultEl) {
      openDefaultEl.style.display = 'flex'
    }
    
    if (item.id === `content-${targetId}`) {
      return item.style.display = 'flex'
    }
    item.style.display = 'none'
  })
  
  const tablinks = document.querySelectorAll(".tab__header-links");
  tablinks.forEach(item => {
    if (item.id === targetId || item.id === openDefault) {
      return item.classList.add('tab__header-links-active');
    }
    item.classList.remove('tab__header-links-active');
  })
}
