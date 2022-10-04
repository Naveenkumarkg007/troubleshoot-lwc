import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class RecordForm extends LightningElement {

    @api recordId
    @api objectApiName
    objectName=ACCOUNT_OBJECT
    fieldList=[NAME_FIELD,TYPE_FIELD,INDUSTRY_FIELD,ANNUALREVENUE_FIELD]

    successHandler(event){
        console.log(event.detail.id)
        const showToast= new ShowToastEvent({
            title:"Account Created",
            message:"Record ID: "+ event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(showToast);
    }


}