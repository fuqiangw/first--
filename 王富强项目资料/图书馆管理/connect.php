<?php
$host="localhost";
$db_user="root";
$db_pass="123456";
$db_name="mydb";
$timezone="Asia/Shanghai";

$link=mysqli_connect($host,$db_user,$db_pass,$db_name);
//mysql_select_db($db_name,$link);
//mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone); //北京时间
?>
