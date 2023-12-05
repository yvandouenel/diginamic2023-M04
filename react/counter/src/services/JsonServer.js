export default class JsonServer {
  static url = "http://localhost:3001/counters";

  /**
   * Va chercher les données provenant du serveur
   * json-server - soit un tableau d'objets 
   * @returns Promise<Array>
   */
  static async loadCounters(){
    return fetch(JsonServer.url)
    .then(response => {
      console.log(`statut de la réponse : `, response.status);
      return response.json();
    })
    .then(counters => {
      console.log(`counters : `, counters);
      return counters;
    })
    .catch(error => {
      console.error("Erreur attrapée dans loadCounters" + error)
    })
  }
}