import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./pages/Layout/Layout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import Uses from "./pages/Uses/Uses";
import loki from "./assets/images/Loki.jpg";
import ski from "./assets/images/ski.jpeg";
import hut from "./assets/images/hut.jpeg";
import ridge from "./assets/images/ridge.jpeg";
import desktop from "./assets/images/desktop.jpg";

function App() {
  const photos: Array<string> = [loki, ski, ridge, hut, desktop];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async () => {
            return photos;
          },
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "case-studies",
          element: <CaseStudies />,
        },
        {
          path: "uses",
          element: <Uses />,
        },
      ],
    },
  ]);
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
