import ShowModal from "./components/ShowModul";
import HandleMouse from "./components/HandleMouse";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-600 via-blue-500 to-cyan-400 text-white">
      <ShowModal />
      <HandleMouse />
    </div>
  );
}

export default App;
