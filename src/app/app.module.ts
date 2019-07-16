import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UsersService } from './users.service';

const appRouts: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'users', component: SearchComponent},
  {path: 'users/:id', component: UserInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    SearchComponent,
    UserListComponent,
    UserItemComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
