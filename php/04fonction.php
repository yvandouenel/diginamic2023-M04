<?php
$a = 10;
$b = 6;
/**
 * paramètres : passage par valeur
 * sauf si on utilise & : passage par référence
 */
function decremente(&$num) // fonction impure si $num est modifié
{
  $a = 1;
  $num -= $a;
  echo "Valeur de a à l'intérieur de la fonction (la variable a à 
     l'intérieur de la fonction n'est pas la même qu'à l'extérieur: " . $a . PHP_EOL;
  return $num;
}
echo PHP_EOL;
echo decremente($b);
echo PHP_EOL;
echo "b : $b";
echo PHP_EOL;

function optionalParam($param = null)
{
  if ($param === null) {
    echo "Paramètre est null " . PHP_EOL;
  } else echo "le paramètre vaut $param";
}

optionalParam();
optionalParam(10);
function multiplesParams(...$params)
{
  var_dump($params);
}
echo PHP_EOL;
multiplesParams(1, 2, 3, 4, 5);
multiplesParams();

$func = function ($a) {
  echo "le paramètre vaut : $a" . PHP_EOL;
};

$func("Hello World!");

// Syntaxe des fonctions fléchées
$f1 = fn ($x) => $x * $x;
echo $f1(3);