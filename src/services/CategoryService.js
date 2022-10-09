import { myAxios } from "./Helper";

export const getAllCategories = () => {
  return myAxios
    .get("/api/category/categories")
    .then((response) => response.data);
};