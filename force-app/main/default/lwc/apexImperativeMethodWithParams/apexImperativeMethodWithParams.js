import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';

export default class ApexImperativeMethodWithParams extends LightningElement {
    searchKey=''
    accounts

    searchHandler(event){
        this.searchKey=event.target.value
 
        findAccounts({searchKey: this.searchKey})
        .then(result=>{
            this.accounts=result
        })
        .catch(error=>{
            console.log(error)
        })
        }
}