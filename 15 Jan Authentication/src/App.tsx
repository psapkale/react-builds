import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SigninModal from "./components/SigninModal";
import PrivateComponent from "./components/PrivateComponent";
import { Toaster } from "react-hot-toast";

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <LandingPage />,
   },
   {
      path: "/signin",
      element: <SigninModal />,
   },
   {
      path: "/protected-route",
      element: <PrivateComponent />,
   },
   {
      path: "*",
      element: <>Not Found</>,
   },
]);

function App() {
   return (
      <>
         <RouterProvider router={appRouter} />
         <Toaster position="top-center" />
      </>
   );
}

export default App;
