import { LightningElement,track } from 'lwc';
import venDetails from '@salesforce/apex/GetVendorDetails.getVendor';

export default class ShowVendorData extends LightningElement {
    numberOFVendors = 0;
    @track data = [];
    showData = false;

    handleChange(event){
        this.numberOFVendors = event.target.value;
    }

    handleClick(){
        venDetails({rate : this.numberOFVendors})
        .then(result =>{
            console.log("data =>" + JSON.stringify(result));
            this.data = result;
        })

        this.showData = true;
    }
}