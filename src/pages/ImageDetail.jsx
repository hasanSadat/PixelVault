import { ImageDetailProvider } from "../context/ImageDetailContext";
import ImageDetailContainer from "../components/ImageDetail/ImageDetailContainer";

function ImageDetail() {
  return (
    <ImageDetailProvider>
      <ImageDetailContainer />
    </ImageDetailProvider>
  );
}

export default ImageDetail;
