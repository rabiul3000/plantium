import Swal from 'sweetalert2';

export const successAlert = (message) => {
	Swal.fire({
		position: 'top',
		icon: 'success',
		title: message,
		showConfirmButton: false,
		timer: 2500,
	});
};

export const ErrorAlert = (message) => {
	Swal.fire({
		position: 'top',
		icon: 'error',
		title: message,
		showConfirmButton: false,
		timer: 2500,
	});
};
