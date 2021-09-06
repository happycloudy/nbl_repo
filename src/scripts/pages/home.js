'use strict';

import '../../styles/pages/home.scss';
import menu from "../components/menu";
import tabs from "../components/doubleCoverTabs";
import toggle from "../components/doubleCoverToggle";
import {menuList} from "../../data/menuList";
import {viabilityDetails} from "../../data/viabilityDetails";


const contentLoaded = () => {

  
  menu(menuList)
  tabs({
    data: viabilityDetails,
    openDefault: viabilityDetails[0].title,
    target: 'tab'
  })
  toggle({
    data: viabilityDetails,
    openDefault: viabilityDetails[0].title,
    target: 'accordion'
  })
};

document.addEventListener('DOMContentLoaded', contentLoaded);
