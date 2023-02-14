import React, {useState} from "react";
import { FeaturesData } from "../DummyData/FeaturesData";
import saving from "../../assets/images/saving.png";

function Features() {
  const [loan, setLoan] = useState(10000);
  const [select, setSelect] = useState();
  const calCulateLoan = (e) =>{
    setLoan(e.target.value);
  }
  return (
    <section className=" mt-20 mb-40 md:mt-40">
      <h1 className=" text-3xl text-center font-bold md:text-center md:text-4xl ">
        Apply with just <span className="text-blue">3</span> steps
      </h1>
      <div className="container flex flex-col px-30 md:px-40 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-2 md:w-1/2 md:space-y-5 px-10">
          {FeaturesData.map((texts, index) => (
            <div key={index} className="md:space-y-5 space-y-3">
              <div className="rounded-l-full bg-purple-200 md:space-y-4 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-purple-100 font-bold text-2xl md:text-3xl">
                    {texts.stepNmber}
                  </div>
                  <h3 className="text-sm font-bold md:mb-4 md:hidden">
                    {texts.steps}
                  </h3>
                  <div>
                    <h3 className="hidden text-lg font-bold  md:block">
                      {texts.steps}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-textGray text-center md:text-left">
                {texts.text}{" "}
                <span className="hidden md:block">{texts.moreText}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 w-90 shadow-2xl pt-3 p-10 md:p-9 space-y-2 md:pt-5">
          <div className="max-w-xl">
            <h3 className="text-center font-bold text-2xl md:text-3xl">
              Get a convenient loan of up to ₦1 million today
            </h3>
            <hr className="mt-5 mb-5"/>
            <div className="flex-col flex md:flex-row space-y-12 md:space-y-7 md:block justify-center ">
            <select id="" className="feature-form form-select text-2xl rounded-2xl bg-gray-200 font-bold border-gray-300 outline-none">
            <option>Self Employed</option>
            <option>Student</option>
            </select>
            <input type="text" onChange={calCulateLoan} value={loan} placeholder="What is your monthly revenue?" className="feature-form form-i text-2xl rounded-2xl font-bold bg-gray-200 border-gray-300 outline-none"/>

            <p className="text-2xl md:text-2xl text-red text-center">You can get a loan upto:</p>
            <p className='text-2xl text-center font-bold'>{Number(loan) === 0 || Number(loan.length) > 10 ? '' : `# ${loan * 3}`}</p>

            <button className="feature-form text-2xl bg-blue text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col-reverse justify-center items-center md:items-start md:justify-between px-30 mx-auto mt-20 space-y-12 md:space-y-0 md:flex-row md:px-40 md:mt-40">
        <div className="flex flex-col space-y-2 mt-3 px-10 md:px-0 md:w-1/2 md:space-y-3">
          <h3 className="max-w-md text-2xl text-center font-bold md:text-left md:text-3xl">
            Start saving to <span className="text-blue">PalmLoan</span> with
            just few clicks
          </h3>
          <p className="max-w-sm text-textGray text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad
            quasi, sunt nulla placeat accusantium quam laborum cupiditate ex
            distinctio, necessitatibus corporis pariatur minima quaerat dolore
            ipsum ratione saepe? Voluptates. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt atque, sunt pariatur itaque
            quis hic beatae aut perferendis a repellat, quibusdam ex veniam
            provident delectus aliquid quasi excepturi accusantium enim!
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="p-3 px-10 font-medium mt-10 pt-2 text-white bg-purple-100 rounded-full baseline ">
              Start saving
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={saving} className="md:w-90 w-80" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Features;
