function displayHome()
{
    let homeDisplay = document.createElement('div');
    homeDisplay.classList.add('fullPage');
    homeDisplay.appendChild(createHomeIntro());
    homeDisplay.appendChild(createHomeHours());
    homeDisplay.appendChild(createLocation());
    return homeDisplay;
}

function createHomeIntro()
{
    let homeIntro = document.createElement('div');
    homeIntro.classList.add('pageSection');
    let burgerPic = document.createElement('img');
    burgerPic.src = "images/burger.png";
    burgerPic.classList.add('burger-pic');
    homeIntro.appendChild(createParagraph("The best fast-food you've tasted !"));
    homeIntro.appendChild(burgerPic);
    homeIntro.appendChild(createParagraph("Established in 2021"));
    homeIntro.appendChild(createParagraph("Created in Canada"));
    return homeIntro;
}

function createHomeHours()
{
    let homeHours = document.createElement('div');
    homeHours.classList.add('pageSection');
    homeHours.appendChild(createParagraph("Our working hours are"));
    homeHours.appendChild(createParagraph("Monday - Friday (Weekdays) : 12pm to 10pm"));
    homeHours.appendChild(createParagraph("Saturday and Sunday (Weekends) : 12pm to 11:30pm"));
    return homeHours;
}

function createLocation()
{
    let locationSection = document.createElement('div');
    locationSection.classList.add('pageSection');
    locationSection.appendChild(createParagraph("We are located at :"));
    locationSection.appendChild(createParagraph("56 Yonge St, Toronto, Ontario, M5G 1R1"));
    return locationSection;
}

function createParagraph(sentence)
{
    let paragraph = document.createElement('p');
    paragraph.textContent = sentence;
    paragraph.classList.add('home-paragraph');
    return paragraph;
}

export {createParagraph as createParagraph};
export default displayHome;