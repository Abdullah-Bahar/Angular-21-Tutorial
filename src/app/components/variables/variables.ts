import { Component } from '@angular/core';

@Component({
	selector: 'app-variables',
	imports: [],
	templateUrl: './variables.html',
	styleUrl: './variables.css',
})

export class Variables {

	// string
	courseName: string = "Angular 21";
	currentVersion = "v.21";

	// number
	rollNo: number = 121;
	productPrice = 1200.50;

	// boolean
	isActive: boolean = false;
	isPresent = true;

	// Date
	currentDate: Date = new Date();

	// String Array
	cityList: string[] = ["İstanbul", "Fransa", "New York"];

	// Number Array
	rollNoArray: number[] = [111, 112, 113, 114, 115];

	// Obje
	studentObje = {
		name: "Hitler",
		mobil: "0555 555 55 55",
		email: "hitler@gmail.com",
		fakulte: "Güzel Sanatlar Akademisi"
	}

	// Obje Array
	studentObjeList = [
		{ name: "Yavuz Sultan Selim", city: "İstanbul" },
		{ name: "Fatih Sultan Mehmet", city: "İstanbul" },
		{ name: "Rosvelt", city: "ABD" }
	]

	constructor() {
		this.courseName = "1234";
		this.rollNo = 1234;
	}
}
