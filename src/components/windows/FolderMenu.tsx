import React, { FC } from "react";
import { Modal } from "antd";
import folderIcon from "../../files/icons/Windows 2000 Closed Folder-6.png";
import removableDriveIcon from "../../files/icons/Windows 2000 Removable Drive-2.png";
import { DesktopIconGroup } from "../DesktopIconGroup";

export const FolderMenu: FC<propTypes> = function ({
  visible,
  close,
  title,
  icons,
}: propTypes) {
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
          height: "400px",
        }}
        mask={false}
      >
        <div
          className={"w-full h-full shadow-2xl"}
          style={{ border: "1px solid #C0C0C0", background: "#C0C0C0" }}
        >
          <div className={"h-6 bg-blue-700"}>
            <img
              className={"ml-1 mt-0.5 float-left"}
              src={folderIcon}
              alt={"icon"}
              style={{ height: "20px" }}
            />
            <span className={"mx-auto font-black text-white ml-2"}>
              {title}
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
            className={"h-6 text-left border flex inline w-full"}
            style={{ background: "#C0C0C0" }}
          >
            <span className={"font-black border-r-2 px-2"}>Address:</span>
            <div className={"bg-white shadow-inner w-full"}>
              <img
                className={"ml-1 float-left"}
                src={removableDriveIcon}
                alt={"icon"}
                style={{ height: "20px" }}
              />{" "}
              <span className={"ml-2"}>C: \ {title} \</span>
            </div>
          </div>
          <div
            className={
              "m-4 border border-black bg-white shadow-inner p-2 overflow-y-auto"
            }
            style={{ height: "275px" }}
          >
            <DesktopIconGroup icons={icons} isFolder={true} />
          </div>
          <div
            className={"absolute bottom-2 h-4 left-0 w-full"}
            style={{ borderTop: "1px solid" }}
          >
            <div className={"h-6 text-left "} style={{ background: "#C0C0C0" }}>
              <span className={"font-black border-r-2 px-2"}>20 Objects</span>
              <span className={"font-black border-r-2 px-2"}>2.44MB</span>
              <span className={"font-black border-l-2 px-2 float-right"}>
                <img
                  className={"ml-1 inline-block"}
                  src={folderIcon}
                  alt={"icon"}
                  style={{ height: "20px" }}
                />
                <span className={"mx-auto font-black ml-2"}>{title}</span>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export type propTypes = {
  visible: boolean;
  title: string;
  close: () => void;
  icons: Array<{ text: string; image: string; onClick: () => void }>;
};
