import { useContext } from "react";
import { motion } from "framer-motion";
import { FcNext, FcPrevious } from "react-icons/fc";
import ImageDetailContext from "../../context/ImageDetailContext";

function NavigationButtons() {
  const { notFirstImg, notLastImg, handleImageChange ,loadedImg} = useContext(ImageDetailContext);

  return (
    <motion.div
    className={`justify-between w-full absolute top-1/2 md:bottom-1/2 md:top-auto ${
      loadedImg ? "hidden" : "flex"
    }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {notFirstImg ? (
        <button
          onClick={() => handleImageChange("prev")}
          className="bg-black bg-opacity-50 hover:bg-opacity-30 transition-opacity duration-800 rounded-full p-2"
        >
          <FcPrevious />
        </button>
      ) : <div></div>}
      {notLastImg && (
        <button
          onClick={() => handleImageChange("next")}
          className="bg-black bg-opacity-50 hover:bg-opacity-30 transition-all duration-800 rounded-full p-2"
        >
          <FcNext />
        </button>
      )}
    </motion.div>
  );
}

export default NavigationButtons;
