import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import ImageDetail from "./pages/ImageDetail";
import AppLayout from "./layout/AppLayout";
import SearchImage from "./pages/SearchImage";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import { GalleryContextProvider } from "./context/galleryContext";
import "./i18n.js";
import useIsRTL from "./hook/useIsRTL.js";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/search/:SearchQuery",
        element: <SearchImage />,
      },
      {
        path: "/search/:SearchQuery/:imageid",
        element: <ImageDetail />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/explore/:imageid",
        element: <ImageDetail />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/favorite/:imageid",
        element: <ImageDetail />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div dir={useIsRTL() ? "rtl" : "ltr"}>
      <GalleryContextProvider>
        <RouterProvider router={router} />
      </GalleryContextProvider>
    </div>
  );
}

export default App;
