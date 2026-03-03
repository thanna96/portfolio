import { Modal } from "antd";
import React, { FC } from "react";

export const ExplorerWindow: FC<propTypes> = function ({
  visible,
  icon,
  close,
}: propTypes) {
  // TODO: Add dragable to large screens
  return (
    <>
      <Modal
        open={visible}
        centered
        closable={false}
        footer={null}
        onCancel={close}
        mask={false}
        styles={{
          container: { padding: 0, border: "3px solid #C0C0C0" },
          body: { padding: 0, height: 500 },
        }}
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
              Internet Explorer
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
            <span className={"font-black border-r-2 px-2"}>History</span>
            <span className={"font-black border-r-2 px-2"}>View</span>
            <span className={"font-black border-r-2 px-2"}>Bookmarks</span>
          </div>
          <div
            className={"h-6 text-left border inline-flex w-full"}
            style={{ background: "#C0C0C0" }}
          >
            <span className={"font-black border-r-2 px-2"}>Address:</span>
            <div className={"bg-white shadow-inner w-full"}>
              https://www.spacejam.com/1996/
            </div>
            <span className={"font-black border-r-2 px-2"}>GO</span>
          </div>
          <div
            className={
              "m-4 border border-black bg-white shadow-inner p-2 overflow-y-auto"
            }
            style={{ height: "400px" }}
          >
            <div style={{ width: "100%", height: "100vh" }}>
              <iframe
                src="https://www.spacejam.com/1996/"
                title="External Website"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="fullscreen"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExplorerWindow;

export type propTypes = {
  icon: string;
  visible: boolean;
  close: () => void;
};
