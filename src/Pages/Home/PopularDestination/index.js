import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import fun from "../../../Images/fun.jpg";

import Kasol from "../../../Images/Kasol.jpg";
import Kashmir2 from "../../../Images/Kashmir2.jpg";
import LehLadhakPD from "../../../Images/LehLadhakPD.jpg";
import manali2 from "../../../Images/manali2.jpg";
import Sikkim2 from "../../../Images/Sikkim2.jpg";
import jaipur2 from "../../../Images/jaipur2.jpg";
import Valley2 from "../../../Images/Valley2.jpg";
import Srinagar2 from "../../../Images/Srinagar2.jpg";

import Safdarjung from "../../../Images/Safdarjung Tomb.jpg";
import Bangalore from "../../../Images/Gate of Palace in Bangalore .jpg";
import mussorrie from "../../../Images/mussorrie.jpg";

import "../../../Styles/PopularD.css";

const PopularDestination = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red", margin: "20px" }}>
        <u>Popular Destinations</u>
      </h1>

      <Container fluid="md">
        <div style={{ height: "500px" }} className="border border-white">
          <Row className="mt-4">
            <Col lg={6}>
              <div className="banner-card">
                <img
                  className="imgCssP"
                  src={Kasol}
                  alt=" "
                  width={"100%"}
                  height={"450px"}
                />
                <div className="banner-text">
                  <h2>The Kasol Trip</h2>
                  <a href="https://en.wikipedia.org/wiki/Kasol">Visit Here</a>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <Col>
                <div className="banner-card">
                  <img
                    className="imgCssP"
                    src={LehLadhakPD}
                    alt=" "
                    width={"100%"}
                    height={"213px"}
                  />
                  <div className="banner-text">
                    <h2>The Leh Ladakh</h2>
                    <a href="https://en.wikipedia.org/wiki/Leh#:~:text=It%20is%20the%20largest%20city,the%20Potala%20Palace%20in%20Tibet.">
                      Visit Here
                    </a>
                  </div>
                </div>
              </Col>

              <Row className="mt-4">
                <Col lg={6}>
                  <div className="banner-card">
                    <img
                      className="imgCssP"
                      src={Kashmir2}
                      alt=" "
                      width={"100%"}
                      height={"213px"}
                    />

                    <div className="banner-text">
                      <h2>Kashmir</h2>
                      <a href="https://en.wikipedia.org/wiki/Kashmir">
                        Visit Here
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="banner-card">
                    <img
                      className="imgCssP"
                      src={Safdarjung}
                      alt=" "
                      width={"100%"}
                      height={"213px"}
                    />
                    <div className="banner-text">
                      <h2>Safdarjung</h2>
                      <a href="https://en.wikipedia.org/wiki/Safdarjung_(Delhi)">
                        Visit Here
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div style={{ height: "300px" }} className="border border-white">
          <Row className="mt-4">
            <Col>
              <div className="banner-card">
                <img
                  className="imgCssP"
                  src={manali2}
                  alt=" "
                  width={"100%"}
                  height={"250px"}
                />
                <div className="banner-text">
                  <h2>Manali</h2>
                  <a href="https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh">
                    Visit Here
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="banner-card">
                <img
                  className="imgCssP"
                  src={fun}
                  alt=" "
                  width={"100%"}
                  height={"250px"}
                />
                <div className="banner-text">
                  <h2>The Leh Ladakh</h2>
                  <a href="https://en.wikipedia.org/wiki/Leh#:~:text=It%20is%20the%20largest%20city,the%20Potala%20Palace%20in%20Tibet.">
                    Visit Here
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner-card">
                <img
                  className="imgCssP"
                  src={jaipur2}
                  alt=" "
                  width={"100%"}
                  height={"250px"}
                />
                <div className="banner-text">
                  <h2>Jaipur</h2>
                  <a href="https://en.wikipedia.org/wiki/Jaipur">Visit Here</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div style={{ height: "300px" }} className="border border-white">
          <Row className="mt-4">
            <Col lg={6}>
              <div className="banner-card">
                <img
                  className="imgCssP"
                  src={Sikkim2}
                  alt=" "
                  width={"100%"}
                  height={"250px"}
                />

                <div className="banner-text">
                  <h2>Sikkim</h2>
                  <a href="https://en.wikipedia.org/wiki/Sikkim">Visit Here</a>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <Col>
                <div className="banner-card">
                  <img
                    className="imgCssP"
                    src={Bangalore}
                    alt=" "
                    width={"100%"}
                    height={"250px"}
                  />
                  <div className="banner-text">
                    <h2>The Leh Ladakh</h2>
                    <a href="https://en.wikipedia.org/wiki/Leh#:~:text=It%20is%20the%20largest%20city,the%20Potala%20Palace%20in%20Tibet.">
                      Visit Here
                    </a>{" "}
                  </div>
                </div>
              </Col>
            </Col>
          </Row>
        </div>

        <div style={{ height: "500px" }} className="border border-white">
          <Row className="mt-4">
            <Col lg={6}>
              <div className="banner-card">
                <img
                  className="imgCssP"
                  src={Srinagar2}
                  alt=" "
                  width={"100%"}
                  height={"450px"}
                />
                <div className="banner-text">
                  <h2>Srinagar</h2>
                  <a href="https://en.wikipedia.org/wiki/Srinagar">
                    Visit Here
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <Col>
                <div className="banner-card">
                  <img
                    className="imgCssP"
                    src={mussorrie}
                    alt=" "
                    width={"100%"}
                    height={"213px"}
                  />
                  <div className="banner-text">
                    <h2>The Queen Of Heels mussorrie</h2>
                    <a href="https://en.wikipedia.org/wiki/Mussoorie">
                      Visit Here
                    </a>
                  </div>
                </div>
              </Col>

              <Row className="mt-4">
                <Col lg={6}>
                  <div className="banner-card">
                    <img
                      className="imgCssP"
                      src={Kashmir2}
                      alt=" "
                      width={"100%"}
                      height={"213px"}
                    />
                    <div className="banner-text">
                      <h2>Kashmir</h2>
                      <a href="https://en.wikipedia.org/wiki/Kashmir">
                        Visit Here
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="banner-card">
                    <img
                      className="imgCssP"
                      src={Valley2}
                      alt=" "
                      width={"100%"}
                      height={"213px"}
                    />
                    <div className="banner-text">
                      <h2>Valley</h2>
                      <a href="https://en.wikipedia.org/wiki/Valley">
                        Visit Here
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default PopularDestination;
