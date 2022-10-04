import { LightningElement } from 'lwc';
import emailAddress from '@salesforce/label/c.Email_Address'
import mobile from '@salesforce/label/c.Mobile'

export default class CustomLabelsDemo extends LightningElement {
    emailAddress
    mobile
    
    label={
        emailAddress,
        mobile
    }

    handleCancel(){

    }

    handleNext(){
        
    }

}