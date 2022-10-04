import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor() {
        super();
        console.log("Parent Constructor is called");
    }

    connectedCallback() {
        console.log("Parent connectedCallback is called");
        }

    renderedCallback() {
        console.log("Parent renderedCallback is called");
        }
    
    name
    changeHandler(event){
        this.name=event.target.value
    }
    
    
}   