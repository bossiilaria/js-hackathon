function multiplyNumbers(numOne, numTwo) {
	var a = numOne.value;
	var b = numTwo.value;
	var answer = eval(a*b);

	document.getElementById('multiplyAnswer').innerHTML = answer;

	numOne.value = '';
	numOne.focus();
	numTwo.value = '';
}

function lagestNumber() {
	var myArray = [2, 55, 37, 89, 605, 1];

	myArray.sort( function (a, b) {
		return b-a;
	});

	document.getElementById('largestNumber').innerHTML = myArray[0];
	document.getElementById('largestNumberBtn').style.display = 'none';
}

var userNumbers = [];

function userNumbersArray() {
	var num = document.getElementById('arrayNumber').value;

	userNumbers.push(num);

	document.getElementById('currentArrayOfNumbers').innerHTML = userNumbers;
}

var primeNumbersArray = [];

function primeNumbers() {
	for (var i = 2; i <= 100; i++) {
		if ( i == 2 || i == 3 || i == 5	|| i == 7) {
			primeNumbersArray.push(i);
		} else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
			console.log('Number ' + i + ' is not a prime number');
		} else {
			primeNumbersArray.push(i);
		}
	}
	console.log(primeNumbersArray);
	
	for(var i = 0; i <= primeNumbersArray.length - 1; i++) {
		var node = document.createElement("TR");
		var tableData = document.createElement("TD");
		var textnode = document.createTextNode(primeNumbersArray[i]);
		node.appendChild(tableData); 
		tableData.appendChild(textnode)
		document.getElementById('primes').appendChild(node);
	}
}
primeNumbers();

			
    
  