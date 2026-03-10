import { useCallback, useState } from "react";
import Feed from "./Feed";
import type { PostType } from "./types/post.type";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<PostType[]>(() => {
    return Array.from({ length: 5000 }, (_, i) => ({
      id: i,
      title: `Post ${i}`,
      likeCount: 0,
    }));
  });

  const likePost = useCallback((id: number) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return { ...post, likeCount: post.likeCount + 1 };
        } else {
          return post;
        }
      }),
    );
  }, []);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Atualizar contador: {count}
      </button>

      <Feed posts={posts} onLike={likePost} />
    </div>
  );
}

export default App;
