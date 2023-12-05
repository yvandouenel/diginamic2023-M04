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
  // http://localhost:8000/exo03PreparedRequest.php?uid=12
  // http://localhost:8000/exo03PreparedRequest.php?uid=12;DELETE%20FROM%20users
  if (isset($_GET["uid"])) {

    // Préparation de la requête avec la méthode prepare qui retourne un objet PDOStatement en cas de réussite.
    $statement = $dbh->prepare('SELECT * from users where id = :id');

    // Execution de la requête
    $statement->execute(['id' => $_GET['uid']]);
    $fetchedUser = $statement->fetch(PDO::FETCH_ASSOC);
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