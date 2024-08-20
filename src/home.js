import pasta from "./images/pasta.jpg";

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to [Restaurant Name]: A Taste of Perfection';

    const img = document.createElement('img');
    img.src = pasta;

    const p = document.createElement('p');
    p.textContent = 'Discover an extraordinary dining experience at [Restaurant Name], where culinary artistry meets the freshest ingredients. Nestled in the heart of [Location], our restaurant is dedicated to bringing you flavors that are as vibrant and diverse as the community we serve. Whether you are joining us for a casual lunch, a romantic dinner, or a special celebration, our menu offers something for every palate. From classic dishes with a modern twist to innovative creations inspired by global cuisines, every meal is a journey to savor. Come and indulge in the exceptional ambiance, warm hospitality, and unforgettable flavors that make [Restaurant Name] a true culinary destination.';

    home.appendChild(h1);
    home.appendChild(img);
    home.appendChild(p);

    return home;
}

export { createHome };
