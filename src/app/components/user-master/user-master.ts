import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-user-master',
	imports: [FormsModule, JsonPipe],
	templateUrl: './user-master.html',
	styleUrl: './user-master.css',
})

export class UserMaster {

	users = {
		id: 0,
		name: "",
		username: "",
		email: "",
		password: "",
		city: "",
		state: ""
	}	

}
