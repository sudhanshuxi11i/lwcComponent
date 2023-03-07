import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
export default class CreateContact extends LightningElement {
    name;
    phone;
    nameHandler(event){
        this.name=event.target.value;
    }
    phoneHandler(event){
        this.phone=event.target.value;
    }
    createAccount(){
        let fields = {LastName:this.name,Phone:this.phone};
        let record = {apiName:'Contact',fields};
        createRecord(record).then((res)=>{
            console.log('Contact created');
        }).catch((err)=>{
            console.log(err);
        })

    }
}