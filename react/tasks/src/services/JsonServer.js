export default class JsonServer {
  static url = 'http://localhost:3001/tasks';
  static async loadTasks() {
    return fetch(JsonServer.url)
      .then(response => {
        console.log(`response.status`, response.status);
        return response.json();
      })
      .then(tasks => {
        console.log(`tasks : `, tasks);
        return tasks;
      })
  }
  static async deleteRemoteTask(task_id) {
    return fetch(`${JsonServer.url}/${task_id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      })
      .then(function (res) {
        console.log(`res.status`, res.status);
        if (res.status !== 200) throw new Error("Erreur dans deleteRemoteTask");
        return res.json();
      })
      .then(function (data) { console.log("data après delete", data) })
  }
  static async addRemoteTask(task) {
    return fetch(JsonServer.url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(task)
      })
      .then(function (response) { 
        console.log(response) 
        return response.json();
      })
      .then(function (task) { 
        console.log(task) 
      })
      .catch(function (error) { console.error(error) })
  }
  static async patchRemoteTask(task_id, task_prop) {
    return fetch(JsonServer.url + '/' + task_id,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify(task_prop)
      })
      .then(function (response) { 
        console.log(response) 
        return response.json();
      })
      .then(function (task) { 
        console.log(task) 
      })
      .catch(function (error) { console.error(error) })
  }
  
}