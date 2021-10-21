'use strict';

import '../../styles/pages/doc.scss';
import menu from "../components/menu";
import {menuList} from "../../data/menuList";
import {doc_slider_iphone} from "../includes/doc_slider_iphone";


const contentLoaded = () => {
  menu(menuList)
  doc_slider_iphone()
};

document.addEventListener('DOMContentLoaded', contentLoaded);
