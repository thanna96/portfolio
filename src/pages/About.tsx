import React, { FC } from "react";
import { Card, Col, Divider, Row } from "antd";
import profilePicture from "../files/images/profile_picture.jpg";

const aboutInfo = [
  {
    title: "Current Employer",
    description: "Inncretech",
  },
  {
    title: "Title",
    description: "Programmer",
  },
  {
    title: "Age",
    description: ~~((Date.now() - +new Date("03/15/1996")) / 31557600000),
  },
  {
    title: "University",
    description: "Rutgers NB 2020",
  },
  {
    title: "Degree",
    description: "Computer Science",
  },
  {
    title: "Location",
    description: "NYC Metro Area",
  },
  {
    title: "Email",
    description: "THanna96@gmail.com",
  },
];
export const About: FC = function () {
  return (
    <div className={"centered-container"}>
      <div className={"text-center m-auto"}>
        <Card
          style={{ width: 950 }}
          bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <div>
            <ul className="ui">
              <li className="close" />
              <li className="min" />
              <li className="max" />
            </ul>
            <p className={"my-2 font-bold"}>About Me</p>
          </div>
          <Divider orientation="left" style={{ marginTop: 0 }} />
          <Row>
            <Col span={6}>
              <div className={"mb-3"}>
                <img alt="my face" width={250} src={profilePicture} />
              </div>
              <div>
                {aboutInfo.map((item) => (
                  <div key={item.title} style={{ textAlign: "left" }}>
                    <span style={{ fontWeight: 700, marginRight: "5px" }}>
                      {item.title}:
                    </span>
                    {item.description}
                  </div>
                ))}
              </div>
            </Col>
            <Col span={2}> </Col>
            <Col span={15}>
              <h2 className={"text-2xl"}>Thomas Hanna</h2>
              <div className={"centered-container"}>
                <div className={"m-auto"}>
                  <p>
                    Growing up in a small rural town in New Jersey, I learned a
                    lot about farming and taking care of animals. My parents and
                    all three of my siblings have careers in law, however, I
                    decided to pursue a different path. Due to my natural
                    inclination toward mathematics and the like, I decided to
                    study computer science and mathematics. Many of my skills
                    are self-taught, however the professors and resources
                    available to me at Rutgers University have been highly
                    beneficial in my progression as a software developer. Every
                    project assigned to me over these past four years has been
                    challenging yet highly enjoyable, so I am sure I made the
                    right choice in selecting my career.
                  </p>
                  <p>
                    While I spend most of my time doing schoolwork and
                    programming new projects, I also have other interests and
                    hobbies I enjoy. I love sports- whether I am watching or
                    playing. I am in a fantasy football league with my friends
                    from my hometown, and I also play basketball with them when
                    I have time on weekends. I love to play video games, read,
                    and bake, and I am a big film buff. Programming has brought
                    me so many hours of frustration and so many hours of joy.
                    There is no better feeling than completing a project that I
                    spent days researching and programming for. I am a Rutgers
                    2020 graduate , and I am currently searching for a job in
                    software development.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default About;
