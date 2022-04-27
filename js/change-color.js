function handleSubmit() {
	let hexNumbers = [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
	];

  	let hexColorCode = "";
	for (var i = 0; i < 6; i++) {
		let randomIndex = Math.floor(Math.random() * hexNumbers.length);
		hexColorCode += hexNumbers[randomIndex];
	}

	// document.getElementById("colorCode").innerHTML = hexColorCode;
	document.getElementsByTagName("p")[0].style.color = "#" + hexColorCode;
}

document.getElementById("section1").addEventListener("click", function() {
	handleSubmit();
});



// let body = document.getElementsByTagName('body');

// body.addEventListener("click", function() {
// 	body.style.backgroundColor
// });

