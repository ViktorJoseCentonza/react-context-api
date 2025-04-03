import './App.css'
import { PostListProvider } from "./contexts/PostListContext";
import PostsPage from './components/PostsPage'

function App() {

  return (
    <>
      <PostListProvider>
        <PostsPage />
      </PostListProvider>
    </>
  )
}

export default App
