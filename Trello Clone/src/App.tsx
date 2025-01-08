import "./App.css";
import ContainerHolder from "./components/ContainerHolder";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TasksContainersProvider } from "./context/TasksContext";

function App() {
   return (
      <TasksContainersProvider>
         <Header />
         <ContainerHolder />
         <Footer />
      </TasksContainersProvider>
   );
}

export default App;
