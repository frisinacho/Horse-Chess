var Total_secs;
var Total_mins;
var cronometer;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;

function SelectCell(x, y){

	board[x][y] = 1;
	PaintCell(CellSelected_x, CellSelected_y, "orange");
	PaintHorseCell(x, y, "green");
	CellSelected_x = x;
	CellSelected_y = y;
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
