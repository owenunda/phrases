import { useState } from 'react'
import phrases from "./assets/component/phrases.json"
import './App.css'
import QuoteBOx from "./assets/component/QuoteBox"
import colors from "./assets/component/colors.json"
function App() {

  console.log(phrases);
const [index, setIndex] = useState(0)

const phraseChange = () =>{
  setIndex(Math.floor(Math.random() * phrases.length))
}


const ramdonColor = Math.floor(Math.random()* colors.length)


  return (
    <div className="App" style={{background: colors[ramdonColor]}}>
      <QuoteBOx ramdonColor={ramdonColor} colors = {colors} phrases={phrases} condition={phraseChange} index={index} />
    </div>
  )
}

export default App
