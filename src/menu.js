function menuCard(image, item)
{
    let card = document.createElement('div');
    card.classList.add('menu-card');
    let cardPic = document.createElement('img');
    cardPic.src = image;
    cardPic.classList.add('card-pic');
    let cardItem = document.createElement('p');
    cardItem.textContent = item;
    cardItem.classList.add('card-item');
    card.appendChild(cardPic);
    card.appendChild(cardItem);
    return card;
}

function displayMenu()
{
    let menu = document.createElement('div');
    menu.classList.add('menu');
    menu.classList.add('fullPage');
    menu.appendChild(menuCard("icons/pizza.svg", "Pizza"));
    menu.appendChild(menuCard("icons/burger.svg", "Burger"));
    menu.appendChild(menuCard("icons/fries.svg", "French Fries"));
    menu.appendChild(menuCard("icons/chicken_sandwich.svg", "Chicken Sandwich"));
    menu.appendChild(menuCard("icons/taco.svg", "Taco"));
    menu.appendChild(menuCard("icons/hotdog.svg", "Hot Dog"));
    menu.appendChild(menuCard("icons/burrito.svg", "Burrito"));
    menu.appendChild(menuCard("icons/soft_drink.svg", "Soft Drink"));
    menu.appendChild(menuCard("icons/milkshake.svg", "Milkshake"));
    menu.appendChild(menuCard("icons/ice_cream.svg", "Ice Cream"));
    menu.appendChild(menuCard("icons/coffee.svg", "Coffee"));
    menu.appendChild(menuCard("icons/muffin.svg", "Muffin"));
    return menu;
}

export default displayMenu;