import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-user-api',
	imports: [ReactiveFormsModule, AsyncPipe],
	templateUrl: './user-api.html',
	styleUrl: './user-api.css',
})

export class UserApi {

	http = inject(HttpClient);
	userList$: Observable<any[]>;

	userForm: FormGroup = new FormGroup({
		userId: new FormControl(0),
		emailId: new FormControl(""),
		password: new FormControl(""),
		fullName: new FormControl(""),
		mobileNo: new FormControl(""),
	});

	constructor() {
		this.userList$ = this.http.get<any[]>("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers");
	}

	onSaveUser() {
		const formData = this.userForm.value;

		this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", formData).subscribe(
			{
				next: (response: any) => {
					alert("User Created Success");
				},
				error: (error: any) => {
					alert(error.message);
				}
			}
		);
	}

	onEditUser(data: any) {
		this.userForm = new FormGroup({
			userId: new FormControl(data.userId),
			emailId: new FormControl(data.emailId),
			password: new FormControl(data.password),
			fullName: new FormControl(data.fullName),
			mobileNo: new FormControl(data.mobileNo),
		});
	}

	/* 
		Bu method, tetiklendiğinde güncelleme yapmak yerine kaydı siliyor ???
	*/
	onUpdateUser() {
		const formData = this.userForm.value;

		this.http.put(`https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=${formData.userId}`, formData).subscribe(
			{
				next: () => {
					alert("User Updated Success");
				},
				error: (error: any) => {
					alert(error.message);
				}
			}
		);
	}

	onClearForm() {
		this.userForm.reset();
	}
}
