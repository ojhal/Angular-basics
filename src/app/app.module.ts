import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
