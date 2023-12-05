<?php
$page = 'accueil.php';
if (isset($_GET["page"])) {
  switch ($_GET["page"]) {
    case 'plats':
      $page = 'plats.php';
      break;
    case 'menus':
      $page = 'menus.php';
      break;
    case 'admin':
      $page = 'admin.php';
      break;
    default:
      $page = 'accueil.php';
      break;
  }
}
require_once(dirname(__FILE__) . '/../pages/' . $page);
