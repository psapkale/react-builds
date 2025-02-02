import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Pagination from "./components/Pagination";
import Countdown from "./components/Countdown";
import Pagination2 from "./components/Pagination2";
import TrafficLights from "./components/TrafficLights";
import Timer from "./components/Timer";

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
               <Link to={"/traffic-lights"} className="underline">
                  Traffic Lights
               </Link>
               <Link to={"/timer"} className="underline">
                  Timer
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
      {
         path: "/traffic-lights",
         element: <TrafficLights />,
      },
      {
         path: "/timer",
         element: <Timer />,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
