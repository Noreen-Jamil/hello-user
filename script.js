function change(){

	// Input Value

	let fName = document.querySelector('#fName').value;
	console.log(fName);

	let lName = document.querySelector('#lName').value;
	console.log(lName);

	// Span of h1

	let headingSpan1 = document.querySelector('h1 span:nth-child(1)');
	// console.log(headingSpan=inputValue);
	headingSpan1.innerHTML = fName;

	let headingSpan2 = document.querySelector('h1 span:nth-child(2)');
	headingSpan2.innerHTML = lName;
}
