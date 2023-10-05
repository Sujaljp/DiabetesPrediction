import { useState } from 'react';
import './App.css'

function App() {
  const obj = {
    name:"",age:"",height:"",weight:"",glucose:"",blood:"",skin:"",insulin:"",preg:""
  }
  const [form, setForm] = useState(obj)
  // console.log(art);
  const handleChange =(e)=>{
    setForm((prev)=> {
      return {...prev, [e.target.name]:e.target.value}})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(art);
    return ""
  }
  // console.log(form);
 
  return (
    <div className='main px-32 py-16 h-screen w-screen bg-gray-300'>
      <div className="container w-full h-full grid grid-cols-5 shadow-slate-600 shadow-sm">
        <div className="description p-8 col-span-2 bg-green-400 text-white">
          <h1 className='font-bold text-4xl'>Predict the chances of Diabetes</h1>
          <h5 className='font-bold my-4 text-xl'>Follow this steps</h5>
          <div className="steps flex flex-col gap-4">
            <h5 className='font-bold my-4 text-2xl flex gap-4'><div className="circle"><div className="line"></div></div> Calculate the required data</h5>
            <h5 className='font-bold my-4 text-2xl flex gap-4'><div className="circle"><div className="line"></div></div>Provide Input</h5>
            <h5 className='font-bold my-4 text-2xl flex gap-4'><div className="circle"></div> Wait for results</h5>    
          </div>
        </div>
        <div className="form col-span-3 p-8 bg-white">
        <h1 className='font-bold text-4xl'>Get Predictions</h1>
        <form onSubmit={handleSubmit} className='mt-4 p-4 font-semibold text-lg grid grid-cols-2 gap-4 '>
          <div className="">
            <label htmlFor="name">Name</label>
            <input value={form.name} onChange={handleChange} type="text" name="name" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Timir"/>
          </div>
          <div className="">
            <label htmlFor="age">Age</label>
            <input value={form.age} onChange={handleChange} type="text" name="age" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="43"/>
          </div>
          <div className="">
            <label htmlFor="height">Height</label>
            <input value={form.height} onChange={handleChange} type="text" name="height" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="180 cm"/>
          </div>
          <div className="">
            <label htmlFor="weight">Weight</label>
            <input value={form.weight} onChange={handleChange} type="text" name="weight" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="59 kg"/>
          </div>
          <div className="">
            <label htmlFor="glucose">Glucose</label>
            <input value={form.glucose} onChange={handleChange} type="text" name="glucose" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="148"/>
          </div>
          <div className="">
            <label htmlFor="blood">BloodPressure</label>
            <input value={form.blood} onChange={handleChange} type="text" name="blood" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="72"/>
          </div>
          <div className="">
            <label htmlFor="skin">SkinThickness</label>
            <input value={form.skin} onChange={handleChange} type="text" name="skin" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="35"/>
          </div>
          <div className="">
            <label htmlFor="insulin">Insulin</label>
            <input value={form.insulin} onChange={handleChange} type="text" name="insulin" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="94"/>
          </div>
          <div className="">
            <label htmlFor="preg">Pregnancies</label>
            <input value={form.preg} onChange={handleChange} type="text" name="preg" className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="1"/>
          </div>
          <hr className='col-span-2'/>
          <div>
          <button className='bg-green-400 px-8 py-2 rounded-lg text-white hover:shadow-lg'>Send</button>
          </div>

        </form>

          
        </div>
      </div>   
    </div>
  )
}

export default App
 
const art = `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$**$$$$$$$$$**$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$"   ^$$$$$$F    *$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$     z$$$$$$L    ^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$    e$$$$$$$$$e  J$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$eee$$$$$$$$$$$$$e$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$b$$$$$$$$$$$$$$$$$$*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$)$$$$P"e^$$$F$r*$$$$F"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$d$$$$  "z$$$$"  $$$$%  $3$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$*"""*$$$  .$$$$$$ z$$$*   ^$e*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$"     *$$ee$$$$$$$$$$*"     $$$C$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$.      "***$$"*"$$""        $$$$e*$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$b          "$b.$$"          $$$$$b"$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$c.         """            $$$$$$$^$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$e..                     $$$$$$$$^$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$eeee..            J$$$$$$$$b"$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$r          z$$$$$$$$$$r$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"         z$$$$$**$$$$$^$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$*"          z$$$P"   ^*$$$ $$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$*"           .d$$$$       $$$ $$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$"           .e$$$$$F       3$$ $$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$.         .d$$$$$$$         $PJ$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$eeeeeeed$*""""**""         $$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                  $d$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$.                 $$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$e.              d$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$eeeeeee$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Gilo94'$$$$
`