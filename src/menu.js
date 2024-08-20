import { mainCourses } from './mainCourses';
import { desserts } from './desserts';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const menuItems = ['Main Courses', 'Desserts'];

    menuItems.forEach(item => {
        const menuItem = document.createElement('button');
        menuItem.textContent = item;
        menu.appendChild(menuItem);
    });
    
    return menu;
}

export { createMenu, mainCourses, desserts };