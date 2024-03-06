import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  @Input() user:any;
  @Input() index:any;
}
