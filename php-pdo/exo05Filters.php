<?php
$valuesInput = ["", "", ""];
try {
  $dbh = new PDO('mysql:host=localhost;dbname=test', 'diginamic', 'diginamic');

  // Préparation de l'instruction SQL
  $params = [];
  $query = 'SELECT * from users ';
  if (isset($_GET['firstname'])) {
    $query .= 'where firstname LIKE :firstname ';
    $params['firstname'] = '%' . $_GET['firstname'] . '%';
    $valuesInput[0] = ' value="' . $_GET['firstname'] . '" ';
  }
  if (isset($_GET['lastname'])) {
    $query .= 'AND lastname LIKE :lastname ';
    $params['lastname'] = '%' . $_GET['lastname'] . '%';
    $valuesInput[1] = ' value="' . $_GET['lastname'] . '" ';
  }
  if (isset($_GET['email'])) {
    $query .= 'AND email LIKE :email ';
    $params['email'] = '%' . $_GET['email'] . '%';
    $valuesInput[2] = ' value="' . $_GET['email'] . '" ';
  }
  $query .= 'LIMIT 200';
  echo "query : " . $query;
  //Péparation de la requête
  $statement = $dbh->prepare($query);
  $statement->execute($params);
  $allUsers = $statement->fetchAll(PDO::FETCH_ASSOC);

  $dbh = null;
} catch (PDOException $e) {
  print "Erreur !: " . $e->getMessage() . "<br/>";
  die();
}
?>

<?php if (isset($allUsers) && $allUsers) { ?>
  <form method="GET">
    <label for="firstname">Prénom : </label>
    <input type="text" name="firstname" id="firstname" <?= $valuesInput[0]; ?>>
    </br>
    <label for="lastname">Nom de famille : </label>
    <input type="text" name="lastname" id="lastname" <?= $valuesInput[1]; ?>>
    </br>
    <label for="email">Email : </label>
    <input type="text" name="email" id="email" <?= $valuesInput[2]; ?>>
    <button>Filtrer</button>
  </form>
  <ol>
    <?php foreach ($allUsers as $user) { ?>
      <li>
        <a href="/exo02DumpUser.php?uid=<?= $user['id'] ?>">
          <?=
          $user['firstname'] . ' - ' . $user['lastname'] . ' - ' . $user['email'];
          ?>
        </a>
         - 
        <a href="http://localhost:8000/exo06Update.php?uid=<?= $user['id'] ?>">
          Modifier
        </a>
      </li>
    <?php } ?>
  </ol>
<?php }
