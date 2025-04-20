import { useEffect, useState } from "react";

function useImageLoader(data, loading) {
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  useEffect(() => {
    if (loading) {
      document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
      setAllLoaded(false);
      setLoadedCount(0);
    }
  }, [loading]);

  useEffect(() => {
    if (data?.length > 0 && loadedCount === data?.length) {
      setTimeout(() => {
        setAllLoaded(true);
      }, 300);
    } else {
      setAllLoaded(false);
    }
  }, [loadedCount, data]);

  const handleImgLoadCount = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return { allLoaded, handleImgLoadCount };
}

export default useImageLoader;
