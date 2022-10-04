import { LightningElement, wire } from 'lwc';
import { getObjectInfo ,getObjectInfos } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfoAdapterDemo extends LightningElement {
    defaultRecordTypeId
    objectApiName
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    objectApiNames=[ACCOUNT_OBJECT,CONTACT_OBJECT,OPPORTUNITY_OBJECT]
    objectInfos
    @wire(getObjectInfos,{objectApiNames:'$objectApiNames'})
    objectApiHandler({data,error}){
        if(data){
            console.log(data)
            this.objectInfos=data
        }
        if(error){
            console.error(error)
        }
    }

}