import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-life-cycle',
	imports: [],
	templateUrl: './life-cycle.html',
	styleUrl: './life-cycle.css',
})

export class LifeCycle implements OnInit, AfterViewInit, OnDestroy{

	constructor() {
		console.log('Constructor Executed');
		// proporty initialization
	}

	ngOnInit(): void {
		console.log('ngOnInit() Executed');
		// API call
		// subscrption
	}

	ngAfterViewInit(): void {
		console.log('ngAfterViewInit() Executed');
		// template DOM'a render edildikten hemen sonra çalışır.
	}

	ngOnDestroy(): void {
		console.log('ngOnDestroy() Executed');
		// component yok edilmeden önce çalışır
	}
}
