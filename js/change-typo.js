let target = document.getElementById('h1-title');

let typo_array = [
	'Arial',
	'Arial Black',
	'Bahnschrift',
	'Calibri',
	'Cambria',
	'Candara',
	'Consolas',
	'Constantia',
	'Courier New',
	'Franklin Gothic Medium',
	'Gabriola',
	'Gadugi',
	'Georgia',
	'HoloLens MDL2 Assets',
	'Impact',
	'Ink Free',
	'Lucida Console',
	'Microsoft Himalaya',
	'MV Boli',
	'Nirmala UI',
	'Segoe Script',
	'Times New Roman',
	'Verdana'
];

function change_typo() {
	const typo_choosen = typo_array[Math.floor(Math.random() * typo_array.length)];
	console.log(typo_choosen);
	target.style.fontFamily = typo_choosen;
	setTimeout(change_typo, 2000)
}

change_typo();

// target.style.fontFamily(change_typo())
// setTimeout(() => {
// 	const typo_choosen = typo_array[Math.floor(Math.random() * typo_array.length)];
// 	console.log(typo_choosen);
// }, 1000);