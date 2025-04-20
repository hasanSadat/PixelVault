import { useContext } from "react";
import ImageDetailContext from "../../context/ImageDetailContext";
import ImageViewer from "./ImageViewer";
import NavigationButtons from "./NavigationButtons";
import SkeletonCard from "../skeleton/SkeletonCard";

function ImageDetailContainer() {
  
  const { loadedImg } = useContext(ImageDetailContext);

  return (
    <div dir="ltr" className="max-w-[500px] md:max-w-full md:flex md:flex-col md:items-center mx-auto md:mx-0 md:p-6 mt-10 relative">
      {loadedImg && (
        <div className="w-full md:w-2/3 xl:w-[33%] aspect-[1] md:aspect-auto h-[600px] md:h-[660px] mx-auto">
          <SkeletonCard height="600px" />
        </div>
      )}
      <ImageViewer />
      <NavigationButtons />
    </div>
  );
}

export default ImageDetailContainer;
