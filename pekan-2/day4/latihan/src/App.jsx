import FetchDataComponent from "./components/fetchData";
import AxiosDataComponent from "./components/axios";
import AbortFetchComponent from "./components/abortFetchComponent";
import DataManipulated from "./components/dataManipulasi";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8 p-4">
      <FetchDataComponent />
      <AxiosDataComponent />
      <AbortFetchComponent />
      <DataManipulated />
    </div>
  )
}
export default App;