<h2>Plats</h2>
<?php
require_once(dirname(__FILE__) . "/../src/utils/readPlats.php");



$plats = read_plats();
// GESTION DE LA SUPPRESSION D'UN PLAT
if(isset($_SESSION['user']) && $_SESSION['user'] && isset($_GET["delete"])){
  //var_dump($plats);
  remove_line_plats($plats, $_GET["delete"]);
}
if (isset($_GET["sort"])) {
  if (isset($_GET["order"])) {
    sortPlats($plats, $_GET["sort"], $_GET["order"]);
  }
}
//var_dump($plats);
dumpTablePlats($plats);
function dumpTablePlats($plats)
{
  // Récupération des l'ordre en fonction de ce qui a déjà été cliqué
  $sorts = getSortOrder();
  // On utilise le sort dans le lien 
  $admin_tr = (isset($_SESSION['user']) && $_SESSION['user']) ? '<th>Administration</th>' : '';

  echo '<table class="table">';
  echo "\n" . ' <tr>';
  echo "\n" . '   <th><a href="/index.php?page=plats&sort=type&order=' . $sorts["type"] . '">Type</a></th>';
  echo "\n" . '   <th><a href="/index.php?page=plats&sort=name&order=' . $sorts["name"] . '">Nom</a></th>';
  echo $admin_tr;
  echo "\n" . ' </tr>';

  foreach ($plats as $key => $plat) {
    echo "\n" . ' <tr>';
    foreach ($plat as $value) {
      echo "\n" . '   <td>' . $value . '</td>';
    }
    $admin_td = (isset($_SESSION['user']) && $_SESSION['user']) ? '<td><a href="/index.php?page=plats&delete=' . $key . '"><button>Suppression</button></a></td>' : '';
    echo $admin_td;
    echo "\n" . ' </tr>';
  }
  echo '</table>';
}
/**
 * Trie les plats 
 *
 * @param array $plats le tableau des plats à trier
 * @param string $sort : l'info à partir de laquelle on trie (name ou type)
 * @param string $order asc pour ordre alphabétique sinon desc
 * @return array
 */
function sortPlats(&$plats, $sort, $order)
{
  $sorted_plats = [];
  $cmp = function ($a, $b) use ($sort, $order) {
    if ($order === 'asc') return strcmp($a[$sort], $b[$sort]);
    else return strcmp($b[$sort], $a[$sort]);
  };
  // permet un tri sur un tableau multidimensionnel
  usort($plats, $cmp);
}
/**
 * Récupère l'ordre en fonction de ce qui a déjà été cliqué via $_GET
 * @return (Array) Le tableau avec l'ordre à venir
 */
function getSortOrder()
{
  $sorts = [
    "name" => "asc",
    "type" => "asc"
  ];

  // on teste si on peut récupérer les clés sort et order depuis la querystring
  if (isset($_GET["sort"])) {
    if (isset($_GET["order"])) {
      $sorts[$_GET["sort"]] = $_GET["order"] === "asc" ? "desc" : "asc";
    }
  }
  return $sorts;
}
?>