import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector:'[app-servers]',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  allowclick=false;
  serverStatus="No server was created";
  servername='Test Server';
  username='';
  showpara=false;
  buttonClicks=[];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);

    
  }

  ngOnInit() {
  }

//   onClickServer(){
//     this.serverStatus=`Server created!Name is ${this.servername}` ;
//  //   return this.serverStatus;
//   }

  onClickreset(){
    this.username='';
 //   return this.serverStatus;
  }

  onClickDisplay(){
    if(this.showpara===false){
      this.showpara=true;
    }else{
      this.showpara=false;
    }
    this.buttonClicks.push(this.buttonClicks.length+1);
  }

  checkForFive(){
    // return this.buttonClicks.length >= 5? 'blue': 'transparent' ;
    for(let buttonClick of this.buttonClicks){
      console.log("buttonclicks",this.buttonClicks);
      console.log("buttonClick",buttonClick);
      console.log("buttonClick type",typeof(buttonClick));
      var color='';
      if (buttonClick>=5){
        color='blue';
      }else{
        color='transparent';
      } 
    } 
    return color;
  }

  // onUpdateServer(event){
  //   console.log(event);
  //   this.servername=event.target.value;
  // }
    
  // onInputUser(event){
  //   this.UserName=event.target.value;
  //   if(this.UserName){
  //     this.allowclick=true;
  //   }
  // }
    
}
