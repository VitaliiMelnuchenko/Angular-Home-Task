import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.username);
    let url = 'https://api.github.com/search/users?q=' + form.value.username;
    this.usersService.getUsers();
  }

}
