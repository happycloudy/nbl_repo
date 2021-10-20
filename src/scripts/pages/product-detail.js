'use strict';

import '../../styles/pages/product-detail.scss';
import menu from "../components/menu";
import {menuList} from "../../data/menuList";


const contentLoaded = () => {
  
  menu(menuList)
  
  const boxSave = document.getElementById('products-detail__right--box-save')
  const infoFirst = document.getElementById('info__first')
  
  function resize() {
    const size = document.body.clientWidth;
    if(size < 1152){
      boxSave.style.display = 'none'
      infoFirst.style.height = 'auto';
    }else {
      boxSave.style.display = 'flex'
      infoFirst.style.height = boxSave.scrollHeight + 'px';
    }
  }
  
  resize()
  window.onresize = resize;
  
};

document.addEventListener('DOMContentLoaded', contentLoaded);
