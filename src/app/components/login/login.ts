import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	imports: [FormsModule],
	templateUrl: './login.html',
	styleUrl: './login.css',
})

export class Login {
	router = inject(Router);

	loginObj: LoginModel = new LoginModel();

	onLogin() {
		if (this.loginObj.email == 'admin' && this.loginObj.password == 'admin') {
			localStorage.setItem('loginName', 'admin');
			this.router.navigateByUrl("user-api");
		} else {
			alert('Yetersiz Bakiye!!!');
		}
	}
}

class LoginModel {
	email: string;
	password: string;

	constructor() {
		this.email = '';
		this.password = '';
	}
}