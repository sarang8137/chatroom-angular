import { Component } from '@angular/core';
import { DataService } from '../servics/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pro:any=[]
  constructor(private ds:DataService,private r:Router){
    this.ds.getRoom().then(res=>res.json()).then(res=>this.pro=res)
    console.log(this.pro)
  }



  logout(){
    localStorage.clear()
    this.r.navigate([''])
  }



}