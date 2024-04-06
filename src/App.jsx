import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState()
  const [addNumber, setAddumber] = useState(false)
  const [addCharacters, setAddcharacters] = useState(false)
  const [password, setPassword] = useState("")

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


  if(addNumber) str += "1234567890";
  if(addCharacters) str += "+-@#!$&*^<>";

  for (let i = 0 ; i < length; i++) {
    let generatPass = Math.floor(Math.random()*str.length + 1)
    pass += str.charAt(generatPass)
  }
  setPassword(pass)

},[length,addNumber,addCharacters,setPassword])

useEffect(() => {
  passwordGenerator()

},[length,addNumber,addCharacters,passwordGenerator])

  return (
    <>
   
      <div className='flex flex-col min-h-screen justify-center items-center w-full h-screen bg-slate-700 text-red    p-5'>
        <div className='flex flex-col justify-center items-center bg-slate-600 rounded-md px-4 py-2'>
        <div className='w-full'>
          <input className='rounded-s-md p-3 w-10/12' 
          type="text"
          value={password}
          placeholder='Password'
          readOnly
           />
          <button className='bg-blue-500 rounded-e-md p-3 text-white'>Copy</button>
        </div>
        <div className='flex flex-wrap gap-2 text-orange-500 my-2 font-bold'>
          <input className='cursor-pointer w-auto' 
          type="range"
          value ={length}
          min={6}
          max={20}
          onChange={(e) =>{
                setLength(e.target.value)
              }}
           />
           <label htmlFor="numberInput" >Length({length})</label>

          <input className='rounded-s-md ' 
          type="checkbox"
          onChange={() =>{
                setAddumber(true)
            }}
           />
          <label htmlFor="numberInput">Number</label>

          <input className='rounded-s-md'
           type="checkbox"
           onChange={() =>{
                setAddcharacters(true)
              }}
            />
          <label htmlFor="characterInput">Charaters</label>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default App
