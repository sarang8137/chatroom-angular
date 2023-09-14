import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  signup(username:any,password:any){

    let data={
      username,
      password
    }

      return fetch('http://127.0.0.1:8000/user/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

  }

  signin(username:any,password:any){
    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/token', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
  getRoom(){
    return fetch('http://127.0.0.1:8000/roomall/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  addRoom(name:any,slug:any){
    let data={
      name,
      slug
    }
    return fetch('http://127.0.0.1:8000/chat/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  addChat(content:any){
    let data={
      content
    }
    return fetch('http://127.0.0.1:8000/room/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  getMsg(){
    let data={
      'room':localStorage.getItem('room')
    }
    return fetch('http://127.0.0.1:8000/room/msgret/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }



}
