public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> accList=[SELECT ID, Name, Type,Industry FROM Account WITH SECURITY_ENFORCED LIMIT 5];
        return accList;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountType(String type){
        return [SELECT ID, Name, Type,Industry FROM Account WHERE Type=:type WITH SECURITY_ENFORCED LIMIT 5];
    }

    @AuraEnabled
    public static List<Account> findAccounts(string searchKey){
        string key= '%'+searchKey+'%';
     return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE:key WITH SECURITY_ENFORCED LIMIT 5];
    }
}