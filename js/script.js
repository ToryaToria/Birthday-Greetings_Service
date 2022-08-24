
const buttonMen = document.querySelector('.header_button-gender_men');
const buttonWomen = document.querySelector('.header_button-gender_women');
const body = document.body;

const state = {
	gender: body.classList.contains('women') ? 'women' : 'men',
};

let gender = 'women';

const changeToMen = () => {
	if (gender !== 'men') {
		console.log('men');

 body.classList.add('men');
 body.classList.remove('women');
 gender = 'men';
	}
};

const changeToWomen = () => {
	if (gender !== 'women') {

	console.log('women');

	body.classList.add('women');
	body.classList.remove('men');
	gender = 'women';
 };
}

buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);