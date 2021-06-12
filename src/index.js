import * as ReactDOM from "react-dom"
import {createContext, useContext, useEffect, useState} from "react"

function App() {
  const [n, setN] = useState(0)
  const onClick= ()=>{
    setN(i=>i+1)
  };

  useEffect(()=>{
    console.log("我第一次被渲染了")
  },[])
  useEffect(()=>{
    console.log("n变了我就执行")
  },[n])
  useEffect(()=>{
    console.log("任何东西变化了我都执行")
  })
  return (
   <div>
     n:{n}
     <button onClick={onClick}>+1</button>
   </div>
   )
}



const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)