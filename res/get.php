<?php
	header("charset=utf-8");
	
	$params = json_decode(file_get_contents('php://input'));
	
	//echo $_POST['username'];

	$con = mysql_connect('localhost','root','root');
			
	$resJson = array();
	
	if(!$con){
		//die('could not connect:'.mysql_error());
		$resJson.array_push($resJson,'status:::系统繁忙，请稍后再试' );
		echo json_encode($resJson);
	} else {
		$start = time();
		
		$method = $_SERVER['REQUEST_METHOD'];
			
		switch ($method){
			case 'GET':
			
				$uId = $_GET['uId'];		
					
				mysql_select_db('job',$con);
				
				$sql = "select name from userInfo where id = ".$uId;
				
				$result = mysql_query($sql);
				
				while($res = mysql_fetch_assoc($result)){
					$resJson.array_push($resJson,$res);
				}
				break;
				
			case 'POST':
				//...
				break;
			
			case 'PUT':
				//...
				break;
				
			case 'DELETE':
				//...
				break;
				
			case 'JSONP':
				//...
				break;
				
		}
		$end = time();$runtime = $end-$start;
		$resJson.array_push($resJson,$runtime);

		echo json_encode($resJson);
		mysql_close($con);
		
	}


?>