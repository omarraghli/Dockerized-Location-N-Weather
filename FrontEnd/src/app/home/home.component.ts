import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtAPIService } from '../Services/jwt-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  username: string = '';
  constructor(private http: HttpClient, private secureService: JwtAPIService) {}

  async ngOnInit() {
    let resp = this.secureService.getUser();
    (await resp).subscribe((data) => {
      this.user = data;
      console.log('user', this.user);
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
}
