import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from './services/user-api-service/user-api-service.service';
import { IUsers } from './services/user-api-service/iusers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'org-data-access',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-access.component.html',
  styleUrl: './data-access.component.css',
})
export class DataAccessComponent implements OnInit, OnDestroy {
  constructor(private userApiService: UserApiService) {}

  users: IUsers[] | null = null;
  usersSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.usersSubscription = this.userApiService
      .getUsers()
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
