import { LightningElement, track } from 'lwc';

export default class JoinGroup extends LightningElement {
    showInputBox;
    showJoinButton;
    showJoinMessage;
    userName = 'Unknown'; 

    constructor(){
        super();
        this.showInputBox=true;
        this.showJoinButton=true;
        this.showJoinMessage=false;
    }
    connectedCallback(){
        //Change Styling

    }

    userIsTyping(event){
        //this.userName= event.target.value;
    }

    joinButtonClick(){
        this.showInputBox=false;
        this.showJoinButton=false;
        this.showJoinMessage=true;
        let inputValue = this.template.querySelector('[data-input]').value;
        this.userName=inputValue;
        this.render();
    }
}