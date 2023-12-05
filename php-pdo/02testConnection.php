<?php
try {
  $dbh = new PDO(
    'mysql:host=localhost;dbname=test',
    "diginamic",
    "diginamic",
    array(PDO::ATTR_PERSISTENT => true)
  );
  $rows = $dbh->query('SELECT * from users LIMIT 2')->fetchAll();
  //echo $rows["firstname"];//génère une erreur
  var_dump($rows);



  echo "Database hanler ok" . PHP_EOL;
  $dbh = null;
  echo "Database hanler null";
} catch (Exception $e) {
  print "Erreur !: " . $e->getMessage() . "<br/>";
  die();
}
