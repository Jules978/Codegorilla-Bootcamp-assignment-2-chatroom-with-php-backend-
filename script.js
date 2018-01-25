
/* gather your data from the form via DOM
organise it in an object or array
generate JSON with JSON.stringify
POST it with XMLHttpRequest */
var xhr = new XMLHttpRequest();

var uname = "";

function start(){
uname = document.getElementById("usernameinput").value;

document.getElementById("username").style.display = "none";
document.getElementById("allchat").style.display = "block";
window.setInterval(function(){ // calls refreshchat every 3 seconds, so chat is updated.
	getmessages();
}, 1000);   


}



function getmessages(){
	//console.log("getting messages");
 	xhr.open('GET', 'api.php', true);
 	xhr.onreadystatechange = function () {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //console.log(xhr.responseText);
    var allmessages=xhr.response;
	document.getElementById("messages").innerHTML = allmessages.replace(/(?:\r\n|\r|\n)/g, '<br />');
	scrollToBottom(); 
  	}
	};
 	xhr.send();
 	
};


function sendmessages(){
	console.log("sending messages")
	
	var msg = "(" +time +") " +chatform.message.value; 
	var d = new Date();
	var time = d.toLocaleTimeString();
	var msg =  chatform.message.value; 
	var unameTime="(" +time +") "+uname;
	var url= "username="+ unameTime +"&message=" + msg;
	console.log(url);
	xhr.open("POST","api.php", true);
	
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(url);

	
	document.getElementById('inputMessage').value = "";
}; 


 



 

 function scrollToBottom(){ //makes sure the chat div automatically scrolls to the bottom (thanks Ewout!)
   var div = document.getElementById("messages");
   div.scrollTop = div.scrollHeight - div.clientHeight;
} 

