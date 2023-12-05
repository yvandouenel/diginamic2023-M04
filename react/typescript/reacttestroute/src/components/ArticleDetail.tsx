import { useLoaderData} from "react-router-dom";
const ArticleDetail = () => {
  const article: any = useLoaderData();
  
  return (
    <>
      <h2>Détail d'un article</h2>
      <h3>{article.title}</h3>
    </>
  );
}

export default ArticleDetail;