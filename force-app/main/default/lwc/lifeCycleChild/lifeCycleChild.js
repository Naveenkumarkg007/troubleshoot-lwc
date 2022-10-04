import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor() {
        super();
        console.log("Child Constructor is called");
    }

    connectedCallback() {
        console.log("Child connectedCallback is called");
        }

    renderedCallback() {
        console.log("Child renderedCallback is called");
        }
}