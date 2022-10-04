import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavigateToObjectPage extends NavigationMixin (LightningElement) {
    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    navigateToNewRecordPageWithDefault(){
        // encode default should be passed in the form of object
        const defaultValues = encodeDefaultFieldValues({
            FirstName:'Naveen',
            LastName:'Kumar K G',
            Email:'naveen.kg@cloudodyssey.co',
            LeadSource:'Web'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValues
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                filterRecent:'AllContacts'
            }
        })
    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}