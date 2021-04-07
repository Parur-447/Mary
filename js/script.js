function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});;
$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});;;
let myImageSlider = new Swiper('.reviews-slider',{
	//Стрелки
	navigation: {
		nextEl: '.swiper__button-next',
		prevEl: '.swiper__button-prev'
	},
	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		//Буллеты
		clickable: true,
	},
	//Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,

	//Управление клавиатурей 
	keyboard: {
		//Включить/выключить
		enabled: true,
		//Включить/выключить
		//только когда слайдер
		//в пределах вьюпорта
		onlyInViewport: true,
		//Включить/выключить
		//управление клавишами
		//pagup, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		//Чувствительность мыши
		sensivivity: 1,
		// Класс объекта на кототром будет срабатывать прокрутка мышью
		eventsTarget: ".reviews-slider"
	},

	//Автовысота
	autoHeight: true,

	//Количество слайдов для показа
	slidesPerView: 1,

	//Отступ между слайдами
	spaceBetween: 30,

	//Количество пролистываемых слайдов
	slidesPerGroup: 1,

	//Свободный режим
	freeMode:true,
	//Скорость
	speed: 500,
	//Слежка за видимыми слайдами 
	watchSlidesProgress: true,
	//Добавляем класса видимым слайдам
	watchSlidesVisibility: true,
	//Обновить слайдер при изменении элементов слайдера
	observer: true,

	//Обновить свайпер при изменении родительских
	//элементов слайдера
	observeParents: true,

	//Обновить слайдер при изменении дочерних элементов слайда
	observeSlideChildren: true,
});
let myImageSlider2 = new Swiper('.image-slider',{
	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		//Буллеты
		clickable: true,
		},
	//Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	//Чувствительность свайпа
	touchRatio: 1,
	//Угол срабатывания свайпа
	touchAngle: 45,
	//Курсор перетаскивания
	grabCursor: true,

	//Управление клавиатурей 
	keyboard: {
		//Включить/выключить
		enabled: true,
		//Включить/выключить
		//только когда слайдер
		//в пределах вьюпорта
		onlyInViewport: true,
		//Включить/выключить
		//управление клавишами
		//pagup, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		//Чувствительность мыши
		sensivivity: 1,
		// Класс объекта на кототром будет срабатывать прокрутка мышью
		eventsTarget: ".image-slider"
	},

	//Автовысота
	autoHeight: true,

	//Количество слайдов для показа
	slidesPerView: 1,

	//Отступ между слайдами
	spaceBetween: 30,

	//Количество пролистываемых слайдов
	slidesPerGroup: 1,

	//Скорость
	speed: 500,

	//Обновить слайдер при изменении элементов слайдера
	observer: true,

	//Обновить свайпер при изменении родительских
	//элементов слайдера
	observeParents: true,

	//Обновить слайдер при изменении дочерних элементов слайда
	observeSlideChildren: true,
});;
