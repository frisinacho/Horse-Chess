function setLifes(){
	if (Level == 1) Lifes = 1;
	if (Level == 2) Lifes = 4;
	if (Level == 3) Lifes = 3;
	if (Level == 4) Lifes = 3;
	if (Level == 5) Lifes = 4;
	if (Level == 6) Lifes = 3;
	if (Level == 7) Lifes = 5;
}

function setLevel_Parameters(){

	Moves = 64;
	Moves_Required = 8;
	Bonus = 0;
	document.getElementById("bonus").innerHTML = "";

}