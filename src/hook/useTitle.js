import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = "PixelVault | " +  title;
  }, [title]);
}

export default useTitle
