import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
	selector: '[appHighlight]',
	// host: {
	// 	'(mouseenter)': 'onMouseEnter()',
	// 	'(mouseleave)': 'onMouseLeave()',
	// },
})

export class Highlight {

	private elementRef = inject(ElementRef);

	constructor() {
		this.elementRef.nativeElement.style.color = 'red';
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.elementRef.nativeElement.style.color = 'purple';
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.elementRef.nativeElement.style.color = 'red';
	}
}
