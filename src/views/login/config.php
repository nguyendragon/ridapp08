<?php

session_start();
$host = "localhost";
$user = "root";
$password = "";
$dbname = "ridashop";

$con = mysqli_connect($host, $user, $password,$dbname);
$con->query("set names 'utf8'");
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

//get ip user
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {  
  $ip_address = $_SERVER['HTTP_CLIENT_IP'];  
  } else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  
  $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];  
  } else {  
  $ip_address = $_SERVER['REMOTE_ADDR']; 
  }