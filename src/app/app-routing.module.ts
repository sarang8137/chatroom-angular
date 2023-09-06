import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'reg',component:RegComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'room',component:RoomComponent},
  {path:'chat',component:ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
