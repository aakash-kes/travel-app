import React from "react";

import { useState } from "react";
// import Carousel from 'react-bootstrap/Carousel'
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// card
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Bunjee from "../../../Images/Upcoming ctivites/Bunjee.jpeg";

import camelWalk from "../../../Images/Upcoming ctivites/camelWalk.jpg";

import Camping from "../../../Images/Upcoming ctivites/Camping.jpg";
import MotorRiding from "../../../Images/Upcoming ctivites/MotorRiding.jpg";
import Rafting from "../../../Images/Upcoming ctivites/Rafting.jpg";
import ropeMountain from "../../../Images/Upcoming ctivites/ropeMountain.webp";
import Trackking from "../../../Images/Upcoming ctivites/Trackking.jpg";

import BambooBoating from "../../../Images/Upcoming ctivites/BambooBoating.jpeg";

import "../../../Styles/Home.css";

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

const UpcomingActivities = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "red", margin: "20px" }}>
        <u> UpComing Activities</u>
      </h1>

      <Carousel responsive={responsive}>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={BambooBoating}
            height="50%"
          />
          <Card.Body>
            <Card.Title>Bamboo Boating</Card.Title>
            <Card.Text>
              They are constructed entirely from locally sourced bamboo,
              harnessing the abundant bamboo resources of Assam
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={Bunjee}
            height="50%"
          />
          <Card.Body>
            <Card.Title>Bungee jumping</Card.Title>
            <Card.Text>
              Bungee jumping is an action-filled recreational activity that
              involves head-first jumping
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={camelWalk}
            height="50%"
          />
          <Card.Body>
            <Card.Title> Camel rides</Card.Title>
            <Card.Text>
              Camel rides are a kind of activity everybody does when they visit
              the Middle East.
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={Camping}
            height="50%"
          />
          <Card.Body>
            <Card.Title>Camping</Card.Title>
            <Card.Text>
              Camping activity that involves staying the night/more than one
              night in a protective shelter
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={MotorRiding}
            height="50%"
          />
          <Card.Body>
            <Card.Title>motor Ride</Card.Title>
            <Card.Text>
              the activity or hobby of travelling on a motorcycle.
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={Rafting}
            height="50%"
          />
          <Card.Body>
            <Card.Title>Rafting</Card.Title>
            <Card.Text>
              Rafting and whitewater rafting are recreational outdoor activities
              which use an inflatable raft to navigate a river.
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={ropeMountain}
            height="50%"
          />
          <Card.Body>
            <Card.Title>Mountaineering</Card.Title>
            <Card.Text>
              Mountaineering, or mountain climbing, is the sport of reaching, or
              trying to reach, high points in mountainous areas.
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            className="imgCssU"
            variant="top"
            src={Trackking}
            height="50%"
          />
          <Card.Body>
            <Card.Title>Trekking</Card.Title>
            <Card.Text>
              Trekking is a type of outdoor adventure in which you trek through
              forests, mountains.
            </Card.Text>
            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
      </Carousel>
    </>
  );
};

export default UpcomingActivities;
