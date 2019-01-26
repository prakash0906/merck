import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

  public isLoggedIn() {
  	return !!localStorage.getItem('currentUser') || true;
  }

  login(username: string, password: string) {
    // { username: username, password: password }
        return this.http.get<any>(`/assets/mock/user.json`)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }


  public logout() {
  	localStorage.removeItem('currentUser');
  }

  public register(user) {
        return this.http.get(`/assets/mock/user.json`);
    }
}
