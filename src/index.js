import { createHome } from './home';
import { createMenu, mainCourses, desserts } from './menu';
import { createContact } from './contact';
import './styling/styles.css';
import './styling/menu.css'
import './styling/home.css'
import './styling/contact.css'

const content = document.getElementById('content');

function createDisplayController(parameter) {
    content.innerHTML = '';
    content.appendChild(parameter);

    if (content.firstChild.classList.contains('menu')) {
        const menu = content.firstChild;

        const menuButtons = menu.querySelectorAll('button');   

        menuButtons.forEach(item => {
            item.addEventListener('click', () => {
                const existingItems = menu.querySelector('.menu-items');
                if (existingItems) {
                    menu.removeChild(existingItems);
                }
                if (item.textContent === 'Main Courses') {
                    menu.appendChild(mainCourses());
                } else if (item.textContent === 'Desserts') {
                    menu.appendChild(desserts());
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createDisplayController(createHome());
});

const buttons = {
    'home-button': createHome,
    'menu-button': createMenu,
    'contact-button': createContact,
};

Object.keys(buttons).forEach(id => {
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
        createDisplayController(buttons[id]());
    });
});