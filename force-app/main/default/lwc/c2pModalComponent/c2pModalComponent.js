import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){
        const myEvent = new CustomEvent('close',{
            bubbles:true,
            detail: "Modal Closed Successfully!!"
        })
            this.dispatchEvent(myEvent)
        
    }
    
    footerHandler(){
        console.log("Footer Handler is called")
    }
}
        