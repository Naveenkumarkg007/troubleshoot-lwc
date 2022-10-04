import { LightningElement, wire,api } from 'lwc';
import {getRecordUi} from 'lightning/uiRecordApi';

export default class GetRecordUiDemo extends LightningElement {
    formFields=[
        {"fieldName":"FirstName", "label":"First Name"},
        {"fieldName":"LastName", "label":"Last Name"},
        {"fieldName":"Phone", "label":"Phone Number"},
        {"fieldName":"Email", "label":"Email"},
        {"fieldName":"LeadSource", "label":"Lead Source"}
    ]
    @api recordId
    @wire(getRecordUi,{recordIds:'$recordId',layoutTypes:'Full',modes:'Edit'})
    conntactUiHandler({data,error}){
        if(data){
            console.log('resultUi',data)
            this.formFields= this.formFields.map(item=>{
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error)    
        }
    }
}