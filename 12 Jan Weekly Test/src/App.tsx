import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserInfo from "./components/UserInfo";
import UsersList from "./components/UsersList";
import { UsersProvider } from "./context/UsersContext";
import { Toaster } from "react-hot-toast";

function App() {
   const appRouter = createBrowserRouter([
      {
         path: "/",
         element: <Home />,
         children: [
            {
               path: "/",
               element: <UsersList />,
            },
            {
               path: "/user",
               element: <UserInfo />,
            },
         ],
      },
      {
         path: "*",
         element: <>Not found</>,
      },
   ]);

   return (
      <UsersProvider>
         <RouterProvider router={appRouter} />
         <Toaster position="bottom-center" />
      </UsersProvider>
   );
}

export default App;
