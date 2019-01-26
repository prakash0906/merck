import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from '@angular/forms';  //<<<< import it here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageHeaderComponent } from './page-header/page-header.component'

import { AppService } from './app-service.service';
import { LoginService } from './login.service';
import { RouteGuard } from './route-guard';
 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginService, RouteGuard, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
