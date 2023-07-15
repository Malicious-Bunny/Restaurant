import './styles.css';
import {Home as Home} from './home.js';
import {Menu as Menu} from './menu.js';
import {Contact as Contact} from './contact.js'


let contentDiv=document.getElementById('content');
let headerDiv=document.createElement('header');
let Nav=document.createElement('nav');
let ul=document.createElement('ul');
let li1=document.createElement('li');
let li2=document.createElement('li');
let li3=document.createElement('li');
let HomeLink=document.createElement('a');
let MenuLink=document.createElement('a');
let ContactLink=document.createElement('a');
HomeLink.textContent="Home";
MenuLink.textContent="Menu";
ContactLink.textContent="Contact";
headerDiv.appendChild(Nav);
Nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
li1.appendChild(HomeLink);
li2.appendChild(MenuLink);
li3.appendChild(ContactLink);
let mainDiv=document.createElement('div');
mainDiv.setAttribute('id','main');
let mainDivContent=document.createElement('div');
mainDivContent.setAttribute('id','MainContent');
let footerDiv=document.createElement('footer');
let footerDivContent=document.createElement('div');
footerDivContent.setAttribute('id','foot');
let footerDivContentP1=document.createElement('p');
let footerDivContentP2=document.createElement('p');
let footerDivContentP3=document.createElement('p');
footerDivContentP1.textContent="Wallpaper made by: https://wallhere.com ";
footerDivContentP2.textContent="Images from: https://www.pexels.com ";
footerDivContentP3.textContent="Icons from: https://fontawesome.com ";
footerDivContent.appendChild(footerDivContentP1);
footerDivContent.appendChild(footerDivContentP2);
footerDivContent.appendChild(footerDivContentP3);
footerDiv.appendChild(footerDivContent);
let Menu1=new Menu(mainDivContent,'Menu');
let home=new Home(mainDivContent,'divCont');
let Contact1=new Contact(mainDivContent,'contactUs','contactImg');
mainDiv.appendChild(mainDivContent);
contentDiv.appendChild(headerDiv);
contentDiv.appendChild(mainDiv);
contentDiv.appendChild(footerDiv);
window.onload=home.fillHome();
window.onload=HomeLink.style.color="rgb(66, 66, 203)";
window.onload=HomeLink.style.border="2px solid rgb(66, 66, 203)";
window.onload=HomeLink.style.fontSize="1.7rem";

HomeLink.addEventListener('click',function(e){
    e.target.style.color="rgb(66, 66, 203)";
    HomeLink.style.border="2px solid rgb(66, 66, 203)";
    HomeLink.style.fontSize="1.7rem";
    MenuLink.style.fontSize="1.4rem";
    ContactLink.style.fontSize="1.4rem";
    MenuLink.style.border="none";
    ContactLink.style.border="none";
    MenuLink.style.color="black";
    ContactLink.style.color="black";
    while(mainDivContent.firstChild){
        mainDivContent.removeChild(mainDivContent.firstChild);
    }
    home.removeHome();
    home.fillHome();
});
MenuLink.addEventListener('click',function(e){
    e.target.style.color="rgb(66, 66, 203)";
    MenuLink.style.border="2px solid rgb(66, 66, 203)";
    MenuLink.style.fontSize="1.7rem";
    HomeLink.style.fontSize="1.4rem";
    ContactLink.style.fontSize="1.4rem";
    HomeLink.style.border="none";
    ContactLink.style.border="none";
    HomeLink.style.color="black";
    ContactLink.style.color="black";
    while(mainDivContent.firstChild){
        mainDivContent.removeChild(mainDivContent.firstChild);
    }
    Menu1.removeMenu();
    Menu1.fillMenu();
});
ContactLink.addEventListener('click',function(e){
    e.target.style.color="rgb(66, 66, 203)";
    ContactLink.style.border="2px solid rgb(66, 66, 203)";
    ContactLink.style.fontSize="1.6rem";
    HomeLink.style.fontSize="1.4rem";
    MenuLink.style.fontSize="1.4rem";
    MenuLink.style.border="none";
    HomeLink.style.border="none";
    MenuLink.style.color="black";
    HomeLink.style.color="black";
    while(mainDivContent.firstChild){
        mainDivContent.removeChild(mainDivContent.firstChild);
    }
    Contact1.removeContact();
    Contact1.fillContact();
});

