import { LightningElement, track} from 'lwc';

export default class TrackProperties extends LightningElement {
    @track address={
        city:"Banglore",
        country:"India",
        postalCode:"12345"
    }

    student={
        name:"Nagesh",
        age: 30,
        department:"Ece"
    }

    cityHandler(event){
        this.address.city = event.target.value
    }

    countryHandler(event){
        this.address.country = event.target.value   
    }

    postalCodeHandler(event){
        this.address.postalCode = event.target.value
    }

    nameHandler(event){
        this.student = {...this.student, "name":event.target.value} 
    }
}