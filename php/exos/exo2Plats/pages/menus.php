<h2>Menu de la semaine</h2>
<p>Cette page affiche un tableau de 7 menus (pour la semaine) calculés de façon aléatoire.
  Il faut simplement que le menu contienne une entrée, un plat et un dessert.
  On ne peut pas avoir exactement le même menu deux fois de suite.
</p>

<?php
require_once(dirname(__FILE__) . "/../src/utils/readPlats.php");

//Récupération des plats dans le fichier csv
$plats = read_plats();

//Déclare un nouveau tableau menus qui est de taille 7 (pour chaque jour de la semaine).
$menus = [];

// Alimentation du tableau via la fonction randomMenu
for ($i = 0; $i < 7; $i++) {
  $menu = randomMenu($plats);
  // On s'assure que le menu est différent du menu précédent
  if ($i > 0) {
    while (!count(array_diff($menus[$i - 1], $menu))) {
      $menu = randomMenu($plats);
    }
  }
  $menus[] = $menu;
}
// Affichage du tableau
dumpTableMenus($menus);

function dumpTableMenus($menus)
{
  $days = array('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche');
  echo '<table class="table">';
  echo "\n" . ' <tr>';
  echo "\n" . '   <th>Jour</th>';
  echo "\n" . '   <th>Entrée</th>';
  echo "\n" . '   <th>Plat</th>';
  echo "\n" . '   <th>Dessert</th>';
  echo "\n" . ' </tr>';

  foreach ($menus as $key => $menu) {
    echo "\n" . ' <tr>';
    echo "\n" . '   <th>' . $days[$key] . '</th>';
    echo "\n" . '   <td>' . $menu[0] . '</td>';
    echo "\n" . '   <td>' . $menu[1] . '</td>';
    echo "\n" . '   <td>' . $menu[2] . '</td>';
    echo "\n" . ' </tr>';
  }
  echo '</table>';
}

function randomMenu($plats)
{
  // sépare le tableau de plats en 3 tableaux en fonction du type (entrée, plat, dessert)
  // array_merge permet de créer le tableau avec des index qui partent de 0 et qui se suivent
  $platsStarter = array_merge(array_filter($plats, fn ($plat) => $plat["type"] === "entrée"));
  $platsMain = array_merge(array_filter($plats, fn ($plat) => $plat["type"] === "plat"));
  $platsDessert = array_merge(array_filter($plats, fn ($plat) => $plat["type"] === "dessert"));
  return [
    $platsStarter[rand(0, count($platsStarter) - 1)]["name"],
    $platsMain[rand(0, count($platsMain) - 1)]["name"],
    $platsDessert[rand(0, count($platsMain) - 1)]["name"]
  ];
}
