<?php

// conditionnelle
$a = 52;

if ($a > 5) {
  echo $a . " est bien supérieur à 5";
}
echo PHP_EOL;
if ($a) {
  echo $a . " est truely";
} else {
  echo $a . " est falsy";
}

$tab = [1];
// opérateur d'égalité stricte : compare le type puis la valeur (le cas échéant)
if ($tab === true) {
  echo $tab . " est truely";
} else {
  echo $tab . " est falsy";
}
echo PHP_EOL;
$done = true;
if ($done && $a) {
  echo "done et a sont truely";
}
if (!$done && $a) {
  echo "done est falsy et a est truely";
}
echo PHP_EOL;
if (!$done || $a) {
  echo "done est falsy ou a est truely";
}
echo PHP_EOL;
// switch case
switch ($a) {
  case 52:
    echo '$a est bien égal à 52' . PHP_EOL;
    break;
  case 100:
    echo '$a est bien égal à 100' . PHP_EOL;
    break;
  default:
    echo 'Cas de figure par défaut' . PHP_EOL;
    break;
}
// Boucles
$i = 10;
while ($i > 0) {
  echo PHP_EOL . "valeur de i dans while : $i";
  $i--;
}
do {
  echo PHP_EOL . "valeur de i dans do while : $i";
} while ($i > 0);

for ($j = 0; $j < 10; $j++) {
  echo PHP_EOL . "valeur de j : $j ";
}
