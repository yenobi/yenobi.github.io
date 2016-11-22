function pow(num, exp) {
	var numNew = 1;

	for (var i = 1; i <= exp; i++) {
		numNew *= num;
	}

	return numNew;
}

var num = prompt("add number");
var exp = prompt("add exponent");

if (exp % Math.round(exp) != 0 && exp != 0) {
  console.log("error: exponent is not an integer");
} else if (exp < 0) {
  console.log("error: exponent is negative");
} else if (num == 0 && exp == 0) {
  console.log("1");
} else if (num == 0) {
  console.log("0");
} else if (exp == 0) {
  console.log("1");
} else {
  console.log(pow(num, exp));
}
