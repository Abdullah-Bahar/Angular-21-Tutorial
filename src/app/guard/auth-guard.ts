import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

	const router = inject(Router);
	const isLocalData = localStorage.getItem('loginName');

	if (isLocalData == null) {
		router.navigateByUrl('/login');
		return false;
	} else {
		return true;
	}
};
