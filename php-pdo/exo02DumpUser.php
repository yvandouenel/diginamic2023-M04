<?php
// Exo : Afficher la fiche d’un utilisateur
$fetchedUser = null;
// connection à la base de données
try {
  $dbh = new PDO(
    'mysql:host=localhost;dbname=test',
    "diginamic",
    "diginamic",
    array(PDO::ATTR_PERSISTENT => true)
  );
  // Récupération de l'id de l'utilisateur à afficher (get ou post)
  // http://localhost:8000/exo02DumpUser.php?uid=12
  if (isset($_GET["uid"])) {

    // Execution de la requête
    $fetchedUser = $dbh->query('SELECT * FROM users WHERE id=' . $_GET["uid"])->fetch(PDO::FETCH_ASSOC);
  }

  echo "Database hanler ok" . PHP_EOL;
  $dbh = null;
  echo "Database hanler null";
} catch (Exception $e) {
  print "Erreur !: " . $e->getMessage() . "<br/>";
  die();
}

// Si le résultat n'est pas vide, affichage du résultat sous la forme de clé => valeur
if (isset($fetchedUser) && $fetchedUser) {
  foreach ($fetchedUser as $key => $value) {
    echo "<br>$key : $value";
  }
}
// Sinon informer que le résultat est vide et donner une exemple d'url valide (dans le cas d'un get)