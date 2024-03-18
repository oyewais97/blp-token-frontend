import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get currentUserSession() {
    const sessionKey = localStorage.getItem('session');
    if (!sessionKey) {
      return null;
    }
    
    return sessionKey
  }

  

  get isLoggedIn(): boolean {
    return !!(this.currentUserSession);
  }
  logout(): void {
    
  }
  setAuthSession(token: any): void {
    localStorage.setItem('session', token);
  }
  
}
