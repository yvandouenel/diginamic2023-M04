<?php
$fetchedUser = null;
try {
  $dbh = new PDO('mysql:host=localhost;dbname=test', 'diginamic', 'diginamic');
  if (isset($_POST['submit'])) {
    $statement = $dbh->prepare('
    UPDATE users 
     SET firstname = :firstname, 
     lastname = :lastname,
     email = :email
     WHERE id=:id;
     ');

    $statement->execute([
      'firstname' => $_POST['firstname'],
      'lastname' => $_POST['lastname'],
      'email' => $_POST['email'],
      'id' => $_GET['uid']
    ]);
    header("Location: http://localhost:8000/exo05Filters.php");
  }
  if (isset($_GET['uid'])) {
    $fetchedUser = $dbh->query('SELECT * from users where id = ' . $_GET['uid'])->fetch(PDO::FETCH_OBJ);
  }
  $dbh = null;
} catch (PDOException $e) {
  echo "<br/> Erreur !: " . $e->getMessage() . "<br/>";
  die();
}
?>

<?php if (isset($fetchedUser) && $fetchedUser) : ?>
  <form method="post">
    <label for="firstname">Prénom</label>
    <input type="text" name="firstname" value="<?= $fetchedUser->firstname ?>">
    <br>
    <label for="lastname">Nom de famille</label>
    <input type="text" name="lastname" value="<?= $fetchedUser->lastname ?>">
    <br>
    <label for="email">Email</label>
    <input type="text" name="email" value="<?= $fetchedUser->email ?>">
    </br>
    <input type="submit" value="Modifier" name="submit">
  </form>
  <?php else : ?>
    <h1>Problème de sélection d'un utilisateur</h1>
    <p>Veuillez ajouter une query string du type : ?uid=12</p>
  <?php endif; ?>