import { Component, Signal, signal, WritableSignal } from '@angular/core';

@Component({
	selector: 'app-signal',
	imports: [],
	templateUrl: './signal.html',
	styleUrl: './signal.css',
})

export class SignalComponent {
	courseName = signal("Agnular 21");
	rollNo = signal(113);

	student = signal({
		name: "Corc",
		city: "Waşinkton"
	});

	stringArray = signal([
		"AB",
		"CD",
		"EF",
		"GH",
	]);

	CourseDuration: Signal<string> = signal("3 Weeks");

	cityList: WritableSignal<string[]> = signal([
		"Van",
		"Şırnak",
		"Gaziantep",
	]);

	constructor() {
		console.log("before: " + this.courseName);

		setTimeout(() => {
			this.courseName.set("React JS");
			console.log("after: " + this.courseName);
		}, 3000);
	}

	changeCourse() {
		this.courseName.set("Java");
	}

	addCity(cityName: string) {
		this.cityList.update((old: string[]) => [...old, cityName]);
	}
}
