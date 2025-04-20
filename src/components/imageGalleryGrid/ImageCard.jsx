import { useNavigate } from "react-router-dom";
import LikeImage from "../favorite/likeImage";

function ImageCard({
  allLoaded,
  data,
  onImgLoadCount,
  source,
  index,
  allImgs,
}) {
  const id = data.id,
    img = data.urls.regular,
    alt = data.alt_description,
    name = data.user.name;
  const navigate = useNavigate();

  const handleNav = function () {
    navigate(`/${source}/${id}`, {
      state: { photo: data, allImages : allImgs, currentIndex: index  , source },
    });
  };

  return (
    <div className={`border border-[#321] rounded-md relative  min-h-[200px]`}>

      <img
        onClick={handleNav}
        className={`rounded-md object-cover  shadow-md hover:opacity-70 cursor-pointer ${
          allLoaded ? "opacity-100 w-full h-full" : "opacity-0 w-0 h-0"
        } transition-opacity duration-500`}
        src={img}
        onLoad={onImgLoadCount}
        width="100%"
        height="100%"
        alt={alt}
      />
      <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {name}
      </p>
      <LikeImage data={data} id={id} />
    </div>
  );
}

export default ImageCard;
