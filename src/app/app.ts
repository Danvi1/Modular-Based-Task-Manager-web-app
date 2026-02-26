import { Component, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager-app');

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string){
    console.log("Selected user with id: ", id);
    this.selectedUserId = id;
  }

}
