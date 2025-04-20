import { useContext } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import LikeImage from "../favorite/likeImage";
import ImageDetailContext from "../../context/ImageDetailContext";

function ImageViewer() {
 
  const { photo, loadedImg, handleLoadingImage, imageid } =
    useContext(ImageDetailContext);

    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loadedImg ? 0 : 1 }}
      transition={{ duration: 1 }}
      className={`relative aspect-[1/2] md:aspect-auto rounded-md ${
        loadedImg ? "opacity-0 w-0" : "opacity-100"
      } transition-all`}
    >
      <div
        className={`relative aspect-[1/2] md:aspect-auto rounded-md ${
          loadedImg ? "hidden" : "block"
        }`}
      >
        <img
          src={photo?.urls?.regular}
          onLoad={handleLoadingImage}
          alt={photo?.alt_description}
          className="w-auto h-full md:h-[90vh] object-cover rounded-md"
          style={{
            boxShadow: `0px 1px 20px 2px ${photo.color}`,
          }}
        />
        <div className="absolute bottom-0 text-sm md:text-base px-2 py-3 w-full text-center bg-zinc-900 font-semibold bg-opacity-50">
          {photo?.description || photo?.alt_description}
        </div>
        <div className="p-1 absolute top-0 text-[2rem] cursor-pointer bg-black bg-opacity-50 rounded-md m-3 shadow-md  hover:bg-opacity-75 transition-all duration-300">
          <a href={photo?.links?.download} download target="_blank">
            <FiDownload size={25} className="text-white hover:scale-110" />
          </a>
        </div>
        <LikeImage data={photo} id={imageid} />
      </div>
    </motion.div>
  );
}

export default ImageViewer;
