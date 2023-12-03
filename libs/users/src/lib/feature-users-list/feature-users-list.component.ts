import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from '@org/data-access';
import { IUsers } from '@org/data-access';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'org-feature-users-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
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

  deleteUser(userToDelete: IUsers): void {
    if (this.users) {
      this.users = this.users.filter((user) => user.id !== userToDelete.id);
      console.log(this.users);
    }
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
