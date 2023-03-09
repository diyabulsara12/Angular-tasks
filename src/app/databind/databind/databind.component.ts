import { Component, OnInit } from '@angular/core';
import { datatypes } from "./interface";

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent   {

  constructor() {
    

   }
   
    data:datatypes={
      id:1,
      firstname:"riya",
      lastname:"bulsara",
      address:"valsad"
    }
    saveData(){
console.log(this.data.firstname);
console.log(this.data.lastname);
console.log(this.data.address);
 }



  name:string="Diya";
// table with class and style
  public mypro:boolean=true;
  public mystyle:string="white";
  public  cols:number=5;
  public  mycaption:string='center';
  public captext:string="uppercase"
  public capcolor:string="red"
  public font=" bolder"
}

