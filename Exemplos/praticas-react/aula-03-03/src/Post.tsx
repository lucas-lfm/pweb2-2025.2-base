import React from "react";

interface PostProps {
  post: {
    id: number;
    title: string;
    likeCount: number;
  };
  onLike: (id: number) => void;
}

function Post({ post, onLike }: PostProps) {
  console.log("Renderizou post", post.id);

  return (
    <div>
      {post.title}
      <button onClick={() => onLike(post.id)}>Curtir ({post.likeCount})</button>
    </div>
  );
}

export default React.memo(Post);
