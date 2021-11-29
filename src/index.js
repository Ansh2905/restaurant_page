import displayHome from "./home";
import displayContact from "./contact";
import displayMenu from "./menu";

function createNavigationBar()
{
    let nav = document.createElement('nav');
    nav.id = "navigation-bar";
    let title = document.createElement('div');
    let homeButton = createNavButton();
    let menuButton = createNavButton();
    let contactButton = createNavButton();
    title.id = 'title';
    title.textContent = "Ansh's Fast Food";
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact Us";
    homeButton.addEventListener('click', activateHomePage);
    menuButton.addEventListener('click', activateMenuPage);
    contactButton.addEventListener('click', activateContactPage);
    let navButtons = document.createElement('div');
    navButtons.classList.add('navigation-section');
    nav.appendChild(title);
    navButtons.appendChild(homeButton);
    navButtons.appendChild(menuButton);
    navButtons.appendChild(contactButton);
    nav.appendChild(navButtons);
    return nav;
}

function createNavButton()
{
    let navButton = document.createElement('button');
    navButton.classList.add('navigation-button');
    return navButton;
}

function activateHomePage()
{
    let content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createNavigationBar());
    content.appendChild(displayHome());
}

function activateMenuPage()
{
    let content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createNavigationBar());
    content.appendChild(displayMenu());
}

function activateContactPage()
{
    let content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createNavigationBar());
    content.appendChild(displayContact());
}

function activateWebsite()
{
    let content = document.querySelector('#content');
    content.appendChild(createNavigationBar());
    content.appendChild(activateHomePage());
}

activateWebsite();