import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const BirthDate = new Date(birthdate);

    let age = today.getFullYear() - BirthDate.getFullYear();
    const monthDiff = today.getMonth() - BirthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < BirthDate.getDate())
    ) {
      age--;
    }
    setAge(age);
  };

  const resetCalculator = () => {
    setBirthdate("");
    setAge(0);
  };

  return (
    <div className="flex flex-col items-center justify-center m-10 font-sans bg-slate-50 rounded-2xl shadow-xl md:p-10 p-5">
      <h2 className="md:text-[25px] text-[18px]  font-semibold mb-3">
        Age Calculator
      </h2>
      <p className="text-wrap m-3 text-center md:text-[15px] text-[12px]">
        The Age Calculator can determine the age or interval between two dates.
        The calculated age will be displayed in years,
      </p>

      <div className="w-full md:mt-7 m-3 flex md:flex-row flex-col md:gap-10 gap-3 items-center justify-evenly">
        <div className="flex flex-col justify-start p-3">
          <h4 className="md:text-[20px] text-[15px] font-medium mb-3">
            Date of Birth
          </h4>
          <input
            type="date"
            className="calendar-date rounded-md md:text-[15px] text-[12px] text-center md:py-2 py-1 border-2 border-slate-200 hover:border-blue-200 focus:outline-blue-400 mb-3"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <div className="flex md:gap-3 gap-1">
            <button
              className="bg-violet-500 rounded-md md:px-5 px-3 py-2 md:text-[13px] text-[10px] font-semibold text-white text-center tracking-widest border-none shadow-md hover:bg-violet-500/90 transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-lg"
              onClick={calculateAge}
            >
              Calcualte Age
            </button>
            <button
              className="bg-violet-500 rounded-md md:px-5 px-3 py-2 md:text-[13px] text-[10px] font-semibold text-white text-center tracking-widest border-none shadow-md hover:bg-violet-500/90 transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-lg"
              onClick={resetCalculator}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 bg-gray-100 rounded-md p-5 md:w-[250px] w-[150px] shadow-md">
          <h2 className="md:text-[20px] text-[15px] font-medium">
            Your Age Is
          </h2>
          <h3 className="md:text-[30px] text-[25px] text-violet-500 font-extrabold tracking-wider">
            {age > 0 ? `${age}` : ""}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
