// Test specification for the fizzbuzz program
var fb = require('../fizzbuzz');

describe("A program that implements fizzbuzz", function() {

	it("Can count and make fizzbuzz replacements", function() {
		expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz");
		expect(fb.count(8,12)).toBe("8 fizz buzz 11 fizz");
		expect(fb.count(10,15)).toBe("buzz 11 fizz 13 14 fizzbuzz")
	});

	it("Can take a number and return 'fizz' if it's a multiple of 3", function() {
		expect(fb.fizzer(3)).toBe('fizz');
		expect(fb.fizzer(5)).toBe(5);
		expect(fb.fizzer(17)).toBe(17);
	});
});

	it("Can take a number and return 'buzz' if it's a multiple of 5", function() {
		expect(fb.buzzer(5)).toBe('buzz');
		expect(fb.buzzer(3)).toBe(3);
		expect(fb.buzzer(17)).toBe(17);
	});

	it("Can take a number and return 'fizzbuzz' if it's a multiple of 3 and 5", function() {
		expect(fb.fizzbuzzer(15)).toBe("fizzbuzz");
		expect(fb.fizzbuzzer(3)).toBe(3);
		expect(fb.fizzbuzzer(17)).toBe(17);
	});