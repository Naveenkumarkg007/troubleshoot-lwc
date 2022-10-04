import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToLwcPage extends NavigationMixin(LightningElement) {
    navigateToLwcPage(){
        var defination={
            componentDef:'c:navigateToLwcTarget',
            attributes:{
                recordId:'0035i00000EKcdfAAD'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }
}