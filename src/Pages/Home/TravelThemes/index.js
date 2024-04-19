import React from "react";

import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";

import kerla from "../../../Images/kerla.jpg";
import CollegeTour from "../../../Images/CollegeTour.jpg";
import FamilyTour from "../../../Images/FamilyTour.jpg";
import MotorBikingTour from "../../../Images/MotorBikingTour.jpg";
import FrndsTour from "../../../Images/FrndsTour.jpg";
import "../../../Styles/Travel.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TravelThemes = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "red", margin: "20px" }}>
        <u>Travel Themes</u>
      </h1>
      <div className="SpaceCss">
        <Carousel responsive={responsive}>
          <Card style={{ width: "20rem", height: "18rem" }}>
            <Card.Img
              className="imgCss"
              variant="top"
              height="100%"
              src={CollegeTour}
            />
            <h2 className="txtCss">College Tour</h2>
          </Card>
          <Card style={{ width: "20rem", height: "18rem" }}>
            {" "}
            <Card.Img
              className="imgCss"
              variant="top"
              height="100%"
              src={FamilyTour}
            />
            <h2 className="txtCss">Family Tour</h2>
          </Card>
          <Card style={{ width: "20rem", height: "18rem" }}>
            {" "}
            <Card.Img
              className="imgCss"
              variant="top"
              height="100%"
              src={MotorBikingTour}
            />
            <h2 className="txtCss">Motor Biking Tour</h2>
          </Card>
          <Card style={{ width: "20rem", height: "18rem" }}>
            {" "}
            <Card.Img
              className="imgCss"
              variant="top"
              height="100%"
              src={FrndsTour}
            />
            <h2 className="txtCss">Friends Tour</h2>
          </Card>
        </Carousel>
      </div>
    </>
  );
};

export default TravelThemes;
