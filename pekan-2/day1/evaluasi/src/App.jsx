import EventHandler from './components/eventHandler'
import SyntheticEvent from './components/SyntheticEvent'
import Control from './components/control';
import Uncontrol from './components/uncontrol';
import RegistrationForm from './components/RegistrationForm';
import './App.css'

function App() {
  return (
    <div>
    <EventHandler/>
    <br />
    <SyntheticEvent/>
    <br />
    <Control/>
    <br />
    <Uncontrol/>
    <br />
    <RegistrationForm/>
    </div>
  )
}
export default App;