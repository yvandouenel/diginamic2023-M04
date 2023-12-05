import { Link } from 'react-router-dom';
const Article = (props: any) => {
  return (
    <section className="article text-primary">
      <h3>
        <Link to={'/articles/' + props.article.id}>{props.article.title}</Link>
      </h3>
    </section>
  );
}

export default Article;