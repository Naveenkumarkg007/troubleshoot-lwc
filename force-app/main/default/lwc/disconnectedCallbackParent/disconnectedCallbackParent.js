import { LightningElement } from 'lwc';

export default class DisconnectedCallbackParent extends LightningElement {
    isVisible = false;
    
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

    handleClick() {
        this.isVisible = !this.isVisible;
    }

    errorCallback(error,stack) {
        console.log(error.message);
        console.log(stack);
    }
}