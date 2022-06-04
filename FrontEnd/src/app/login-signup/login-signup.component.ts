import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAPIService } from '../Services/jwt-api.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {
  user: any;
  username: any;
  msg!: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private secureService: JwtAPIService
  ) {}

  ngOnInit(): void {}

  async SendValuesForAuth(data: any) {
    this.secureService.SendValuesForAuth(data);
  }

  SendValues(data: any) {
    this.secureService.SendValues(data);
  }
}
