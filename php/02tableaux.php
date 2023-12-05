<?php

$eleves = [
  'Simone' => [
    'lastname' => "Commatis",
    'notes' => [16]
  ]
];
// Ajout d'une note à Simone
$eleves["Simone"]["notes"][] = 19;

array_push($eleves["Simone"]["notes"], 15, 12, 20);
var_dump($eleves);

$fruits = ["Banane", "Cerise", "Ananas"];
foreach ($fruits as $fruit) { // par défaut, passage par valeur
  $fruit = $fruit . 's';
  echo $fruit . PHP_EOL;
}
var_dump($fruits);
echo count($fruits);
echo PHP_EOL;
$os = array("Mac", "NT", "Irix", "Linux");
if (in_array("Irix", $os)) {
  echo "Got Irix";
}
if (in_array("mac", $os)) {
  echo "Got mac";
}
$other_fruits = ["Pomme", "Abricot"];
// Le spread operator utilise le passage par valeur
$all_fruits = ["Pasteque", ...$other_fruits, ...$fruits, "Pêche"];
var_dump($all_fruits);

// Affichage d'une valeur d'un tableau complexe 
$very_complex_array = [
  [
    "nom" => "Tartenpion",
    "identite" => [
      "prenom" => "Didier",
      "date_naissance" => "2020-10-10",
      "adresse" => [
        "rue" => "nulle part",
        "code_postal" => "34000",
        "ville" => "Montpellier"
      ]
    ]
  ],
  [
    "nom" => "Tartenpion2",
    "identite" => [
      "prenom" => "Didier",
      "date_naissance" => "2020-10-10",
      "adresse" => [
        "rue" => "nulle part",
        "code_postal" => "34500",
        "ville" => "Montpellier"
      ]
    ]
  ]
];
echo $very_complex_array[1]["identite"]["adresse"]["code_postal"];