var userNumber;
var userPower;

userNumber = +prompt('Please enter the number for exponentiation:');
userPower = +prompt('Please enter the power of the number:');

if ((Number.isInteger(userNumber) == false) || (Number.isInteger(userPower) == false)) {
    console.log('Error: Number and power should be integer');
} else {
    console.log('Result is ', pow(userNumber, userPower));
}

function pow(number, power) {
    var result = number;

    if (power == 0) {
        return 1;
    }

    for (var i = 1; i < Math.abs(power); i++) {
        result *= number;
    }

    if (power > 0) {
        return result;
    } else {
        return 1 / result;
    }
}