import { getPost } from "./solicitar_posts.js";

export const getPostTitle = async(URL,RegExp)=>{
    const posts = await getPost (URL);
    const postTitle = posts.filter((post) => RegExp.test(post.title));
    return postTitle;
}