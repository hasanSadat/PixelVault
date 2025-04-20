import { useEffect, useState } from "react";
import { HiHeart } from "react-icons/hi";

function LikeImage({ data, id }) {

  

  const [isLiked, setIsLiked] = useState(() => {
    const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
    return likedImages.some((image) => image?.id === id);
  });

  useEffect(() => {
    setIsLiked(() => {
      const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
      return likedImages.some((image) => image?.id === id);
    });
  }, [id]);

  const toggleLike = (id, data) => {
    const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];

    if (likedImages.some((image) => image?.id === id)) {
      const updatedLikes = likedImages.filter((image) => image?.id !== id);
      localStorage.setItem("likedImages", JSON.stringify(updatedLikes));
      setIsLiked(false);
    } else {
      likedImages?.push(data);
      localStorage.setItem("likedImages", JSON.stringify(likedImages));
      setIsLiked(true);
    }
  };

  return (
    <button
      title="Add to favorites"
      className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 
              ${isLiked ? "text-red-500" : "text-gray-500"} 
              bg-white/20 backdrop-blur-md hover:bg-black/50 hover:text-red-900 hover:scale-110 shadow-lg`}
      onClick={() => toggleLike(id, data)}
    >
      {isLiked ? (
        <HiHeart className="fill-red-500 scale-110 transition-all duration-200" />
      ) : (
        <HiHeart />
      )}
    </button>
  );
}

export default LikeImage;
