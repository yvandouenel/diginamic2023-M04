<?php

require_once(dirname(__FILE__).'/classes/SingletonPDO.php');

foreach(SingletonPDO::getInstance()->query('SELECT * FROM users LIMIT 1') as $user){
  var_dump($user);
}
foreach(SingletonPDO::getInstance()->query('SELECT * FROM users LIMIT 1') as $user){
  var_dump($user);
}