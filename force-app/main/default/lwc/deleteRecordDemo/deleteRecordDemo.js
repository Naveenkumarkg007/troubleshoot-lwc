import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class DeleteRecordDemo extends LightningElement {
    recordId
    handleChange(event){
        this.recordId = event.target.value
    }

    handleClick(){
        deleteRecord(this.recordId).then(()=>{
            console.log("Record Deleted Successfully!!")
            this.showToast("success","Record Deleted Successfully!!",'success')
            this.template.querySelector('form.deleteForm').reset()
        }).catch(error=>{
            console.error("Error Deleting Record Failed",error.body.message)
            this.showToast("Error","Error Deleting Record Failed!!",'error')
        })
    }

    showToast(title,message,variant){
        const evt = new ShowToastEvent ({
            title,
            message,
            variant:variant || 'success'
        })
        this.dispatchEvent(evt)
    }
}