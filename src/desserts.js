function desserts () {
    const items = ['Tiramisu', 'Panna Cotta', 'Gelato Trio', 'Cannoli'];

    const dessert = document.createElement('ul');
    dessert.classList.add('menu-items');
    items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        dessert.appendChild(menuItem);
    });

    return dessert;

}

export { desserts };