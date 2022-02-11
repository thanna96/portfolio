import React, { FC, useEffect, useState } from "react";
import logo from "../files/icons/windows-logo.jpeg";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const WindowBootUp: FC = function () {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => setCount(count + i), i * 500);
    }
  }, []);
  return (
    <div className={"h-full relative"}>
      <div className={"centered-container h-full"}>
        <div
          className={`bg-white relative border-black border-2 text-center h-3/4 md:h-4/6 m-auto w-3/4`}
        >
          <div
            style={{
              background: `url(${logo})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "calc(50% - 40px)",
            }}
            className={"md:bg-50 bg-100 h-full relative"}
          >
            <h1 className={"text-xl text-center md:text-left font-black p-3"}>
              Thomas Hanna
              <br />
              Software Developer
            </h1>
            {/*<img*/}
            {/*  className={"mx-auto h-2/6 md:h-2/5"}*/}
            {/*  src={logo}*/}
            {/*  alt={"windows logo"}*/}
            {/*/>*/}
            {/*BETA*/}
            <h1
              style={{ bottom: "80px" }}
              className={
                "absolute w-full text-xl text-center md:text-right font-black p-3"
              }
            >
              Welcome to my website!
            </h1>
            <div
              className={
                "w-full m-0 absolute bottom-0 border-t-8 border-blue-800"
              }
              style={{ background: "#C0C0C0", height: "80px" }}
            >
              <div className={"mx-auto text-center mt-2"}>Starting Up...</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={"w-full m-0 absolute bottom-0 border-t-8 border-blue-800"}
        style={{ background: "#C0C0C0", height: "80px" }}
      >
        <div className={"mx-auto text-center mt-2 relative"}>
          Starting Up...
          <div
            style={{ width: "200px" }}
            className={
              "align-bottom overflow-hidden text-left border border-gray-400 shadow-inner inline-block ml-2"
            }
          >
            <div className={"relative h-6"}>
              {numbers.map((i, index) => {
                return (
                  i < count && (
                    <div
                      key={index}
                      style={{ width: "20px" }}
                      className={"bg-blue-400 h-6 mr-0.5 relative inline-block"}
                    />
                  )
                );
              })}
            </div>
          </div>
          <p>Copyright &copy; 1996-2022 Thomas Hanna</p>
        </div>
      </div>
    </div>
  );
};

export default WindowBootUp;
