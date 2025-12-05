import { NgClass } from '@angular/common';
import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-control-flow',
	imports: [FormsModule, NgClass],
	templateUrl: './control-flow.html',
	styleUrl: './control-flow.css',
})

export class ControlFlow {
	isOfferCodeAvl: boolean = false;

	//--------------------

	isSuccessDivVisiable: WritableSignal<boolean> = signal(false);

	toggleDivVisibility() {
		this.isSuccessDivVisiable.set(!this.isSuccessDivVisiable());
	}

	//--------------------

	studentResultExam: number = 0;
	studentExamCharNote: string = "";
	studentExamCharNoteClassName: string = "";
	isTrueStudentResultExam: boolean = false;
	studentInputMessage: string = `Başarı Notunuzu Öğrenmek 
				İçin Lütfen 0-100 Arasında Bir Değer Girin`;

	updateExamNote() {
		this.isTrueStudentResultExam = false;

		if (this.studentResultExam == null) {
			this.studentInputMessage = `Başarı Notunuzu Öğrenmek 
				İçin Lütfen 0-100 Arasında Bir Değer Girin`;

			return;
		}

		if (this.studentResultExam >= 0 && this.studentResultExam <= 100) {
			this.isTrueStudentResultExam = true;

			if (this.studentResultExam > 80) {
				this.studentExamCharNote = "A";
				this.studentExamCharNoteClassName = "text-success";
			}
			else if (this.studentResultExam > 60) {
				this.studentExamCharNote = "B";
				this.studentExamCharNoteClassName = "text-primary";
			}
			else if (this.studentResultExam > 40) {
				this.studentExamCharNote = "C";
				this.studentExamCharNoteClassName = "text-warning";
			}
			else {
				this.studentExamCharNote = "Failed";
				this.studentExamCharNoteClassName = "text-danger";
			}
		} else {
			this.studentInputMessage = "Yanlış değer girdiniz";
		}
	}

	//--------------------

	offerList: string[] = [
		"%10 İndirim",
		"%20 İndirim",
		"%30 İndirim",
		"Beleş"
	];

	productCategoryList: string[] = [
		"Mobile",
		"Laptop",
		"Kamera"
	];

	employeeList = [
		{ name: "aaa", city: "istanbul", isActive: false },
		{ name: "bbb", city: "istanbul", isActive: true },
		{ name: "ccc", city: "istanbul", isActive: false },
		{ name: "ddd", city: "istanbul", isActive: true },
		{ name: "eee", city: "istanbul", isActive: true },
		{ name: "fff", city: "istanbul", isActive: false },
		{ name: "ggg", city: "istanbul", isActive: true }
	];

	// bu satırı kullanırken hata verdi
	// employeeListHeaders = Object.keys(this.employeeList[0]);

	// objenin propety isimlerini objenin kendi türünde çıkarıyor
	employeeListHeaders: (keyof typeof this.employeeList[0])[] =
		Object.keys(this.employeeList[0]) as (keyof typeof this.employeeList[0])[];
}