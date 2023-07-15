import './styles.css';
import godImg from './god.jpg'
export class Contact{
    constructor(parentDiv,divClass, ImgBoxClass){
        this.parentDiv=parentDiv;
        this.divClass=divClass;
        this.ImgBoxClass=ImgBoxClass;
    }
    genContact(){
        let contactUS=document.createElement('div');
        contactUS.classList.add(this.divClass);
        let contactUSh1=document.createElement('h1');
        contactUSh1.textContent="Contact Us";
        let God=document.createElement('div');
        let GodImg=document.createElement('img');
        GodImg.setAttribute('src',godImg);
        GodImg.setAttribute('alt','God');
        GodImg.height=80;
        GodImg.width=80;
        GodImg.style.borderRadius="20%";
        God.classList.add(this.ImgBoxClass);
        let Name=document.createElement('p');
        Name.textContent="God";
        
        let contactUSp1=document.createElement('p');
        contactUSp1.textContent="Phone: 555-555-5555";
        God.appendChild(Name);
        God.appendChild(GodImg);
        contactUS.appendChild(contactUSh1);
        this.parentDiv.appendChild(contactUS);
        this.parentDiv.appendChild(God);
    }
      fillContact(){
        this.genContact();
      }  
        removeContact(){
            while(this.parentDiv.firstChild){
                this.parentDiv.removeChild(this.parentDiv.firstChild);
            }
        }

}