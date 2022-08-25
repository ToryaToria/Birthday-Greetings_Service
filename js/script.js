
const buttonMen = document.querySelector('.header_button-gender_men');
const buttonWomen = document.querySelector('.header_button-gender_women');
const body = document.body;

const cardImg = document.querySelector('.card__img');
const cardText = document.querySelector('.card__text');

const buttonText = document.querySelector('.header__button-change_text');
const buttonImg = document.querySelector('.header__button-change_img');

 let gender = '';


const state = {
	gender: body.classList.contains('women') ? 'women' : 'men',
};

const getRandomeForArr = (arr) => {
	const randomNumber = Math.floor(Math.random() * arr.length);
	console.log('randomNumber: ', randomNumber);
	return arr[randomNumber];
}

const getData = () => {
return fetch('db.json').then(response => response.json());
}


const changeDOM = () => {
	if (state.photo.includes('black')) {
		cardText.style.color = "#ffffff";
	} 	else {
		cardText.style.color = "";
	}

	cardImg.src = `img/${state.photo}`;
	cardText.innerHTML = state.text.replaceAll('\n', '<br>');

}

const getDataToCard = () => {
getData().then(data => {
	state.text = getRandomeForArr(data.text[state.gender]);
	state.photo = getRandomeForArr(data.photo[state.gender]);

	changeDOM();
});
}

const changeToMen = () => {
	if (gender !== 'men') {
		console.log('men');

 body.classList.add('men');
 body.classList.remove('women');
 gender = 'men';
 getDataToCard();
 console.log('пол:', gender);

	}
};

const changeToWomen = () => {
	if (gender !== 'women') {

	console.log('women');

	body.classList.add('women');
	body.classList.remove('men');
	gender = 'women';
	getDataToCard();
 };
}

const changeText = () => {
	getData().then(data => {
		state.text = getRandomeForArr(data.text[state.gender]);
		changeDOM();
	});
};

const changeImg = () => {
	getData().then(data => {
		state.photo = getRandomeForArr(data.photo[state.gender]);
	
		changeDOM(); 
	});

}


buttonMen.addEventListener('click', changeToMen);
buttonWomen.addEventListener('click', changeToWomen);
buttonText.addEventListener('click', changeText);
buttonImg.addEventListener('click', changeImg);

getDataToCard();