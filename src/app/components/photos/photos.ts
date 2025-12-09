import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
	selector: 'app-photos',
	imports: [FormsModule],
	templateUrl: './photos.html',
	styleUrl: './photos.css',
})

export class Photos implements OnInit {
	photosList: any[] = [];
	http = inject(HttpClient);

	// Kullanıcı forma hiç dokunmadan save butonuna tıkladığında
	// save methodunun çalışmayıp, form validasyon hatalarını göstermesi için
	isFormSubmited: boolean = false;

	newPhoto: any = {
		"albumId": 0,
		"id": 0,
		"title": "",
		"url": "",
		"thumbnailUrl": ""
	};

	/* constructor(private http: HttpClient) {
			// API bağlantısı için HttpClient servisi eklenir
			// Ctor kullanımı eski yöntemdir
	} */

	ngOnInit(): void {
		// debugger;
		this.getAllPhotos();
	}

	getAllPhotos() {
		this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((result: any) => {
			this.photosList = result;
		});
	}

	onSavePhoto(form: NgForm) {
		this.isFormSubmited = true;

		if (form.valid) {
			this.http.post('https://jsonplaceholder.typicode.com/photos', this.newPhoto).subscribe((response: any) => {
				alert('API Call Success');
				this.getAllPhotos();
				this.clearForm();
			});
		}
	}

	onEditPhoto(photo: any) {
		this.newPhoto = { ...photo };
	}

	onUpdatePhoto(photo: any) {
		// API üzerinden güncelleme
		this.http.put('https://jsonplaceholder.typicode.com/photos/' + photo.id, this.newPhoto).subscribe((response: any) => {
			alert('API Call Success');
			this.getAllPhotos();
			this.clearForm();
		});


		// local olarak listeyi güncelleme
		// this.onUpdatePhotoLocal(photo);
	}

	private onUpdatePhotoLocal(photo: any) {
		const index = this.photosList.findIndex(p => p.id === photo.id);

		if (index !== -1) {
			/*
				Liste'deki nesnenin kendisinde değişiklik yapma
				* Nesnenin referansı değişmez.
				* Referansı değişmeyen nesnelerde Angular değişiklik algılamada zorlanır.
				(Bazen uygulanır, bazen uygulanmaz) Bu durumda da UI güncellenmeyebilir.
			*/
			// this.photosList[index] = photo;
			/*
				Liste'deki nesnesin üzerinde yeni bir nesne oluşturup atama yapma
				* Nesnenin refansı değişir.
				* Yani var olan referans üzerinde yeni referans yazılır.
				* Referansı değişen nesnelerde Angular değişiklik algılamada sorun yaşamaz.
				Bu nedenle UI güncellenir.
			*/
			this.photosList[index] = { ...photo };

			/*
				NOT: Angular değişiklikleri referans bazında takip eder.
			*/
		}

		this.clearForm();
	}

	onDeletePhoto(photo: any) {
		const isDelete = confirm('Are you sure want to delete ?');
		if (!isDelete) {
			return;
		}

		// API üzerinden silme
		this.http.delete('https://jsonplaceholder.typicode.com/photos/' + photo.id).subscribe((response: any) => {
			alert('API Call Success');
			this.getAllPhotos();
		});


		// local olarak listeden silme
		// this.onDeletePhotoLocal(photo);
	}

	private onDeletePhotoLocal(photo: any) {
		const index = this.photosList.findIndex(p => p.id === photo.id);

		if (index > -1) {
			this.photosList.splice(index, 1);
		}
	}

	clearForm() {
		this.newPhoto = {
			"albumId": 0,
			"id": 0,
			"title": "",
			"url": "",
			"thumbnailUrl": ""
		};

		this.isFormSubmited = false;
	}
}
