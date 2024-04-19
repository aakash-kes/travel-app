import React from "react";

import { useState } from "react";
// import Carousel from 'react-bootstrap/Carousel'
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// card
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// import goa from '../../../Images/goa.jpg'
import Agra from "../../../Images/Agra.avif";
import Chitkul from "../../../Images/Chitkul.avif";
import KhajurahoMP from "../../../Images/Khajuraho MP.avif";
import Sikkim from "../../../Images/Sikkim.avif";
import Telgue from "../../../Images/Telgue.avif";
import Rajasthan from "../../../Images/Rajasthan.avif";
import Kashmir from "../../../Images/Kashmir.avif";
import kerla from "../../../Images/kerla.jpg";
import Himachalpradesh from "../../../Images/Himachalpradesh.jpg";
import Amritsar from "../../../Images/Amritsar.jpg";

// import { style } from '../../../Styles/Home'
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

const UpComingTours = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "red", margin: "20px" }}>
        <u>UpComing Tours</u>
      </h1>

      <Carousel responsive={responsive}>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={kerla}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Kerala Tourism</Card.Title>
            <Card.Text>
              Palm-lined beaches, thrilling wildlife tours, breathtaking.
            </Card.Text>

            <Card.Title>₹ 15,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Agra}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Agra Tourism</Card.Title>
            <Card.Text>
              Agra is one of the most populous cities in Uttar Pradesh.
            </Card.Text>
            <Card.Title>₹ 10,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Chitkul}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Chitkul Tourism</Card.Title>
            <Card.Text>
              11 Exciting Things To Do In Chitkul For A Good Time In 2023.
            </Card.Text>
            <Card.Title>₹ 12,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={KhajurahoMP}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Khajuraho Tourism</Card.Title>
            <Card.Text>
              The Khajuraho Group of Monuments is a group of Hindu temples.
            </Card.Text>
            <Card.Title>₹ 14,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Sikkim}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Sikkim Tourism</Card.Title>
            <Card.Text>
              "Sikkim, is a breath-taking destination with majestic mountains.
            </Card.Text>
            <Card.Title>₹ 15,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Telgue}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Telgue Tourism </Card.Title>
            <Card.Text>
              Travel is the movement of people between distant geographical
              locations.
            </Card.Text>
            <Card.Title>₹ 20,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Rajasthan}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Rajasthan Tourism </Card.Title>
            <Card.Text>
              Popular tourist destinations in Rajasthan include Jaipur.
            </Card.Text>
            <Card.Title>₹ 10,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Kashmir}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Kashmir Tourism</Card.Title>
            <Card.Text>
              Kashmir is also one of the few places in India.
            </Card.Text>
            <Card.Title>₹ 15,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Amritsar}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>Amritsar Tourism</Card.Title>
            <Card.Text>
              Amritsar is one of the largest cities in the Indian state .
            </Card.Text>
            <Card.Title>₹ 10,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="imgCssUT"
            variant="top"
            height="50%"
            src={Himachalpradesh}
          />
          <Card.Body>
            <Card.Title style={{ color: "red" }}>
              Himachal Pradesh Tourism
            </Card.Title>
            <Card.Text>
              The top tourist places of Himachal Pradesh are Shimla,.
            </Card.Text>
            <Card.Title>₹ 25,000 </Card.Title>

            <Button variant="success">Purchase</Button>
          </Card.Body>
        </Card>
      </Carousel>
    </>
  );
};

export default UpComingTours;
