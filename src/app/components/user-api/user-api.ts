import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user-service';
import { Alert } from '../../reusableComponent/alert/alert';
import { Tabs } from "../../reusableComponent/tabs/tabs";
import { Highlight } from "../../directives/highlight";

@Component({
	selector: 'app-user-api',
	imports: [ReactiveFormsModule, AsyncPipe, Alert, Tabs, Highlight],
	templateUrl: './user-api.html',
	styleUrl: './user-api.css',
})

export class UserApi {
	http = inject(HttpClient);
	userList$: Observable<any[]>;
	isFormSubmited: boolean = false;
	userService = inject(UserService);
	selectedTabName: string = 'List View';

	userForm: FormGroup = new FormGroup({
		userId: new FormControl(0),
		emailId: new FormControl("", [Validators.required]),
		password: new FormControl("", [Validators.required, Validators.minLength(5)]),
		fullName: new FormControl("", [Validators.required]),
		mobileNo: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
	});

	constructor() {
		// kendi oluşturduğumuz service'den method çağrısı
		console.log(this.userService.sumTwoNumbers(22, 33));

		this.userList$ = this.http.get<any[]>("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers");
	}

	onSaveUser() {
		this.isFormSubmited = true;

		if (this.userForm.valid) {
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
	}

	onEditUser(data: any) {
		this.userForm.patchValue(data);
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
		this.userForm.reset({
			userId: 0,
			emailId: '',
			password: '',
			fullName: '',
			mobileNo: ''
		});
		this.isFormSubmited = false;
	}

	onSelectTab(tab: string) {
		this.selectedTabName =  tab;
		console.log(this.selectedTabName);
	}
}
