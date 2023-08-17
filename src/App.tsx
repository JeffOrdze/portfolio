import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./pages/Layout/Layout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import Uses from "./pages/Uses/Uses";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <Error />
        },
        {
          path: "about",
          element: <About />,
          errorElement: <Error />
        },
        {
          path: "case-studies",
          element: <CaseStudies />,
          errorElement: <Error />
        },
        {
          path: "uses",
          element: <Uses />,
          errorElement: <Error />
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
