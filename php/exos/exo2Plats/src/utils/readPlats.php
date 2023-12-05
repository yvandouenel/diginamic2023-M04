<?php
/**
 * Lit les plats du fichier csv
 *
 * @return array
 */
function read_plats()
{
  $plats = [];
  $file_path = dirname(__FILE__) . '/../../src/datas/plats.csv';
  if (file_exists($file_path)) {
    $file_pointer = fopen($file_path, 'r');
    while ($data = fgetcsv($file_pointer, null, ";")) {
      $plats[] = [
        "type" => $data[0],
        "name" => $data[1]
      ];
    }
  }
  return $plats;
}
/**
 * Supprime une ligne des plats
 * 
 * 
 * @param array
 * @param integer
 * @return array
 */

function remove_line_plats(&$plats, $index)
{
  $file_path = dirname(__FILE__) . '/../../src/datas/plats.csv';
  if (file_exists($file_path)) {
    
    $file_pointer = fopen($file_path, 'w');
    foreach($plats as $i => $plat) {
      if($index != $i) {
        fwrite($file_pointer, $plat["type"] . ';'. '"'.$plat["name"].'"'.PHP_EOL);
      }
      else unset($plats[$i]);
    }
    fclose($file_pointer);
  }
}
