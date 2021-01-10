import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }


  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
  }

  saveUserAndJwt(obj: any) {
    localStorage.setItem('jwt', obj.jwt);
    localStorage.setItem('user', JSON.stringify(obj.user));
  }

  getJwt() {
    return localStorage.getItem('jwt');
  }

  getUserName(): string {
    const json = localStorage.getItem('user');
    if (!json)
      return undefined;

    return JSON.parse(json).name;
  }

  registr(name: string, password: string): Observable<any> {
    return this.http.post(`${environment.serverUrl}/user/register`, {
      "name": name,
      "password": password
    });
  }

  logIn(name: string, password: string): Observable<any> {
    return this.http.post(`${environment.serverUrl}/user/login`, {
      "name": name,
      "password": password
    });

  }
}
