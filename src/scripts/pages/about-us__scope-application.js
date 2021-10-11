'use strict';

import '../../styles/pages/about-us__scope-application.scss';
import menu from "../components/menu";
import {menuList} from "../../data/menuList";


const contentLoaded = () => {
  
  menu(menuList)
};

document.addEventListener('DOMContentLoaded', contentLoaded);
