import React, { FC } from "react";
import { Card, Col, Row } from "antd";

export const Projects: FC = function () {
  return (
    <div className={"centered-container"} style={{ marginBottom: "30px" }}>
      <div className={"m-auto w-3/4"}>
        <Row>
          <Col xs={24} md={8}>
            <Card title="Sew Honey Store" className={"w-11/12"}>
              <p style={{ fontWeight: 700 }}>Ecommerce Site</p>
              <p>Language: ReactJS, HTML, CSS</p>
              <p>Technologies: AWS, DynamoDB, Netlify, S3, Paypal, Bootstrap</p>
              <p>About:</p>
              <p>
                I created a web store for my friends swimwear company to help
                her get online sales and grow her business.
              </p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="Term Grid" className={"w-11/12"}>
              <p style={{ fontWeight: 700 }}>CRM Software</p>
              <p>Language: AngularJS, HTML, CSS</p>
              <p>About:</p>
              <p>
                Worked on the UI for this CRM with a team then eventually took
                the lead role. The software facilitates the process for large
                companies to buy subsidiaries. The software has had billion
                dollar transactions and is being used by customers every day.
              </p>
              <p>Website: Termgrid.com</p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title="React Term Grid" className={"w-11/12"}>
              <p style={{ fontWeight: 700 }}>CRM Software React Migration</p>
              <p>Language: ReactJS, HTML, CSS, Typescript</p>
              <p>Technologies: AntDesign, Tailwind</p>
              <p>About:</p>
              <p>
                Managed and worked on a team to convert the Termgrid software to
                React with Typescript from AngularJS. I helped guide my team to
                reach deadlines and create a better version of Termgrid. We re
                created each page and the application is now faster and the
                design is cleaner.
              </p>
              <p>Website: Termgrid.com</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
