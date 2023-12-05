import { useLoaderData, useFetcher } from "react-router-dom"
import Article from "./Article";
const Articles = () => {
  const articles: any = useLoaderData();
  const fetcher = useFetcher();
  return (
    <>
      <h2>Liste des articles</h2>
      <fetcher.Form action="/add/article" method="POST">
        <label htmlFor="add-article">Titre</label>
        <input type="text" name="article_title" id="add-article" />
        <input type="submit" value="Ajouter un article" />
      </fetcher.Form>
      {articles.map((article: any) => <Article key={article.id} article={article} />)}
    </>
  );
}

export default Articles;