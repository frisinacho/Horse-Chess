function StartTime(){

	seconds = 0;
	s = document.getElementById("seconds");	
	m = document.getElementById("minutes");

	cronometer = setInterval(function(){
		seconds ++;

		secs = seconds;
		min = 0;

		while(secs>60){
			mins++;
			secs -= 60;
		}

		s.innerHTML = secs;
		m.innerHTML = mins;

	},1000);
}
