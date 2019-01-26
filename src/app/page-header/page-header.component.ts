import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
	selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
	constructor(private loginService: LoginService,
		private router: Router) {}
 public doLogout() {
 	this.loginService.logout();
 	this.router.navigate(['/']);

 }
}
