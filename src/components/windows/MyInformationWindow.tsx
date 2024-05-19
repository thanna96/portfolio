import React, { FC } from "react";
import { Modal } from "antd";

export const MyInformationWindow: FC<propTypes> = function ({
  visible,
  icon,
  close,
}: propTypes) {
  // TODO: Add dragable to large screens
  return (
    <>
      <Modal
        visible={visible}
        centered={true}
        closable={false}
        footer={null}
        bodyStyle={{
          padding: "0",
          border: "3px solid #C0C0C0",
          height: "500px",
        }}
        onCancel={close}
        mask={false}
      >
        <div
          className={"w-full h-full shadow-2xl"}
          style={{ border: "1px solid #C0C0C0", background: "#C0C0C0" }}
        >
          <div className={"h-6 bg-blue-700 text-center"}>
            <img
              className={"ml-1 mt-0.5 float-left"}
              src={icon}
              alt={"icon"}
              style={{ height: "20px" }}
            />
            <span className={"mx-auto font-black text-white"}>
              About This Person
            </span>
            <button
              onClick={close}
              className={
                "border px-1 float-right mr-0.5 mt-0.5 font-black border-blue-700 text-xs"
              }
              style={{ background: "#C0C0C0" }}
            >
              X
            </button>
          </div>
          <div
            className={"h-6 text-left border"}
            style={{ background: "#C0C0C0" }}
          >
            <span className={"font-black border-r-2 px-2"}>File</span>
            <span className={"font-black border-r-2 px-2"}>Edit</span>
            <span className={"font-black border-r-2 px-2"}>View</span>
          </div>
          <div
            className={
              "m-4 border border-black bg-white shadow-inner p-2 overflow-y-auto"
            }
            style={{ height: "375px" }}
          >
            <h1 className={"text-xl"}>Registered To:</h1>
            <p className={"ml-4 mb-0"}>Name:Thomas Hanna</p>
            <p className={"ml-4 mb-0"}>Job:Web Developer</p>
            <p className={"ml-4 mb-0"}>
              Age:{~~((Date.now() - +new Date("03/15/1996")) / 31557600000)}
            </p>
            <p className={"ml-4 mb-0"}>University:Rutgers NB 2020</p>
            <p className={"ml-4 mb-0"}>Degree:Computer Science</p>
            <p className={"ml-4 mb-0"}>Location:NYC Metro Area</p>
            <p className={"ml-4 mb-0"}>Email:THanna96@gmail.com</p>
            <p className={"ml-4 mb-0"}>About:</p>
            <p className={"ml-4 mb-0"}>
              My interest in programming in web development officially started
              around 2015, I was struggling to find a career path in my first
              year of college and had no direction, I passed my first semester
              and was considering leaving and pursuing something else. Then, in
              my second semester I took a Java programming class and realized
              something, programming ROCKS.
            </p>
            <p className={"ml-4 mb-0"}>
              Fast forward years later and I am currently working as a web
              developer and I could not be happier. I primarily do front end
              work with JS using React and Angular but I am also open to back
              end dev too!
            </p>
          </div>
          <div className={"absolute bottom-0 h-9 w-full"}>
            <button
              onClick={close}
              className={
                "border px-1 float-right w-20 h-8 mr-2 font-black border-black text-xs"
              }
              style={{ background: "#C0C0C0" }}
            >
              Cancel
            </button>
            <button
              onClick={close}
              className={
                "border px-1 float-right w-20 h-8 mr-1 font-black border-black text-xs"
              }
              style={{ background: "#C0C0C0" }}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MyInformationWindow;

export type propTypes = {
  icon: string;
  visible: boolean;
  close: () => void;
};
