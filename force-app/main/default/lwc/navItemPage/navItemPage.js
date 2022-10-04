import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavItemPage extends NavigationMixin (LightningElement){
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Apex_Methods'
            }
        })
    }
}