function mainCourses () {
    const items = ['Spaghetti Carbonara', 'Chicken Alfredo', 'Margherita Pizza', 'Lasagna'];

    const mainCourse = document.createElement('ul');
    mainCourse.classList.add('menu-items');
    items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item;
        mainCourse.appendChild(menuItem);
    });

    return mainCourse;

}

export { mainCourses };