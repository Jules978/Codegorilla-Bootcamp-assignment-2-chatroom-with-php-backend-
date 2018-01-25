
//GLOBAL VARIABLES
var xhr = new XMLHttpRequest();
var uname = ""; // username, overwritten bij start()

function start(){
uname = document.getElementById("usernameinput").value;
document.getElementById("username").style.display = "none";
document.getElementById("allchat").style.display = "block";
window.setInterval(function(){ // calls refreshchat every 3 seconds, so chat is updated.
	getmessages();
}, 1000);   
}

function getmessages(){ //gets messages from api.php (.txt file)
	xhr.open('GET', 'api.php', true);
 	xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    var allmessages=xhr.response; //messages arrive as one giant string, separated by "ENTER"
	document.getElementById("messages").innerHTML = allmessages.replace(/(?:\r\n|\r|\n)/g, '<br />'); //writes messages to div, replaces enter with <br/>
	scrollToBottom(); //calls scroll function so newest messages are shown
  	}
	};
 	xhr.send();
};

function sendmessages(){ //sends new messages to api.php, so they can be added to the .txt file.
	var d = new Date();
	var time = d.toLocaleTimeString();
	var msg =  chatform.message.value;  //gets message from form
	var unameTime="(" +time +") "+uname; //combines username with timestamp
	var url= "username="+ unameTime +"&message=" + msg; //generates POST url with username and message.
	xhr.open("POST","api.php", true); //POST request
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
  	xhr.send(url);
	document.getElementById('inputMessage').value = ""; //resets message input field.
}; 

function scrollToBottom(){ //makes sure the chat div automatically scrolls to the bottom 
   var div = document.getElementById("messages");
   div.scrollTop = div.scrollHeight - div.clientHeight;
} 

