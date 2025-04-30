
import { useState,useCallback, useEffect,useRef } from 'react' // or './index.css' if you added global styles there

function App() {
  const [length,setlength]=useState(8)
  const [number,setnumber]=useState(false)
  const [charallowed,setcharacter]= useState(false)
  const [pass,setpass]=useState("")
  const passref=useRef(null)
//   useCallback: used to generate the password function once, unless length, number, or charallowed changes.

// useEffect: used to call the password generator function every time one of those values changes.
  const passwordgenerator= useCallback(()=>{
    let pas=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+="0123456789"
    }
    if(charallowed){
      str+="!@#$%^&*()_+=[]{};':\"\\|,.<>?/"
    }
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1 )
    
    pas+= str.charAt(char)}
    setpass(pas)
  },[length,number,charallowed,setpass])
  useEffect(()=>{passwordgenerator()
  },[length,number,charallowed,passwordgenerator])
    // passwordgenerator();
  const copypasstoclipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(pass)
  })
  // Part	What It Means
// window	Refers to the browser window (global object in the browser)
// navigator	A property of window that gives info about the user's browser
// clipboard	A property of navigator that gives access to the clipboard API
// writeText()	A method that writes text to the clipboard (copies it)
// pass	The string you want to copy (e.g. your generated password)
    return (
    <div className=' text-center w-full  max-w-md shadow-md 
    mx-auto rounded-lg px-4 py-4 my-8 bg-orange-200 '>
      <h1 className='text-grey-500 text-center my-3'>Password generator</h1>
   <div className='flex shadow rounded-lg overflow-hidden
   mb-4 bg-white'><input type='text'
    value={pass}
   className=" outline-none w-full  py-1 px-3 "
   placeholder='password' 
   readOnly
   ref={passref}
   />
   <button onClick={copypasstoclipboard}
   className='outline-none justify-right px-3
    py-1 bg-green-300'>copy</button></div>
    <div className='flex gap-x-2 '>
    <div className="flex items-center gap-x-1 text-small 
    flex-wrap text-green-800">
      <input 
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{ setlength(e.target.value)}
    }
      />
      <label>length: {length}</label>
      </div>
      <div className="flex items-center text-green-800 gap-x-1">
      <input 
      type='checkbox'
      defaultChecked={number}
      id="numberInput"
      onChange={()=>{ setnumber((prev)=>!prev)}}/>
      <label>number</label> </div>
      <div className="flex items-center text-green-800 gap-x-1">
      <input 
      type='checkbox'
      defaultChecked={charallowed}
      id="charInput"
      onChange={()=>{ setcharacter((prev)=>!prev)}}/>
      <label>character</label> </div>

     </div></div>
  )
}

export default App
