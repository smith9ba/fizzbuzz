var count, fizzer, buzzer, fizzbuzzer;
count = function(start, end) {
	//Initialize the output variable
	var output = buzzer(fizzer(fizzbuzzer(start)));

	//Modify output to contain the desired sequence
	for (var i = start; i < end; i += 1) {  // i is an expression for counter 
		//stuff here gets repeated
		output = output + " " + buzzer(fizzer(fizzbuzzer(i + 1)));
	}

	//return the output, e.g. "1, 2, fizz, 4, buzz"
	return output;
};

fizzer = function(num) {
	//If (0 === % 3) {
	//		return "fizz"
	// }
	// Return num;
	return (0 === num % 3) ? "fizz" : num;
};

buzzer = function(num) {
	return (0 === num % 5) ? "buzz" : num;
};

fizzbuzzer = function (num) {
	return (0 === num % 15) ? "fizzbuzz" : num;
}

module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer,
	fizzbuzzer: fizzbuzzer
};