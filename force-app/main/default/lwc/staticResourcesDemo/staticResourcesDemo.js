import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import USER_WALKING_IMG from '@salesforce/resourceUrl/user_walking'
import SALESFORCE_LOGO from '@salesforce/resourceUrl/Salesforce_Logo'

export default class StaticResourcesDemo extends LightningElement {
    userImage=USER_IMAGE
    userWalkingImage=USER_WALKING_IMG
    salesforceLogo=SALESFORCE_LOGO
}