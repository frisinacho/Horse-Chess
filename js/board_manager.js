function ClearBoard(){
	for (i=0; i<8; i++){
		for (j=0; j<8; j++){
			board[i][j] = 0;
		}
	}
}

function PaintCell(x, y, color){
	cell = document.getElementById("c"+x+y);
	cell.style.background = color;
}

function PaintHorseCell(x, y, color){
	cell = document.getElementById("c"+x+y);
	cell.style.background = color;
	cell.innerHTML  = "<img src='horse.gif'></img>";
}

function PaintBonusCell(x, y){
	cell = document.getElementById("c"+x+y);
	cell.innerHTML  = "<img src='bonus.gif'></img>";
}
