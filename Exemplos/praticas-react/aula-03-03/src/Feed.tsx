import Post from "./Post";
import type { PostType } from "./types/post.type";

interface FeedProps {
  posts: PostType[];
  onLike: (id: number) => void;
}

function Feed({ posts, onLike }: FeedProps) {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={onLike} />
      ))}
    </>
  );
}

export default Feed;
