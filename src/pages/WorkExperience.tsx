import React, { FC } from "react";
import { Carousel } from "antd";

export const WorkExperience: FC = function () {
  return (
    <div style={{ minHeight: "50vh", marginBottom: "30px" }}>
      <Carousel>
        <div style={{ minHeight: "50vh" }}>
          <h3
            style={{
              height: "50vh",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            1
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "50vh",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            2
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "50vh",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            3
          </h3>
        </div>
        <div>
          <h3
            style={{
              height: "50vh",
              color: "#fff",
              lineHeight: "160px",
              textAlign: "center",
              background: "#364d79",
            }}
          >
            4
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default WorkExperience;
