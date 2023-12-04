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

  /**
   * Initializes the component and subscribes to the `getUsers` method of the `userApiService`.
   * Updates the `users` property with the received data.
   */
  ngOnInit(): void {
    this.usersSubscription = this.userApiService
      .getUsers()
      .subscribe((data) => {
        this.users = data;
      });
  }

  /**
   * Deletes a user from the list of users.
   * @param {IUsers} userToDelete - The user to be deleted.
   */
  deleteUser(userToDelete: IUsers): void {
    if (this.users) {
      this.users = this.users.filter((user) => user.id !== userToDelete.id);
      console.log(this.users);
    }
  }

  /**
   * Destroys the component and unsubscribes from the usersSubscription.
   */
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
