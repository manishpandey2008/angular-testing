import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../user.service';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:User[]=[]
  // userService=import(UserService);
  constructor(readonly userService:UserService){
    console.log("-------------");
    
  }
}
