'use strict';

import '../../styles/pages/contacts.scss';
import '../../styles/includes/questionnaire.scss';
import menu from "../components/menu";
import {menuList} from "../../data/menuList";


const contentLoaded = () => {

  
  menu(menuList)
  
};

document.addEventListener('DOMContentLoaded', contentLoaded);
