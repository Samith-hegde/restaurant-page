import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';
import './styles.css';

const content = document.getElementById('content');

function createDisplayController(parameter) {
    content.innerHTML = '';
    content.appendChild(parameter);
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