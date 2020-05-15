const numbers = [ 10, 2, 3, 30, 2 ];

numbers.forEach((n, i, a) => console.log(i + '  Number ' + n + ' ' + a));

// for (let i = 0; i < numbers.length -1 ; i++ ){
//     console.log("Number" ) + numbers[i])
// }

numbers.map((n) => {
	if (n > 4) {
		return true;
	} else {
		return false;
	}
});

console.log(result);

const doubleNum = numbers.map((i) => i * 2);
console.log(doubleNum);

// const food = ["Hamburger", "Kebab, "Patato", "Ribs"];

let foodLength = food.map((i) => i.length);
console.log(foodLength);

const animals = [ 'Panda', 'Aardvark', 'Pony', 'Koala', 'Lion' ];

animals.forEach((animals) => animal.toLowerCase().includes('a'));
animals;
