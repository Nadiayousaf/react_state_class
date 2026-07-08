import { useState } from "react";

export default function LikeButton() {

  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>Likes = {likes}</h2>

      <button onClick={addLike}>
        Like ❤️
      </button>
    </div>
  );
}