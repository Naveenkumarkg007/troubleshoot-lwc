import { LightningElement, wire,api} from 'lwc';
import { getRecord,getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import OWNER_FIELD from '@salesforce/schema/Contact.Owner.Name'
// import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'
// import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'

export default class GetRecordsDemo extends LightningElement {
    @api recordId
    // firstName
    // lastName
    name
    email   
    phone
    owner

    @wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,EMAIL_FIELD,PHONE_FIELD,OWNER_FIELD]})

    // @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full'],modes:['View']}) 
    contactHandler({data,error}){
        if(data){
            console.log('ffff',data)
            // this.firstName= data.fields.FirstName.displayValue ? data.fields.FirstName.displayValue: data.fields.FirstName.value
            // this.lastName= data.fields.LastName.displayValue ? data.fields.LastName.displayValue: data.fields.LastName.value
            this.name= getFieldValue(data,NAME_FIELD)
            this.email= getFieldValue(data,EMAIL_FIELD)
            this.phone= getFieldValue(data,PHONE_FIELD)
            this.owner= getFieldValue(data,OWNER_FIELD)
        }
        if(error){  
            console.error(error)
        }
    }
}