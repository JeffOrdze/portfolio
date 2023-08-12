import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
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
  return <RouterProvider router={router} />;
}

export default App;
