
//GLOBAL VARIABLES
var xhr = new XMLHttpRequest();
var uname = ""; // username, overwritten bij start()
var mykey = "";
var id = "";
var correctids = "";
var highestId =0;

function start(){
	
uname = document.getElementById("usernameinput").value; //mykeyinput
mykey = document.getElementById("mykeyinput").value; 
document.getElementById("username").style.display = "none";
document.getElementById("allchat").style.display = "block";
window.setInterval(function(){ // calls refreshchat every 3 seconds, so chat is updated.
	getids();
}, 1000); 
}

function sendmessages(){ //sends new messages to api.php, so they can be added to the .txt file.
	var d = new Date();
	var time = d.toLocaleTimeString();
	var msg =  chatform.message.value;  //gets message from form
	var unameTime="(" +time +") "+uname; //combines username with timestamp

	var url= "username="+ unameTime +"&message=" + msg+ "&mykey=" + mykey; //generates POST url with username and message. 
	xhr.open("POST","api.php", true); //POST request
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
  	xhr.send(url);
	document.getElementById('inputMessage').value = ""; 
	xhr.onload = function () {
    id= xhr.response;
    
};
}; 

function scrollToBottom(){ //makes sure the chat div automatically scrolls to the bottom 
   var div = document.getElementById("messages");
   div.scrollTop = div.scrollHeight - div.clientHeight;
} 


function getids(){	//accesses a string of all ids that belong to the specified mykey.
	var idurl = "api.php?action=list&mykey="+mykey; //generates url with mykey.
	xhr.open('GET', idurl, false);
	xhr.send();
		var responseids= xhr.response;
    		var correctids = JSON.parse(responseids);
    		
    		for (i = 0; i < correctids.length; i++) {
		correctids[i] = parseInt(correctids[i]); //saves IDs in the array as integers, so they can be used in other functions.
	}
    		for (i = 0; i < correctids.length; i++) { //for loop, calls getmessage(id) for every ID that is higher then the highestId variable.
		if (correctids[i] > highestId) {
			
			getmessages(correctids[i]);
			var newMessage = xhr.response; 
			console.log(newMessage);//saves response from every request as a variable.
			document.getElementById("messages").innerHTML += newMessage + "<br>"; //posts the new message into the chat div as a new line.
			scrollToBottom(); // automatically scrolls to the last message (at the bottom of the div)
			
			highestId = correctids[i]; //saves the last id in the array as the highestid, so the loop doesn't repeat until there is a new message (new higher id).
			}
		}
		
};
	
function getmessages(id){ //gets messages from api.php (.txt file)
	var surl = "api.php?action=read&mykey="+ mykey +"&id=" + id; 
	xhr.open('GET', surl, false);
 	
    var allmessages=xhr.response; //messages arrive as one giant string, separated by "ENTER"
	scrollToBottom(); //calls scroll function so newest messages are shown
  	
 	xhr.send();
}; 
	



