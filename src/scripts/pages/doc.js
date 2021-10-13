'use strict';

import '../../styles/pages/doc.scss';
import menu from "../components/menu";
import {menuList} from "../../data/menuList";


const contentLoaded = () => {

  
  menu(menuList)
  
};

document.addEventListener('DOMContentLoaded', contentLoaded);
