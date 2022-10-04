import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ShowToastNotification extends LightningElement {
    toastHandler(){
        const event = new ShowToastEvent({
            title:'success!!',
            message:'Account Created',
            variant:'success'
        })
        this.dispatchEvent(event)
    }

    toastHandlerOne(){
        this.showToast('Success!!!!','{0} Account Created {1}','success')
    }

    toastHandlerTwo(){
        this.showToast('Error!!!!','Account Creation Failed','error')
    }

    toastHandlerThree(){
        this.showToast('Warning!!!!','Password should be 12 Characters','warning')
    }

    toastHandlerFour(){
        this.showToast('Info!!!!','Summer release in 2022','info')
    }

    showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce',{
                    url:'https://www.google.com/',
                    label:'Click Here'
                }
            ],
            mode:'sticky'
        })
        this.dispatchEvent(evt)
    }
}   