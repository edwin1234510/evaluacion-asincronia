import { getPost } from "../posts/solicitar_posts.js";

export const getPostId = async(URL,user) =>{
    const posts = await getPost(URL);
    const post_user = posts.filter((post) => post.userId == user.id)
    return post_user
}