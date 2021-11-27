import React, { FC } from "react";
import { Card, Col, Row } from "antd";

export const WorkExperience: FC = function () {
  return (
    <div className={"centered-container"} style={{ marginBottom: "30px" }}>
      <div className={"m-auto w-3/4"}>
        <Row>
          <Col xs={24} md={8}>
            <Card title="Programming Analyst" className={"w-11/12"}>
              <p style={{ fontWeight: 700 }}>InnCreTech</p>
              <p>Dates Employed: Sep 2020 – Present</p>
              <p>Employment Duration: 1 yr 3 months</p>
              <p>Location: Princeton, New Jersey, United States</p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Software Developer" className={"w-11/12"}>
              <p style={{ fontWeight: 700 }}>Vorsi</p>
              <p>Dates Employed: Jun 2019 - Aug 2019</p>
              <p>Employment Duration: 3 months</p>
              <p>Location: Hudson Valley, New York, United States</p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Computer Science Tutor" className={"w-11/12"}>
              <p style={{ fontWeight: 700 }}>Brookdale CC</p>
              <p>Dates Employed: Jan 2017 – Dec 2017</p>
              <p>Employment Duration: 1 yr</p>
              <p>Location: Lincroft, New Jersey, United States</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WorkExperience;
