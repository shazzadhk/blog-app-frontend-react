import { privateAxios } from "./Helper";

export const createPost = (data) => {
  return privateAxios
    .post(
      `/api/post/add-post/user/${data.userId}/category/${data.categoryId}`,
      data
    )
    .then((response) => response.data);
};
