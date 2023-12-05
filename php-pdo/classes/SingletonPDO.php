<?php
class SingletonPDO
{
  /**
   * @var PDO
   * @access private
   */
  private $dbh = null;

  /**
   * @var SingletonPDO
   * @access private
   * @static
   */
  private static $instance = null;

  /**
   * Constructeur de SingletonPDO
   * @param void
   * @access private
   * @return SingletonPDO
   */
  private function __construct()
  {
    try {
      $this->dbh = new PDO(
        'mysql:host=localhost;dbname=test',
        "diginamic",
        "diginamic",
        array(PDO::ATTR_PERSISTENT => true)
      );
    } catch (Exception $e) {
      print "Erreur !: " . $e->getMessage() . "<br/>";
      die();
    }
  }
  /**
   * Retourne une référence vers l'unique instance de SingletonPDO
   * @static
   * @param void
   * @return SingletonPDO
   */
  public static function getInstance()
  {
    if (is_null(self::$instance)) {
      self::$instance = new SingletonPDO();
    } else {
      echo 'SingletonPDO a déjà été instanciée' . PHP_EOL;
    }
    return self::$instance;
  }
  public function query($query)
  {
    return $this->dbh->query($query);
  }
}
