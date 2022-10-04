import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class RecordEditFormCustomValidation extends LightningElement {
    objectName=ACCOUNT_OBJECT
    inputValue=''

    handleChange(event){
        this.inputValue=event.target.value
    }

    
}