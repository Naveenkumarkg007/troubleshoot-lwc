import { LightningElement, wire } from 'lwc';
import {getObjectInfo,getPicklistValuesByRecordType} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetPicklistValuesByRecordType extends LightningElement {
    ratingOptions
    industryOptions
    selectedRating
    selectedIndustry

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    picklistHandler({data,error}){
        if(data){
            console.log('ddd==',data)
            this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
            this.industryOptions = this.picklistGenerator(data.picklistFieldValues.Industry)
        }
        if(error){
            console.error(error)
        }
    }

    picklistGenerator(data){
        return data.values.map(item=>({ "label":item.label,"value":item.value}))
    }

    handleChange(event){
        const {name,value} = event.target
        console.log(event.target.name+ '==>' +event.target.value)
        if(name === 'Industry'){
            this.selectedIndustry = value
        }   
        if(name === 'Rating'){
            this.selectedRating = value
        }
    }
}