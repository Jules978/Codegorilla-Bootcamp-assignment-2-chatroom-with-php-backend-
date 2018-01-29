<?php
	
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $dsn = 'mysql:host=localhost;dbname=tomklru270_juliachat';
	$user_name = 'tomklru270_chatter';
	$pass_word = 'wachtwoord';
	$db='tomklru270_juliachat';
	$uname =   $_POST["username"];
	$msg =  $_POST["message"];
	$mykey= $_POST["mykey"];
 
	$connection = new PDO($dsn, $user_name, $pass_word);
	$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	try {
		$sql = "INSERT INTO chat (username, message, mykey) " .
		 "VALUES ('$uname', '$msg', '$mykey')";
		$connection->exec($sql);

		$getid = 'SELECT ID FROM chat WHERE username ="'.$uname.'" AND message ="'.$msg.'"'; 
		 
		$statement = $connection->query($getid); 
		$result = $statement->fetchColumn();	
		$newid = (int)$result;	
		echo $newid;
		
		}

		catch(PDOException $e) {
		 echo $sql . "<br>" . $e->getMessage();
		}

		$connection = null; // Close connection

		if(isset($_SERVER['HTTP_REFERER'])) {
		    $previous = $_SERVER['HTTP_REFERER'];
		}
		

} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') { //does stuff if the request method is get
	if(isset($_GET["action"]) && $_GET['action'] == "list") {
		 $dsn = 'mysql:host=localhost;dbname=tomklru270_juliachat';
	$user_name = 'tomklru270_chatter';
	$pass_word = 'wachtwoord';
	$db="tomklru270_juliachat";
		$mykey= $_GET['mykey'];
		$connection = new PDO($dsn, $user_name, $pass_word);
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		try {
		$getids = 'SELECT id FROM chat WHERE mykey ="'.$mykey.'"'; 
		$statement = $connection->query($getids); 
		$result = $statement->fetchall(\PDO::FETCH_ASSOC);
		
		$ids = array();

		foreach($result as $row) {
			$ids[] = $row["id"];
		}

		$resultJSON = json_encode($ids);

		echo $resultJSON;


		}


		catch(PDOException $e) {
		 echo $sql . "<br>" . $e->getMessage();
		}

		$connection = null; // Close connection
		if(isset($_SERVER['HTTP_REFERER'])) {
		    $previous = $_SERVER['HTTP_REFERER'];
		}

	} elseif(isset($_GET["action"]) && $_GET['action'] == "read") {
		 $dsn = 'mysql:host=localhost;dbname=tomklru270_juliachat';
	$user_name = 'tomklru270_chatter';
	$pass_word = 'wachtwoord';
	$db="tomklru270_juliachat";
		$id =  $_GET['id']; 
		$mykey= $_GET['mykey'];
		$connection = new PDO($dsn, $user_name, $pass_word);
		$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		try {		
		$getmsg = 'SELECT message FROM chat WHERE id ="'.$id.'" AND mykey ="'.$mykey.'"'; 
		$getusr = 'SELECT username FROM chat WHERE id ="'.$id.'" AND mykey ="'.$mykey.'"';
		$statement1 = $connection->query($getmsg); 
		$statement2 = $connection->query($getusr); 
		$result1 = $statement1->fetchcolumn();
		$result2 = $statement2->fetchcolumn();	
		$fullmessage = $result2." : ".$result1;	
		echo $fullmessage;
		}

		catch(PDOException $e) {
		echo $sql . "<br>" . $e->getMessage();
		}

		$connection = null; // Close connection

		if(isset($_SERVER['HTTP_REFERER'])) {
		    $previous = $_SERVER['HTTP_REFERER'];
		}


	} else {
		echo "GET REQUEST FAILED AGAIN";
	
	};

   
};
?>

