Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
	Template.body.helpers({

		tasks: function () {
			return Tasks.find({}, {sort: {createdAt: -1}});
		}
	});

	Template.personal.helpers({
		name: 'Віталій Оліх',
		job: 'Front-end Developer',
		fn: 'Оліх В.Я.',
		date: '21.12.1993',
		address_street: 'Бережанська 53',
		address_city: 'Тернопіль',
		address_country: 'Україна',
		telephone: '0671357115',
		email: 'superolih2012@gmail.com'
	});

	Template.education.helpers({
		first_education: 'ТНЕУ',
		first_years: '2012 - 2015',
		first_data: 'Тернопольский национальный экономический университет. Факультет комп\'ютерних інформаційних технологій, кафедра: Спеціалізовані комп\'ютерні системи.',
		second_education: 'БАТК',
		second_years: '2008 - 2012',
		second_data: 'Борщівський агротехнічний коледж – навчальний заклад І рівня акредитації, що 65 років з успіхом функціонує в системі аграрної освіти України, входить до п’ятірки кращих ВНЗ І-ІІ р.а. Спеціальність:«Експлуатація та ремонт машин і обладнання агропромислового виробництва»',
	});

	Template.skills.helpers({
		one_skill: 'GIT',
		two_skill: 'Linux',
		three_skill: 'PHP 5.6',
		four_skill: 'HTML5/CSS3',
		five_skill: 'JavaScript'
	});

	Template.make.helpers({
		one: 'Створення коду веб-сторінки за допомогою відповідної мови розмітки.',
		two: 'Оформлення раніше створеного коду сторінки за допомогою вбудованих засобів мови розмітки, або ж за допомогою каскадних таблиць стилів CSS',
		three: 'Кросбраузерна, адаптивна та валідна верстка',
		four:'Створення динамічник веб-сторінок використовуючи PHP, MySQL, JS'
	});

	Template.footer.helpers({
		address_street: 'Бережанська 53',
		address_city: 'Тернопіль',
		address_country: 'Україна',
		telephone: '0671357115',
		email: 'superolih2012@gmail.com',
		twitter_href: '#',
		facebook_href: '#',
		flickr_href: '#',
		linkedin_href: '#',
		resume_href: '#',
		copy_name: 'V.Y. Olikh',
		copy_year: '2015'
	});

	Template.body.events({
		"submit .new-task": function (event) {
			var name = event.target.name.value;
			var text = event.target.text.value;

		if (name == "" || text == "" ){
			alert('Заповніть коректно поля вводу!');
				return false;
		}else{
			Tasks.insert({
				name: name,
				text: text,
				createdAt: new Date()
			});

			event.target.name.value = "";
			event.target.text.value = "";
				return false;
			}
		}
	});

	Template.task.events({
		"click .delete": function () {
			Tasks.remove(this._id);
		}
	});
}