import { createParagraph } from "./home";
 
function displayContact()
{
    console.log("rdfvfd");
   let contactDisplay = document.createElement('div');
   contactDisplay.classList.add('fullPage');
   contactDisplay.appendChild(createInfoSection());
   return contactDisplay;
}
 
function createInfoSection()
{
   let infoSection = document.createElement('div');
   infoSection.classList.add('pageSection');
   infoSection.appendChild(createParagraph("Our contact information is"));
   infoSection.appendChild(createParagraph("Phone Number: +1(647)-000-0000"));
   infoSection.appendChild(createParagraph("Email Address: abdurozik123@gmail.com"));
   return infoSection;
}
 
export default displayContact;