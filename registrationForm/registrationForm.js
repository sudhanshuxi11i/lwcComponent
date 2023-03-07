import { LightningElement ,track} from 'lwc';

export default class RegistrationForm extends LightningElement {
    name;
    age;
    email;
    dob;
    profileImage;
    password;
    @track showForm;
    @track showInformation;
    constructor(){
        super();
    }
    connectedCallback(){
        this.showForm=true;
        this.showInformation=false;
    }
    nameHandler(event){
        this.name = event.target.value;
    }
    ageHandler(event){
        this.age=event.target.value;
    }
    emailHandler(event){
        this.email=event.target.value;
    }
    dobHandler(event){
        this.dob = event.target.value;
    }
    profileImageHandler(event){
        this.profileImage= event.target.value;
    }
    passwordHandler(event){
        this.password = event.target.value;
    }

    submitHandler(event){
        this.showForm=false;
        this.showInformation=true;
    }
    resetForm(){
        this.showForm=true;
        this.showInformation=false;
    }

}