import { createContext, useContext, useState } from "react";
import PostData from '../data/PostData'
const PostListContext = createContext();

function PostListProvider({ children }) {

    const [PostList, setPostList] = useState(PostData);
    return (
        <PostListContext.Provider
            value={{ PostList, setPostList, }}>
            {children}
        </PostListContext.Provider>
    )
}

function usePostList() {
    const context = useContext(PostListContext);
    console.log(`in PostListContext value is: `)
    console.log(context)
    return context;
}

export { PostListProvider, usePostList }
