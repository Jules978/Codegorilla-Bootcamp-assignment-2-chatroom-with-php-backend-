
/* gather your data from the form via DOM
organise it in an object or array
generate JSON with JSON.stringify
POST it with XMLHttpRequest */
var xhr = new XMLHttpRequest();

var uname = "";

function getmessages(){
	//console.log("getting messages");
 	xhr.open('GET', 'api.php', true);
 	xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //console.log(xhr.responseText);
    var allmessages=xhr.response;
	document.getElementById("messages").innerHTML = allmessages.replace(/(?:\r\n|\r|\n)/g, '<br />');
  	}
	};
 	xhr.send();
 	scrollToBottom(); 
};


function sendmessages(){
	console.log("sending messages")
	var uname=chatform.username.value; 
	var msg = chatform.message.value; 
	var url= "username="+ uname +"&message=" + msg;
	console.log(url);
	xhr.open("POST","api.php", true);
	
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(url);

	document.getElementById("inputUsername").style.display = "none"; //hides username form, after first input
	document.getElementById('inputMessage').value = "";
}; 


 



 window.setInterval(function(){ // calls refreshchat every second, so chat is updated automatically.
	getmessages();
}, 1000);  

 function scrollToBottom(){ //makes sure the chat div automatically scrolls to the bottom (thanks Ewout!)
   var div = document.getElementById("messages");
   div.scrollTop = div.scrollHeight - div.clientHeight;
}

