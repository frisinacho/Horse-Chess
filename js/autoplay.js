var Total_secs;
var Total_mins;
var cronometer;

var Moves_Required;
var Moves;
var Options;
var Bonus;

var Level = 1;
var Lifes = 5;
var Level_Moves;
var Next_Level = false;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;
var CheckCell_Required;

function Check_SuccessfullEnd(){
	SuccessfullEnd = true;
	if (Moves > 0) SuccessfullEnd = false;
	if (SuccessfullEnd) ShowMessage("You Win!", false);
}

function Check_GameOver(x, y){
	Options = 0;

	Check_Moves(x, y, 1, 2);	// Check move right - top long
	Check_Moves(x, y, 2, 1);	// Check move right long - top
	Check_Moves(x, y, 1, -2);	// Check move right - bottom long
	Check_Moves(x, y, 2, -1);	// Check move right long - bottom

	Check_Moves(x, y, -1, 2);	// Check move left - top long
	Check_Moves(x, y, -2, 1);	// Check move left long - top 
	Check_Moves(x, y, -1, -2);	// Check move left - bottom long
	Check_Moves(x, y, -2, -1);	// Check move left long - bottom

	document.getElementById("options").innerHTML = Options;
	if (!Options){
		if (Bonus) CheckCell_Required = false
		else ShowMessage("Game Over!", true);
	}
}

function Check_Moves(x, y, mov_x, mov_y){
	option_x = x + mov_x;
	option_y = y + mov_y;

	if (option_x < 8 && option_y < 8 && option_x >= 0 && option_y >= 0){
		if (board[option_x][option_y] == 0 || board[option_x][option_y] == 2) Options++;
	}
}

function SelectCell(x, y){

	Moves--;
	document.getElementById("moves").innerHTML = Moves;

	Grow_MeterBonus();

	PaintCell(CellSelected_x, CellSelected_y, "orange");
	PaintHorseCell(x, y, "green");

	if (board[x][y] == 2){
		Bonus++;
		document.getElementById("bonus").innerHTML = "+" + Bonus;
	}

	board[x][y] = 1;
	CellSelected_x = x;
	CellSelected_y = y;

	CheckCell_Required = true;
	Check_SuccessfullEnd();
	Check_GameOver(x, y);
	Check_newBonus();
}

function Grow_MeterBonus(){
	moves_done = Level_Moves - Moves;
	bonus_done = Math.floor(moves_done / Moves_Required);
	moves_rest = Moves_Required * bonus_done;
	bonus_grow = moves_done - moves_rest;

	width_meter = bonus_grow * 168 / Moves_Required;

	document.getElementById("meter_bonus").style.width = width_meter + "px";
}

function Check_newBonus(){
	if ((Level_Moves-Moves) % Moves_Required == 0){
		// Check a random cell for the Bonus
		Bonus_cell = false;
		while (Bonus_cell == false){

			Bonus_cell_x = Math.round(Math.random() * 7);
			Bonus_cell_y = Math.round(Math.random() * 7);

			if (board[Bonus_cell_x][Bonus_cell_y] == 0)
				Bonus_cell = true;
		}

		// In board[][] = 2
		board[Bonus_cell_x][Bonus_cell_y] = 2;

		// Draw bonus
		PaintBonusCell(Bonus_cell_x, Bonus_cell_y);
	}
}

function CheckCell(x, y){
	CheckTrue = true;
	if (CheckCell_Required){
		CheckTrue = false;

		dif_x = x - CellSelected_x;
		dif_y = y - CellSelected_y;

		if (dif_x == 1 && dif_y == 2) CheckTrue = true;		// right - top long
		if (dif_x == 2 && dif_y == 1) CheckTrue = true;		// right long - top
		if (dif_x == 1 && dif_y == -2) CheckTrue = true;	// right - bottom long
		if (dif_x == 2 && dif_y == -1) CheckTrue = true;	// right long - bottom

		if (dif_x == -1 && dif_y == 2) CheckTrue = true;	// left - top long
		if (dif_x == -2 && dif_y == 1) CheckTrue = true;	// left long - top
		if (dif_x == -1 && dif_y == -2) CheckTrue = true;	// left - bottom long
		if (dif_x == -2 && dif_y == -1) CheckTrue = true;	// left long - bottom
	}
	else{
		if (board[x][y] == 0 || board[x][y] == 2){
			Bonus--;
			document.getElementById("bonus").innerHTML = "+" + Bonus;
			if (Bonus == 0) document.getElementById("bonus").innerHTML = "";
		}
	}

	if (board[x][y] == 1) CheckTrue = false;
	if (CheckTrue) SelectCell(x, y);
}

function autoplay(){

	setLevel_Parameters();

	for (i=0; i<8; i++) board[i] = new Array(8);

	ClearBoard();
	setBoard();

	ResetTime();
	StartTime();

	First_Position = false;
	while (First_Position == false){
		x = Math.round(Math.random()*7);
		y = Math.round(Math.random()*7);
		if (board[x][y] == 0) First_Position = true;
	}

	CellSelected_x = x;
	CellSelected_y = y;

	SelectCell(x, y);
}

autoplay();

// 0 -> Empty
// 1 -> Occupied
// 2 -> Bonus
