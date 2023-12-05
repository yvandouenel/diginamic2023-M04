import { ActionFunctionArgs } from "react-router-dom";
import JsonServer from "../services/JsonServer";

export const actionAdd = async ({ request }: ActionFunctionArgs) => {
  console.log(` Dans actionAdd de article`);
  const formData = await request.formData();
  const article_title = formData.get("article_title") as string;
  await JsonServer.addArticle(article_title);
  return null;
};
