var Total_secs;
var Total_mins;
var cronometer;

var board = new Aray(8);

function autoplay(){

	for (i=0; i<8; i++) board[i] = new Array(8);

	ClearBoard();

	ResetTime();
	StartTime();
}

autoplay();
