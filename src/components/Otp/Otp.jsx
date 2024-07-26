import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Chai from "./Chai.png";
export const Otp = () => {
  let length = 4;
  let otp = "1234";
  const navigate = useNavigate();
  const [otpArray, setOtp] = useState(new Array(4).fill("")); //creats an array of length 4
  const [verify, setVerify] = useState(false);
  const [neutral, setNeutral] = useState(true);
  const buttonRef = useRef();
  const inputs = useRef([]);
  console.log(inputs.length);

  const handleChange = (event, index) => {
    const value = event.target.value;

    if (/^[0-9]$/.test(value) || value === "") {
      console.log(value, index);
      const oldArr = otpArray;
      oldArr[index] = value;

      setOtp(oldArr);
      console.log(otpArray);
    }

    if (index < length - 1) {
      inputs.current[index + 1].focus();
    }
    if (value === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  // Key Event
  const handleKeyDown = (event, index) => {
    console.log(event.key);
    if (event.key === "backspace") {
      event.current.value = "";
      const newOtp = [...otpArray];
      newOtp[index] = event.current.value;
      setOtp(newOtp);
      inputs[index - 1].focus();
    }
    if (event.key === "arrowright") {
      inputs[index + 1].focus();
    }
  };

  //Button Actions

  const verification = () => {
    setNeutral(false);
    if (otpArray.toString() === otp) {
      setVerify(true);
      setOtp([]);
    }
    setVerify(true);
  };

  return (
    <article className=" bg-blue-500 h-screen">
      {/* TODO: button ko component banana */}
      <button
        onClick={() => navigate("/")}
        className="p-3 mx-2 bg-orange-600 rounded-sm text-zinc-100 font-medium hover:bg-orange-400"
      >
        Back
      </button>

      <section className="flex justify-start items-center flex-col">
        <h1 className="text-[70px] text-white font-bold my-2">Chai aur Code</h1>
        <div
          className="
          bg-white
           w-[650px] h-[400px]
 px-[5%]
            
            rounded-xl
            flex justify-center items-center flex-col"
        >
          <div></div>
          <p className="text-[30px] font-semibold  ">
            Mobile Phone Verification
          </p>
          <p className="text-[20px] my-2 font-light text-slate-400 w-[585px] text-center">
            Enter the 4-digit verification code that was sent to your phone
            number.
          </p>
          <div>
            {otpArray.map((value, index) => {
              return (
                <>
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={inputs[index]}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)}
                    className={` w-10 border text-black text-[2.5rem] font-medium bgcolors min-h-[80px] min-w-[70px] m-2 rounded-lg text-center bg-blue-100
                 ${
                   neutral
                     ? "border-white"
                     : verify
                     ? "border-green-500"
                     : "border-red-600"
                 }
                 `}
                  ></input>
                </>
              );
            })}
          </div>
          <button
            type=""
            className={`w-[340px] ${
              neutral ? "bg-sky-950" : verify ? "bg-green-500" : "bg-red-600"
            } text-white text-lg p-3 rounded-lg my-5`}
            onClick={(e) => {
              verification(e);
            }}
            ref={buttonRef}
          >
            Verify Account
          </button>

          <p className=" text-slate-400">
            Didn’t receive code?{" "}
            <Link to="#" className=" text-blue-900 underline">
              Resend
            </Link>{" "}
          </p>
        </div>
      </section>
      <div className=" absolute  bottom-8 right-8">
        <Link to="https://chaicode.com/">
          <img src={Chai} className="w-[100px] rounded-md"></img>
        </Link>
      </div>
    </article>
  );
};
