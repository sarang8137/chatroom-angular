import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../servics/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  constructor(private fb:FormBuilder,private r:Router,private ds:DataService){
  }

  regForm=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+')]],
    cpassword:['',Validators.required]
  })

  submitted(){
    if(this.regForm.valid){

      let username=this.regForm.controls.username.value
      let pass1=this.regForm.controls.password.value
      let pass2=this.regForm.controls.cpassword.value

      if(pass1 == pass2){
        this.ds.signup(username,pass1).then(res=>res.json()).then(res=>{
          alert("Sign UP Completed!")
          this.r.navigate([''])
        }).catch(res=>alert("Sign Up Failed!"))
      }
      else{
        alert("password mismatches")
      }
    }
    else{
      this.regForm.errors
      alert('form is invalid')

    }
   
  }


}
