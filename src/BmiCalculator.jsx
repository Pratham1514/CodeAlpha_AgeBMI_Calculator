import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a Healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center m-10 font-sans bg-slate-50 rounded-2xl shadow-xl md:p-10 p-5">
      <h2 className="md:text-[25px] text-[18px]  font-semibold mb-3">
        BMI (Body Mass Index) Calculator
      </h2>
      <p className="text-wrap m-3 text-center md:text-[15px] text-[12px]">
        Calculate your Body Mass Index (BMI) effortlessly and track your health
        with BMI Calculator.
      </p>

      <div className="w-full md:mt-7 m-3 flex md:flex-row flex-col md:gap-10 gap-3 items-center justify-evenly">
        <form onSubmit={calcBmi} className="flex flex-col justify-start p-3">
          <label className="md:text-[20px] text-[15px] font-medium mb-1">
            Weight (lbs)
          </label>
          <input
            type="number"
            required
            className="calendar-date rounded-md md:text-[15px] text-[12px] text-center md:py-2 py-1 border-2 border-slate-200 hover:border-blue-200 focus:outline-blue-400 mb-4"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label className="md:text-[20px] text-[15px] font-medium mb-1">
            Height (in)
          </label>
          <input
            type="number"
            required
            className="calendar-date rounded-md md:text-[15px] text-[12px] text-center md:py-2 py-1 border-2 border-slate-200 hover:border-blue-200 focus:outline-blue-400 mb-4"
            placeholder="Enter Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <div className="flex md:gap-3 gap-1">
            <button
              className="bg-violet-500 rounded-md md:px-5 px-3 py-2 md:text-[13px] text-[10px] font-semibold text-white text-center tracking-widest border-none shadow-md hover:bg-violet-500/90 transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-lg"
              type="submit"
            >
              Calcualte BMI
            </button>
            <button
              className="bg-violet-500 rounded-md md:px-5 px-3 py-2 md:text-[13px] text-[10px] font-semibold text-white text-center tracking-widest border-none shadow-md hover:bg-violet-500/90 transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-lg"
              type="submit"
              onClick={reload}
            >
              Reset
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center gap-5 bg-gray-100 rounded-md p-5 md:w-[250px] w-[150px] shadow-md">
          <h2 className="md:text-[20px] text-[15px] font-medium">
            Your BMI Is
          </h2>
          <h3 className="md:text-[30px] text-[25px] text-violet-500 font-extrabold tracking-wider">
            {bmi}
          </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
