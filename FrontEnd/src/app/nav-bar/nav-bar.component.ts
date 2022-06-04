import { Component, OnInit } from '@angular/core';
import { JwtAPIService } from '../Services/jwt-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private secureService:JwtAPIService) {}

  ngOnInit(): void {}
  public isSignIn() {
    return localStorage.getItem('SignIn');
  }

  public Logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('user');
    localStorage.setItem('SignIn', 'false');
  }
}
