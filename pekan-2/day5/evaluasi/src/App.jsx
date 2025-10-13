import LiftingStateUp from "./components/LiftingStateUp";
import PropDrilling from "./components/PropDrilling";
import SiblingStateSharing from "./components/SiblingStateSharing";
import ThemeContextComponent from "./components/ThemeContext";
import UseReducerCounter from "./components/UseReducerCounter";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <div>
      <h1 style={{ textAlign: 'center' }}>Evaluasi Pekan 2 Day 5</h1>    
      <LiftingStateUp />
      <PropDrilling />
      <SiblingStateSharing />
      <UseReducerCounter />
      <ThemeContextComponent />
    </div>
    </ThemeProvider>
  )
}
export default App;
