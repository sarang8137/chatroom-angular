import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../servics/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {

  file:any;
  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){}

  proForm=this.fb.group({
    name:['',[Validators.required]],
    slug:['',[Validators.required]],
  })

  submitted(){
    let name=this.proForm.controls.name.value
    let slug=this.proForm.controls.slug.value
    console.log(name,slug)
    this.file=name

    this.ds.addRoom(name,slug).then(res=>res.json()).then(res=>{
      if(res){
        alert("Room added Successfully!!")
        this.r.navigate(['home'])
      }
      else{
        alert("Something Wrong")
      }
    })

  }

}