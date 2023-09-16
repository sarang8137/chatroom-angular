import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../servics/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  pro:any=[]
 
  pid:any

  constructor(private ar:ActivatedRoute,private fb:FormBuilder,private ds:DataService,private r:Router){
   this.getchat()
   this.ar.params.subscribe(res=>this.pid=res['room'])
   
  }

  chatForm=this.fb.group({
    message:['',[Validators.required]],
    
  })

  submitted(){
    let mssg=this.chatForm.controls.message.value
    console.log(mssg)
    let rid=localStorage.getItem('room')

    

    this.ds.addChat(mssg,rid).then(res=>res.json()).then(res=>{
      if(res['token']){
        console.log(res)
        localStorage.setItem('token',res['token'])
      }
    })
    this.r.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.r.navigate(['chat']);
    });
  

  }

  getchat(){
    this.ds.getMsg().then(res=>res.json()).then(res=>this.pro=res)
    console.log(this.pro)
  }


  // clicked(e:any){
  //   let msg=e.target.id
  //   localStorage.setItem("msg",msg)
  // }


}









