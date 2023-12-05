<?php
echo "Hello World";
// Déclaration d'une variable avec un $ !
$entier = 5;
echo PHP_EOL;
echo $entier;
echo PHP_EOL;
var_dump($entier);
echo PHP_EOL;
$string = "Hello World";
echo PHP_EOL;
var_dump($string);
echo PHP_EOL;
$bool = false;
var_dump($bool);
echo PHP_EOL;

$flottant = 1.25;
var_dump($flottant);
echo PHP_EOL;

// Opérations sur les variables

$total = $entier * 2;
var_dump($total);
echo PHP_EOL;
$modulo = $total % 3;
var_dump($modulo);
echo PHP_EOL;
// Concaténation
$concatenation = PHP_EOL . $string . " concaténée avec une autre chaîne de caractères" . PHP_EOL;
var_dump($concatenation);

// Transtypage implicite
echo $entier . $string . PHP_EOL;

echo $entier . $bool . PHP_EOL;

// Syntaxes raccourcies 
//$nombre = $nombre + 1.2;
$flottant += 1.2;
echo $flottant;
echo PHP_EOL;

$string .= " avec une autre chaîne de caractères";
echo $string;
echo PHP_EOL;

// Constante : ne peut pas changer de valeur (!= du js)
define("MA_CONSTANTE", "Valeur de la constante");
echo MA_CONSTANTE;
echo PHP_EOL;
/**
 * Liste des constantes prédéfinies :
 * https://www.php.net/manual/en/reserved.constants.php
 */
echo PHP_EOL;

// Copie par valeur sauf dans le cas des objets
$bob = "Bob";
$simon = $bob; // copie par valeur : l'adresse mémoire n'est pas la même 
$simon = "Simon";
$bob = "qsdfqsfqsfqsdfq";
$bob = "Toto";
var_dump($bob);
echo PHP_EOL;
var_dump($simon);

// portée des variables
$a = 12; // portée globale
function test() {
  // $GLOBALS est un tableau associatif dans lequel on va retrouver toutes
  // les variables globales en fonction de leur nom (clé)
  echo "a : " .  $GLOBALS["a"]; 
  echo PHP_EOL;
}
test();

function test1() {
  static $a = 0;  
  $a ++;
  echo PHP_EOL;
  echo "a : " . $a . "\n"; 
}
test1();
test1();
//var_dump($_SERVER["PWD"]);
echo PHP_EOL;
echo "<br><br>";
var_dump($_COOKIE);
