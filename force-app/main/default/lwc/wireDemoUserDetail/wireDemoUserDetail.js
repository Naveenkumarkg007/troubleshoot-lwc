import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id'
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'

const fields=[NAME_FIELD,EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId=Id 
    // 0055i0000068ogfAAA
    // @wire(adapterId,adapterConfig)
    // propertyorFunction
    
    userDetail

    // wire to function
    @wire(getRecord,{recordId:'$userId', fields:fields})
    userDetailHandler({data,error}){
        if(data){
            this.userDetail=data.fields
        }
        if(error){
            console.error(error)
        }
    }
    
    //wire to property
    @wire(getRecord,{recordId:'$userId',fields:fields})
    userDetailProperty
}