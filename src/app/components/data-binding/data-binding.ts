import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-data-binding',
	imports: [FormsModule],
	templateUrl: './data-binding.html',
	styleUrl: './data-binding.css',
})

export class DataBinding {
	courseName = "Angular v.21 Full Course";
	cityName = "Hanoi";

	className = "primary";

	inputType = "radio";
	// inputType = "date";

	// function name(params:type) {
	//		
	// }

	showWelcomeMessage() {
		alert("Welcome the Angular");
	}

	onStateChange() {
		alert("State Change");
	}

	changeCourseName(text: string) {
		this.courseName = text;
	}
}
