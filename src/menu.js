function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const menuItems = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages'];
    menuItems.forEach(item => {
        const menuItem = document.createElement('button');
        menuItem.textContent = item;
        menu.appendChild(menuItem);
    });
    
    return menu;
}

export { createMenu };