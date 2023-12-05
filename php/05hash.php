<?php
echo password_hash("2566dooeDd;", PASSWORD_DEFAULT);

$result = password_verify("2566dooeDd;", '$2y$10$iS5FjZon3z/oFTWDpXm3..XYqHz4guy2/jw7/.9LI3p3aZpVDK7Um');
echo PHP_EOL;
if($result) {
  echo "Pwd ok";
}else {
  echo "Pb de mot de passe";
}