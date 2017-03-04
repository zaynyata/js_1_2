var nameArray = [];

for (var i = 1; i <= 5; i++) {
	var currentName;
	currentName = prompt('Введите ' + i + '-е имя:');
	nameArray.push(currentName);
}

var userName;

userName = prompt('Введите ваше имя пользователя:');

if ( checkName(userName) == true) {
	alert(userName + ', вы успешно вошли.');
} else {
	alert('Ошибка: пользователь ' + userName + ' не найден!');
}

function checkName(name) {
	for (var i = 0; i < nameArray.length; i++) {
		if (nameArray[i] == name) {
			return true;
		}
	}

	return false;
}