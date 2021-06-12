import * as ReactDOM from "react-dom"
import {createContext, useContext, useEffect, useState} from "react"



function App() {
  const [n, setN] = useState(0)
  const onClick= ()=>{
    setN(i=>i+1)
  };
  const afterRender = useEffect
  afterRender(()=>{
    console.log("我第一次被渲染了")
  },[])
  return (
   <div>
     n:{n}
     <button onClick={onClick}>+1</button>
   </div>
   )
}



const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)