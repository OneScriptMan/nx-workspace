import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from '@org/data-access';
import { IUsers } from '@org/data-access';
import { Subscription } from 'rxjs';

@Component({
  selector: 'org-feature-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-users-list.component.html',
  styleUrl: './feature-users-list.component.css',
})
export class FeatureUsersListComponent implements OnInit, OnDestroy {
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
