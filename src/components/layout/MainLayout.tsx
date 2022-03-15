import React, { FC, useEffect, useState } from "react";
import { Desktop } from "../../pages/Desktop";
import { WindowBootUp } from "../../pages/WindowBootUp";

export const MainLayout: FC = function () {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="min-h-screen bg-black">
      <div className={"centered-container h-screen"}>
        <div
          className={"w-full h-90 lg:w-3/4 lg:h-3/4 m-auto relative"}
          style={{ background: "#3A6EA5" }}
        >
          {loading ? <WindowBootUp /> : <Desktop />}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
