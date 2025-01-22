// src/app/shared/user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usernameSource = new BehaviorSubject<string>(''); // Default value
  currentUsername = this.usernameSource.asObservable();

  updateUsername(username: string) {
    this.usernameSource.next(username);
  }
}
