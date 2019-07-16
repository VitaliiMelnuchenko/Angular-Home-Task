export class User {
    public login: string;
    public userUrl: string;
    public userRepos: string;

    constructor(login: string, userUrl: string, userRepos: string) {
        this.login = login;
        this.userUrl = userUrl;
        this.userRepos = userRepos;
    }
}