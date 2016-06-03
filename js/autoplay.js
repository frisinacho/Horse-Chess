var Total_secs;
var Total_mins;
var cronometer;

var Moves_Required;
var Moves;
var Options;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;

function Check_SuccessfullEnd(){
	SuccessfullEnd = true;
	if (Moves > 0) SuccessfullEnd = false;
	if (SuccessfullEnd) alert("You win!");
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
	if (!Options) alert("Game Over");
}

function Check_Moves(x, y, mov_x, mov_y){
	option_x = x + mov_x;
	option_y = y + mov_y;

	if (option_x < 8 && option_y < 8 && option_x >= 0 && option_y >= 0){
		if (board[option_x][option_y] == 0) Options++;
	}
}

function SelectCell(x, y){

	Moves--;
	document.getElementById("moves").innerHTML = Moves;

	board[x][y] = 1;
	PaintCell(CellSelected_x, CellSelected_y, "orange");
	PaintHorseCell(x, y, "green");
	CellSelected_x = x;
	CellSelected_y = y;

	Check_SuccessfullEnd();
	Check_GameOver(x, y);
	Check_newBonus();
}

function Check_newBonus(){
	if ((64-Moves) % Moves_Required == 0){
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

	if (board[x][y] == 1) CheckTrue = false;
	if (CheckTrue) SelectCell(x, y);
}

function autoplay(){

	Moves = 64;
	Moves_Required = 8;

	for (i=0; i<8; i++) board[i] = new Array(8);

	ClearBoard();

	ResetTime();
	StartTime();

	x = Math.round(Math.random()*7);
	y = Math.round(Math.random()*7);

	CellSelected_x = x;
	CellSelected_y = y;

	SelectCell(x, y);
}

autoplay();

// 0 -> Empty
// 1 -> Occupied
// 2 -> Bonus
