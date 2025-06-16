
import './App.css'

import Counter from "./components/Counter"
import Toggle from './components/Toggle'
import SimpleCounter from './components/SimpleCounter'
import ColorInput from './components/ColorInput'
import ColorPicker from './components/ColorPicker'
import ToggleSwitch from './components/ToggleSwitch'

function App() {
  return (
    <>
     <h1>React State</h1>
     <Counter/>
     <Toggle/>
     <SimpleCounter/>
     <ColorPicker/>
     <ToggleSwitch/>
    </>
  )
}

export default App
