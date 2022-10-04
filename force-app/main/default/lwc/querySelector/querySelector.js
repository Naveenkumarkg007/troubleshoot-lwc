import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    users=["Naveen", "Nagesh","Rajesh"];
    fetchDetailsHandler(){
        const elem = this.template.querySelector('h1');
        // to apply style
        elem.style.border="1px solid green";
        console.log(elem.innerText)

        const userElem = this.template.querySelectorAll('.name');
        // converting users to array 
        Array.from(userElem).forEach(item => {
            console.log(item.innerText)
        });


        // lwc manual demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p>Hey I am a child Element</P>' 
    }
}   