function ShowMessage(string_notification, game_over){
	Next_Level = !game_over;

	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_Notification = document.getElementById("notification");
	Message_Notification.innerHTML = string_notification;
}