export const useLikedImages = () => {
    const savedLikes = localStorage.getItem("likedImages");
    return savedLikes ? JSON.parse(savedLikes) : [];
  }