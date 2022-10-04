import { LightningElement } from 'lwc';

export default class DisconnectedCallbackChild extends LightningElement {
    constructor() {
        super();
        console.log("Child Constructor is called");
    }

    connectedCallback() {
        console.log("Child connectedCallback is called");
        throw new Error('Loading of child element is failed');
        }

    renderedCallback() {
        console.log("Child renderedCallback is called");
        }

    disconnectedCallback(){
        window.alert("Disconnectedcallback is called");
    }
}