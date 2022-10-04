import { LightningElement,track } from 'lwc';
import createAccount from '@salesforce/apex/AccountCreationController.createAccount'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type'
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class AccountCreationApex extends LightningElement {
    @track accountId
    @track error
    @track accountRecord={
        Name:ACCOUNT_NAME,
        Type:ACCOUNT_TYPE,
        Phone:ACCOUNT_PHONE
    }

    handleNameChange(event){
        this.accountRecord.Name = event.target.value
    }

    handleTypeChange(event){
        this.accountRecord.Type = event.target.value
    }

    handlePhoneChange(event){
        this.accountRecord.Phone = event.target.value
    }

    handleSaveAccount(){
        createAccount({accountRecObj:this.accountRecord})
        .then(result=>{
            this.accountRecord = {};
            this.accountId = result.Id;
            this.showToast('success!!',`Account created with ${result.Id}`);
            this.template.querySelector('form.createForm').reset()
        //     const showToast = new ShowToastEvent({
        //         title:'Success!!!',
        //         messsage:'Account Creation Successfull',
        //         variant:'success'
        //     });
        //     this.dispatchEvent(showToast);
        // })
        
    }).catch(error=>{
        this.showToast('error!!',error.body.message,'error')
    })
    }

    showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        });
        this.dispatchEvent(evt);
    }
}