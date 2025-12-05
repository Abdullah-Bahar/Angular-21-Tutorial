import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-dynamic-css-class',
	imports: [NgClass, FormsModule, NgStyle],
	templateUrl: './dynamic-css-class.html',
	styleUrl: './dynamic-css-class.css',
})

export class DynamicCssClass {
	myClassName: string = "bg-warning";

	isActive: boolean = false;

	productPrice = 501;

	div2BackColor: string = "";

	myCss = {
		color: 'white',
		'background': 'black',
		'font-size': '62px'
	};

	isSidePanel = signal(false);

	openSidePanel() {
		this.isSidePanel.set(true);
	}

	closeSidePanel() {
		this.isSidePanel.set(false);
	}
}
