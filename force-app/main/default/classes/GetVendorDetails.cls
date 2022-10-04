public with sharing class GetVendorDetails {
    @AuraEnabled
    public static List<Vendor__c> getVendor(Integer rate){
       string s = string.valueOf(rate);
       List<Vendor__c> vnd = [SELECT Id, Name,Rate__c,Account__r.Name FROM Vendor__c WHERE Rate__c <=:rate WITH SECURITY_ENFORCED ORDER BY Account__r.Name];
       return vnd;
    }
}
