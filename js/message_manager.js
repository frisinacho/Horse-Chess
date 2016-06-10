function ShowMessage(string_notification, game_over){
	Next_Level = !game_over;

	if (game_over == false){
		string_score = "Level " + Level + " | Time ";
		if (Total_mins < 10) string_score = string_score + "0";
		string_score = string_score + Total_mins + ":";
		if (Total_secs < 10) string_score = string_score + "0";
		string_score = string_score + Total_secs;

	}
	else{

	}

	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_Notification = document.getElementById("notification");
	Message_Notification.innerHTML = string_notification;

	Message_Notification = document.getElementById("data_message");
	Message_Notification.innerHTML = string_score;
}