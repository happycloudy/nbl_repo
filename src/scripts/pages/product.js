'use strict';

import '../../styles/pages/product.scss';
import menu from "../components/menu";
import {menuList} from "../../data/menuList";


const contentLoaded = () => {
  
  menu(menuList)
};

document.addEventListener('DOMContentLoaded', contentLoaded);
