import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Pagination from "./components/Pagination";
import Countdown from "./components/Countdown";
import Pagination2 from "./components/Pagination2";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: (
            <div className="h-screen w-full flex items-center justify-center flex-col">
               <Link to={"/pagination"} className="underline">
                  Pagination
               </Link>
               <Link to={"/countdown"} className="underline">
                  Countdown
               </Link>
               <Link to={"/pagination2"} className="underline">
                  Pagination2
               </Link>
            </div>
         ),
      },
      {
         path: "/pagination",
         element: <Pagination />,
      },
      {
         path: "/countdown",
         element: <Countdown />,
      },
      {
         path: "/pagination2",
         element: <Pagination2 />,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
