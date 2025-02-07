import "./App.css";
import { Slide, ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchResults from "./pages/SearchResults";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Home />,
            },
            {
               path: "/p/:asin",
               element: <ProductPage />,
            },
            {
               path: "/s/:query",
               element: <SearchResults />,
            },
            {
               path: "/checkout",
               element: <Checkout />,
            },
         ],
      },
      {
         path: "/signup",
         element: <Signup />,
      },
      {
         path: "/login",
         element: <Login />,
      },
      {
         path: "*",
         element: <>Not found!!</>,
      },
   ]);

   return (
      <Provider store={store}>
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            theme="light"
            transition={Slide}
         />
         <RouterProvider router={router} />
      </Provider>
   );
}

export default App;
