import JsonServer from "../services/JsonServer";
import { LoaderFunctionArgs } from 'react-router-dom';
const loader = async (arg: LoaderFunctionArgs) => {
  let article_id = arg.params.id as string;
  console.log(`arg: `, arg);
  return JsonServer.loadArticle(article_id);
}
export default loader;