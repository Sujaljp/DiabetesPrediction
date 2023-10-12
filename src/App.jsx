import React, { useState, useEffect } from "react";
import "./App.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function App() {
  const obj = {
    name: "",
    age: "",
    height: "",
    weight: "",
    glucose: "",
    blood: "",
    skin: "",
    insulin: "",
    preg: "",
    pedigree:""
  };
  const [form, setForm] = useState(obj);
  const [prediction, setPrediction] = useState(null);
  const [probability, setProbability] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState(null);

  const [open, setOpen] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send input data to Flask endpoint
    fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        setOpen(true)
        // Set the prediction as an integer
        setPrediction(data.prediction);
  
        // Set the probability as a string
        setProbability(data.probability);
  
        // Determine and set the message and message color based on prediction and probability
        if (data.prediction === 1) {
          if (data.probability >= 0.8) {
            setMessage("You have a high risk of diabetes. Please consult a healthcare professional.");
            setMessageColor("red");
          } else if (data.probability >= 0.6) {
            setMessage("You have a moderate risk of diabetes. Please consult a healthcare professional.");
            setMessageColor("orange");
          } else if (data.probability >= 0.5) {
            setMessage("You have a low risk of diabetes, but stay cautious and maintain a healthy lifestyle.");
            setMessageColor("green");
          } else {
            setMessage("You are healthy! Keep up the good work.");
            setMessageColor("green");
          }
        } else {
          if (data.probability >= 0.8) {
            setMessage("You are healthy! Keep up the good work.");
            setMessageColor("green");
          } else if (data.probability >= 0.6) {
            setMessage("You have a low risk of diabetes, but stay cautious and maintain a healthy lifestyle.");
            setMessageColor("green");
          } else if (data.probability >= 0.5) {
            setMessage("You dont have Diabetes but you're on the borderline. Take care of yourself!");
            setMessageColor("orange");
          } else {
            setMessage("You have a high risk of diabetes. Please consult a healthcare professional.");
            setMessageColor("red");
          }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  // Define pie chart data
  const [pieChartData, setPieChartData] = useState(null);

  // Update pie chart data when probability changes
  useEffect(() => {
    if (probability !== null) {

      const diabetesPercentage = Math.floor(probability * 100);
      const noDiabetesPercentage = 100 - diabetesPercentage ;
      const data = [
        { name: "Diabetes", value: diabetesPercentage},
        { name: "No Diabetes", value: noDiabetesPercentage },
      ];
      setPieChartData(data);
    }
  }, [probability]);

  return (
    <div className="">
      <div className={open? "modal absolute  h-screen w-screen flex justify-center items-center":"modal nope h-screen w-screen flex justify-center items-center"}>
       <div className="p-10 w-1/2 bg-white">
        <div className="close cursor-pointer" onClick={()=>{
          setOpen(false)
        }}>x</div>
        {prediction !== null && (
            <div className="mt-4 text-xl">
              <h2>
                Prediction: {prediction === 1 ? "Diabetes" : "No Diabetes"}
              </h2>
              {message && (
                <p style={{ color: messageColor }}>{message}</p>
              )}
            </div>
          )}

        {pieChartData && (
                    <div className="mt-4">
                      <PieChart width={400} height={400}>
                        <Pie
                          data={pieChartData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          label
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index === 0 ? "#FF6384" : "#36A2EB"}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </div>
        )}
       </div>
      </div>
    <div className="main px-32 py-16 h-screen bg-gray-300">
      
      <div className="container w-full h-full grid grid-cols-5 shadow-slate-600 shadow-sm">
        <div className="description p-8 col-span-2 bg-green-400 text-white">
          <h1 className="font-bold text-4xl">
            Predict the chances of Diabetes
          </h1>
          <h5 className="font-bold my-4 text-xl">Follow these steps</h5>
          <div className="steps flex flex-col gap-4">
            <h5 className="font-bold my-4 text-2xl flex gap-4">
              <div className="circle">
                <div className="line"></div>
              </div>{" "}
              Calculate the required data
            </h5>
            <h5 className="font-bold my-4 text-2xl flex gap-4">
              <div className="circle">
                <div className="line"></div>
              </div>
              Provide Input
            </h5>
            <h5 className="font-bold my-4 text-2xl flex gap-4">
              <div className="circle"></div> Wait for results
            </h5>
          </div>
        </div>
        <div className="form col-span-3 p-8 bg-white">
          <h1 className="font-bold text-4xl">Get Predictions</h1>
    
                      <form
            onSubmit={handleSubmit}
            className="mt-4 p-4 font-semibold text-lg grid grid-cols-2 gap-4 "
          >
            <div className="">
              <label htmlFor="name">Name</label>
              <input
                value={form.name}
                onChange={handleChange}
                type="text"
                name="name"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Timir"
              />
            </div>
            <div className="">
              <label htmlFor="age">Age</label>
              <input
                value={form.age}
                onChange={handleChange}
                type="text"
                name="age"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="43"
              />
            </div>
            <div className="">
              <label htmlFor="height">Height</label>
              <input
                value={form.height}
                onChange={handleChange}
                type="text"
                name="height"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="180 cm"
              />
            </div>
            <div className="">
              <label htmlFor="weight">Weight</label>
              <input
                value={form.weight}
                onChange={handleChange}
                type="text"
                name="weight"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="59 kg"
              />
            </div>
            <div className="">
              <label htmlFor="glucose">Glucose</label>
              <input
                value={form.glucose}
                onChange={handleChange}
                type="text"
                name="glucose"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="148"
              />
            </div>
            <div className="">
              <label htmlFor="blood">BloodPressure</label>
              <input
                value={form.blood}
                onChange={handleChange}
                type="text"
                name="blood"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="72"
              />
            </div>
            <div className="">
              <label htmlFor="skin">SkinThickness</label>
              <input
                value={form.skin}
                onChange={handleChange}
                type="text"
                name="skin"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="35"
              />
            </div>
            <div className="">
              <label htmlFor="insulin">Insulin</label>
              <input
                value={form.insulin}
                onChange={handleChange}
                type="text"
                name="insulin"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="94"
              />
            </div>
            <div className="">
              <label htmlFor="insulin">Diabetes Pedigree Function</label>
              <input
                value={form.pedigree}
                onChange={handleChange}
                type="text"
                name="pedigree"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="2.67"
              />
            </div>
            <div className="">
              <label htmlFor="preg">Pregnancies</label>
              <input
                value={form.preg}
                onChange={handleChange}
                type="text"
                name="preg"
                className="block rounded-md border-0 py-1.5 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="1"
              />
            </div>
            
            <hr className="col-span-2" />
            <div>
              <button className="bg-green-400 px-8 py-2 rounded-lg text-white hover:shadow-lg">
                Send
              </button>
            </div>
          </form>
          
          {/* Display prediction and message */}
          
          {/* Display pie chart */}
          
      
        </div>
      </div>
      
    </div>
    </div>
  );
  }

export default App;





