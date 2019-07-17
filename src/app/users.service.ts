import { HttpClient } from '@angular/common/http';

export class UsersService {
    users = [];

    constructor(private http: HttpClient) {

    }

    getUsers() {
        return this.users;
    }

    setUsers(searchUrl: string) {
        this.http.get(searchUrl)
        .subscribe((response: {items: []}) => {
            this.users =response.items;
        });   
    }
}