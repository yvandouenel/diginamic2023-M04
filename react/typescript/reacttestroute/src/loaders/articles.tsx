import JsonServer from "../services/JsonServer";
const loader = async ()=> {
  return JsonServer.loadArticles();
}
export default loader;