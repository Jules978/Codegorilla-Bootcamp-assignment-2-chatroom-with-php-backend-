<?php
	
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $uname = $_POST["username"]; 
    $msg = $_POST["message"];
    $id= ""; 

    $file = fopen('chat.txt', 'a+'); //Open your .txt file
 
    $content = $uname. " : " .$msg. PHP_EOL;  // merges username and message
    fwrite($file , $content); // adds message to .txt
    fclose($file ); //closes .txt

    $previous = "javascript:history.go(-1)"; //goes back to the form page, because I don't know how to fix this yet.
if(isset($_SERVER['HTTP_REFERER'])) {
    $previous = $_SERVER['HTTP_REFERER'];
}
    die(header("Location: ".$_SERVER["HTTP_REFERER"]));
     // The request is using the POST method


} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') { //does stuff if the request method is get

    $myfile = fopen("chat.txt", "r") or die("Unable to open file!");
 
echo fread($myfile,filesize("chat.txt"));
fclose($myfile);
     // The request is using the POST method
}



    






    





?>