import Navbar from "./Components/Navbar";
import ContextProvider from "@/context/Context.jsx";
import Notes from "./Components/Notes";
import AddBtn from "./Components/AddBtn";
import Modal from "./Components/Modal";
function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Notes />
      <AddBtn/>
      <Modal/>
    </ContextProvider>
  );
}
export default App;
