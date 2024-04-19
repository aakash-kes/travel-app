import React from "react";

import Carousel from "react-bootstrap/Carousel";

import "../../../Styles/Slider.css";

import mountain from "../../../Images/mountain.jpg";
import parachute from "../../../Images/parachute.jpg";
import fun from "../../../Images/fun.jpg";

import manali from "../../../Images/manali.jpg";
import goa from "../../../Images/goa.jpg";
import camping from "../../../Images/camping.jpg";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img
            src={mountain}
            layout="fill"
            alt=""
            width={"100%"}
            height={"650px"}
          />
          <Carousel.Caption>
            <div className="sliderText">
              <h1>
                <u>Experience Manali</u>
              </h1>
              <p>
                A gift of the Himalayas to the world, Manali is a beautiful
                township nestled in the picturesque Beas River valley..
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img
            src={manali}
            layout="fill"
            alt=""
            width={"100%"}
            height={"650px"}
          />
          <Carousel.Caption>
            <div className="sliderText">
              <h1>
                <u>Uttarakhand, popularly known as the Land of the Gods</u>
              </h1>
              <p>
                One of the holiest shrines of the Hindu religion, the Kedarnath
                temple is a revered temple as per Hindu beliefs. It is revered
                as one of the 12 Jyotirlingas of Lord Shiva.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={goa} layout="fill" alt="" width={"100%"} height={"650px"} />
          <Carousel.Caption>
            <div className="sliderText">
              <h1>
                <u>The Goa and its Beaches</u>
              </h1>
              <p>
                Goa is one of the most beautiful places in India. The number of
                foreign tourists visiting Goa has risen exponentially. This has
                created a great demand for the hotels in goa.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img
            src={camping}
            layout="fill"
            alt=""
            width={"100%"}
            height={"650px"}
          />
          <Carousel.Caption>
            <div className="sliderText">
              <h1>
                <u>CAMPING & ADVENTURE</u>
              </h1>
              <p>
                Camping is a form of outdoor recreation or outdoor education
                involving overnight stays with a basic temporary shelter such as
                a tent. Camping can also include a recreational vehicle,
                sheltered cabins, a permanent tent, a shelter such as a bivy or
                tarp, or no shelter at all.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={fun} alt="img" width={"100%"} height={"650px"} />
          <Carousel.Caption>
            <div className="sliderText">
              <h1>
                <u>CHENNAI</u>{" "}
              </h1>
              <p>
                Chennai is located on the Coromandel Coast of Tamil Nadu.
                Chennai is the largest city of Tamil Nadu. The oldest city
                corporation in India is the Greater Chennai Corporation. It is
                also the world's second oldest city corporation after London.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
