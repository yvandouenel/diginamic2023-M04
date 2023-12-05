export default class JsonServer {
  private static url = "http://localhost:3001/articles";

  static async loadArticles() {
    return fetch(JsonServer.url)
      .then((response) => {
        return response.json();
      })
      .then((articles) => {
        return articles;
      })
      .catch((error) => {
        console.error(`Erreur attrapée dans loadArticles : ` + error);
      });
  }
  static async loadArticle(article_id: string) {
    return fetch(`${JsonServer.url}/${article_id}`)
      .then((response) => {
        return response.json();
      })
      .then((article) => {
        return article;
      })
      .catch((error) => {
        console.error(`Erreur attrapée dans loadArticles : ` + error);
      });
  }
  static async addArticle(title: string) {
    return fetch(JsonServer.url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ title: title }),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(`Erreur attrapée dans addArticle`, +error);
      });
  }
}
