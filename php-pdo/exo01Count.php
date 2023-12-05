<?php
try {
  $dbh = new PDO(
    'mysql:host=localhost;dbname=test',
    "diginamic",
    "diginamic",
    array(PDO::ATTR_PERSISTENT => true)
  );
  $rowCount = $dbh->query('SELECT * FROM users')->rowCount();

  echo $rowCount . PHP_EOL;

  echo "Database hanler ok" . PHP_EOL;
  $dbh = null;
  echo "Database hanler null";
} catch (Exception $e) {
  print "Erreur !: " . $e->getMessage() . "<br/>";
  die();
}
