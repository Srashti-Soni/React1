
import { useState } from 'react'

function App() {
  const [color,setColor]= useState("olive")
  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}}>
<div className=' fixed flex flex-wrap justify-center bottom-12 
inset-x-0 px-2' >
  <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-2xl'>
    <button  onClick={()=>setColor("red")} className="outline-none  px-4 py-1 rounded-full bg-red-500 text-white" 
    // style={{backgroundColor:"red"}}
    >red</button>
    <button onClick={()=>setColor("green")} className="outline-none text-white px-4 py-1 rounded-full" 
    style={{backgroundColor:"green"}}>green</button>
    <button onClick={()=>setColor("blue")} className="outline-none text-white px-4 py-1 rounded-full" 
    style={{backgroundColor:"blue"}}>blue</button>
    <button onClick={()=>setColor("olive")} className="outline-none text-white px-4 py-1 rounded-full" 
    style={{backgroundColor:"olive"}}>olive</button>
    <button onClick={()=>setColor("black")} className="outline-none text-white px-4 py-1 rounded-full" 
    style={{backgroundColor:"black"}}> black</button>
    <button onClick={()=>setColor("yellow")} className="outline-none text-white px-4 py-1 rounded-full" 
    style={{backgroundColor:"yellow"}}>yellow</button>
    <button onClick={()=>setColor("brown")} className="outline-none text-white px-4 py-1 rounded-full" 
    style={{backgroundColor:"brown"}}>brown</button>
    </div>
</div>
    </div>
  )
}

export default App
