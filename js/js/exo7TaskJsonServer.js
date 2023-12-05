// Récupération des données qui se trouvent sur le serveur
fetch("http://localhost:3000/tasks")
  .then(response => {
    console.log(`response.status`, response.status);
    return response.json();
  })
  .then(tasks => {
    console.log(`tasks`, tasks);
  })
  .catch(error => {
    console.error(`Erreur attrapée : `, error);
  });

// Ajout d'une tâche sur le serveur via une requête post
/* fetch("http://localhost:3000/tasks",
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ "label": "Faire les courses", "done": false })
  })
  .then(function (res) {
    console.log("Reponse du serveur après un POST : ", res);
    return res.json();
  })
  .then(data => {
    console.log(`data après post : `, data);
  })
  .catch(function (res) { console.log(res) }) */

  fetch("http://localhost:3000/tasks/1",
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify({ "label": "Faire du vélo", "done": false })
  })
  .then(function (res) {
    console.log("Reponse du serveur après un POST : ", res);
    return res.json();
  })
  .then(data => {
    console.log(`data après post : `, data);
  })
  .catch(function (res) { console.log(res) })