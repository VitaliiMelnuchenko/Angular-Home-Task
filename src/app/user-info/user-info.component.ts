import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  private baseUrl: string = 'https://api.github.com/users/';
  public userData: any;
  public repos: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const login = this.route.snapshot.params['id'];

    this.getUserData(login);
    this.getRepos(login);
  }

  getUserData(id: string) {
    this.http.get(this.baseUrl + id)
    .subscribe(response => {
        this.userData = response;
    });   
  }

  getRepos(id: string) {
    this.http.get(this.baseUrl + id + '/repos')
    .subscribe(response => {
        this.repos = response;
    });   
  }
}
