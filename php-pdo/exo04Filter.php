<?php
// Exo : Afficher la fiche d’un utilisateur
$allUsers = null;
$input = '';
// connection à la base de données
try {
  $dbh = new PDO(
    'mysql:host=localhost;dbname=test',
    "diginamic",
    "diginamic",
    array(PDO::ATTR_PERSISTENT => true)
  );
  // Récupération de la chaîne de caractères qui va permettre de filtrer


  // Préparation de la requête avec la méthode prepare qui retourne un objet PDOStatement en cas de réussite.
  $query = 'SELECT * from users ';
  $params = [];
  if (isset($_POST["firstname"])) {
    $query .= ' WHERE firstname LIKE :firstname';
    $params['firstname'] = '%' . $_POST['firstname'] . '%';
    $input = '  <input type="text" value="' . $_POST["firstname"] . '" id="firstname" name="firstname">';
    
  } else $input = '  <input type="text" id="firstname" name="firstname">';
    
  $query .= ' LIMIT 200';
  echo "query : " . $query;

  $statement = $dbh->prepare($query);
  // Execution de la requête
  $statement->execute($params);
  $allUsers = $statement->fetchAll(PDO::FETCH_ASSOC);

  //echo "Database hanler ok" . PHP_EOL;
  $dbh = null;
  //echo "Database hanler null";
} catch (Exception $e) {
  print "Erreur !: " . $e->getMessage() . "<br/>";
  die();
}

// Afficher le formulaire de filtre
echo '<form method="POST" action="exo04Filter.php">';
echo '  <label for="firstname">Filtre des utilisateurs par le prénom</label>';
echo $input;
echo '  <input type="submit" value="Filtrer">';
echo '</form>';

// Si le résultat n'est pas vide, affichage du résultat sous la forme de clé => valeur
if (isset($allUsers) && $allUsers) {
  echo "<ol>";
  foreach ($allUsers as $user) {
    echo "<li>" . $user['firstname'] . " " . $user['lastname'] . "</li>";
  }
  echo "</ol>";
}
// Sinon informer que le résultat est vide et donner une exemple d'url valide (dans le cas d'un get)





 // Afficher la liste des utilisateurs dans une liste HTML et à l'aide de la boucle foreach
