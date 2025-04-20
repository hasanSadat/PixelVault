import ImageCard from "./ImageCard";
import SkeletonGrid from "../skeleton/SkeletonGrid";
import useLoadCount from "../../hook/useLoadCount";
import { useContext } from "react";
import { GalleryContext } from "../../context/galleryContext";

function ImageGalleryGrid({data , source}) {
  const {  loading } = useContext(GalleryContext);
  const { allLoaded, handleImgLoadCount } = useLoadCount(data, loading, source);

  return (
    <div className="relative w-full h-full">
      {!allLoaded && <SkeletonGrid/> }
      <div
        className={`max-w-[400px] mx-auto md:max-w-full  mt-6 lg:m-[4rem] ${
          allLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <div
          className={`gap-3 md:grid-cols-2 xl:grid-cols-4 md:gap-4 ${
            allLoaded ? "grid" : "hidden"
          } `}
        >
          {data?.map((image, i) => (
            <ImageCard
              key={image.id}
              allLoaded={allLoaded}
              allImgs={data}
              index={i}
              onImgLoadCount={handleImgLoadCount}
              data={image}
              source={source === "home" ?"explore" : source}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGalleryGrid;
