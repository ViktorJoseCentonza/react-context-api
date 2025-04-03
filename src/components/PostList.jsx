import PostCard from './PostCard'
import { usePostList } from "../contexts/PostListContext";

export default function PostList() {
    const { PostList } = usePostList();
    console.log(PostList)

    return (
        <>
            {PostList.map((post) => (
                < PostCard key={`post-${post.id}`} properties={post} />
            ))}

        </>

    )
}