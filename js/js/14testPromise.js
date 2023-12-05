function getToken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        // Cas favorable
        resolve("DDOSFPQSDFPZSEDPQSDKFQSDIFK");
      }
      else {
        // Cas défavorable
        reject(new Error("Pb de token"));
      }
    }, 1000);
  })
}
function getUser(login,pwd, token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        // Cas favorable
        resolve({name:"Bob", uid: 256});
      }
      else {
        // Cas défavorable
        reject(new Error("Pb de récupération de l'utilisateur"));
      }
    }, 1000);
  })
}

 getToken()
  .then((token) => {
    console.log(`token`, token);
    return getUser("bob","qsdfqsdf", token);
  })
  .then(user => {
    console.log(`user : `, user);
  })
  .catch(error => {
    console.error(`Erreur attrapée : `, error);
  });



