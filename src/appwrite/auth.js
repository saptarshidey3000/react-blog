import conf from "../conf.js";
import { Client, Account, ID } from "appwrite";

import { Appwrite } from "appwrite";
 export class Authservice {
    client = new Client ();
    account;

    constructor(){
        this.client
                   .setEndpoint(conf.appwriteURL)
                   .setProject(conf.appwritePROJECTID);
                this.account = new Account(this.account);
    } 

    async createAccount({email,password , name}) {
        try {
            const userAccount = await this.account.create(email , password , name);
            if (userAccount) {
                //return userAccount;
                //call another method
                return this.login({email , password});
            } else {
                return userAccount;
            }
        } catch (error){
            throw error;
        }
    }
  
    async login({email , password}){
         try {
           return await this.account.createEmailSession(email,password);
         } catch (error) {
            throw error;
         }
    }

    async getCurrentuser(){
        try {
            return await  this.account.get();
        } catch (error) {
            throw error ;
        }
        return null ;
    }

   async logout () {
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        throw error ;
    }
   }

 }

const authservice = new Authservice();

 export default Authservice ;