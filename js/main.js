$(document).ready(function () {
	$('.single-item').slick({
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: false,
		swipe: true
	});
	$('.ok').click(function(){
		$('.single-item').slick('slickNext');
		$('.date-start, .date-end, .ok').prop("disabled", true);
	})
	//Форматирование времени
	var options = { hour: 'numeric', minute: 'numeric' };
	$('.output table tr').click(function () {
		$(this).toggleClass('active');
	});

	//Выбор даты
	/*
	$('.date-start, .date-end').datepicker({
		firstDay: 1,
		format: 'dd.mm.yyyy',
		yearRange: 1,
		i18n: {
			cancel: 'Закрыть',
			clear: 'Очистить',
			done: 'Ок',
			months: [
				'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
			],
			monthsShort: [
				'Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
			],
			weekdays: [
				'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
			],
			weekdaysShort: [
				'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'

			],
			weekdaysAbbrev: [
				'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
			]
		}
	});
	*/

	$('button.ok').click(function () {
		let dateStart = $('.date-start').val();
		var dayS = dateStart[0] + dateStart[1];
		var monthS = dateStart[3] + dateStart[4];
		var yearS = dateStart[6] + dateStart[7] + dateStart[8] + dateStart[9];

		let dateEnd = $('.date-end').val();
		var dayE = dateEnd[0] + dateEnd[1];
		var monthE = dateEnd[3] + dateEnd[4];
		var yearE = dateEnd[6] + dateEnd[7] + dateEnd[8] + dateEnd[9];

		var start = new Date(+yearS, +monthS - 1, +dayS);//Дата начала службы
		var over = new Date(+yearE, +monthE - 1, +dayE);//Дата конца службы

		function draw() {
			let now = new Date();//Текущая дата
			let year = (over - start) / 1000 / 60 / 60 / 24;

			let ostD = (over - now) / 1000 / 60 / 60 / 24 + '';//Дней осталось
			let proD = year - ostD;//Дней прошло
			$('.item5').html(`<div>${Math.floor(proD)}</div>`);
			$('.item6').html(`<div>${Math.ceil(ostD)}</div>`);

			let ostW = ostD / 7;//Недель осталось
			let proW = year / 7 - ostW;//Недель прошло
			$('.item3').html(`<div>${Math.floor(proW)}</div>`);
			$('.item4').html(`<div>${Math.ceil(ostW)}</div>`);

			let ostP = ostD / year * 100;//Отсалось в процентах
			$('.item1').html(`<div>${(100 - ostP).toFixed(6)}</div>`);
			$('.item2').html(`<div>${ostP.toFixed(6)}</div>`);

			let ostH = (over - now) / 1000 / 60 / 60 + '';//Часов осталось
			let proH = year * 24 - ostH;//Часов прошло
			$('.item7').html(`<div>${Math.floor(proH)}</div><div>из</div><div style="font-size: 16px;">${365 * 24}</div>`);
			$('.item8').html(`<div>${Math.floor(ostH)}</div><div>из</div><div style="font-size: 16px;">${365 * 24}</div>`);

			let ostM = (over - now) / 1000 / 60 + '';//Минут осталось
			let proM = year * 24 * 60 - ostM;//Минут прошло
			$('.item9').html(`<div>${Math.floor(proM)}</div><div>из</div><div style="font-size: 16px;">${365 * 24 * 60}</div>`);
			$('.item10').html(`<div>${Math.floor(ostM)}</div><div>из</div><div style="font-size: 16px;">${365 * 24 * 60}</div>`);

			let ostS = (over - now) / 1000 + '';//Секунд осталось
			let proS = year * 24 * 60 * 60 - ostS;//Секунд прошло
			$('.item11').html(`<div>${Math.floor(proS)}</div><div>из</div><div style="font-size: 16px;">${365 * 24 * 60 * 60}</div>`);
			$('.item12').html(`<div>${Math.floor(ostS)}</div><div>из</div><div style="font-size: 16px;">${365 * 24 * 60 * 60}</div>`);

			//Прогресс бар
			$('.bar').html(`
				<div class="progress-bar">
				<div class="pro" style="width: ${Math.floor(proD)}%"></div>
				<div class="ost" style="width: ${Math.ceil(ostD)}%"></div>
				</div>
			`);
		}
		setInterval(draw, 1000);
	});
});