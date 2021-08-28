import menu from '../menu.json'
import menuItem from '../templates/menuItem.hbs'
import refs from './refs.js'
const listMenu = menuItem(menu)
refs.listFull.insertAdjacentHTML('beforeend', listMenu)