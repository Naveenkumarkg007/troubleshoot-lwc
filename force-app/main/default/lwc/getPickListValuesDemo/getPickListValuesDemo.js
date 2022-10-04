import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import TYPE_FIELD from '@salesforce/schema/Account.Type'

export default class GetPickListValuesDemo extends LightningElement {
    
    selectedIndustry = '';
    industryOptions=[];
    seletedType='';
    typeOptions=[];

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:INDUSTRY_FIELD})
    industryPickList({data,error}){
        if(data){
            console.log(data)
            this.industryOptions=[...this.generatePicklist(data)]
        }  
        if(error){
            console.error(error)
        }
    }

    generatePicklist(data){
        return data.values.map(item=>({label:item.label, value: item.value}))
    }
    
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    // second type pfr type picklist
    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName:TYPE_FIELD})
    typePickList({data,error}){
        if(data){
            console.log(data)
            this.typeOptions=[...this.generatePicklist(data)]
        }  
        if(error){
            console.error(error)
        }
    }

    handleTypeChange(event) {
        this.seletedType = event.detail.value;
    }
}