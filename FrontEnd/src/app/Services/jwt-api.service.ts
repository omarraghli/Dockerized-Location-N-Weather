import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JwtAPIService {
  token: string | undefined;
  message?: string;
  SignIn: boolean = false;
  user: any;
  errorMessage: any;

  constructor(private http: HttpClient, private router: Router) {}

  async SendValuesForAuth(data: any) {
    this.errorMessage ='';
    let resp = this.http.post('http://0.0.0.0:8000/api/login/', data, {
      responseType: 'Text' as 'json',
    });
    resp.subscribe((res) => {
      this.stockToken(res);
    });
  }

  public stockToken(token: any) {
    this.errorMessage ='';
    localStorage.setItem('Token', token.replaceAll('"', ''));
    this.token = token;
    console.warn(this.token);
    if (this.token != 'Erreur authentication') {
      this.giveAcess();
      localStorage.setItem('SignIn', 'true');
      this.setToken(token);
      this.router.navigate(['/Home']);
    } else {
      console.warn('no');
      this.message = 'username or password inccorect';
    }
  }

  public giveAcess() {
    this.SignIn = true;
  }
  public setToken(token: any) {
    this.token = token;
  }
  SendValues(data: any) {
    this.errorMessage ='';
    this.http
      .post('http://0.0.0.0:8000/api/register/', data)
      .pipe()
      .subscribe(
        (result) => {
          console.warn('result', result);
        },
        (error) => {
          //Error callback
          console.error('error caught in component');
          this.errorMessage = error;
          //throw error;   //You can also throw the error to a global error handler
        }
      );
  }
  getToken(): any {
    return localStorage.getItem('Token');
  }

  async getUser() {
    let resp = this.http.get('http://0.0.0.0:8000/api/user/', {
      headers: { Authorization: this.getToken() },
    });
    return resp;
  }
}
