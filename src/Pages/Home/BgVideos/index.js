import React from "react";

import Carousel from "react-bootstrap/Carousel";

import Card from "react-bootstrap/Card";

import "../../../Styles/Vido.css";
import { Button } from "react-bootstrap";

// import Sea from "../../../videos/Sea.mp4";
// import Ride from "../../../videos/Ride.mp4";
// import Paraglide from "../../../videos/Paraglide.mp4";
// import BoatSea from "../../../videos/BoatSea.mp4";

const BgVideos = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <video className="videoTag" autoPlay loop muted>
            <source
              src="https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <Carousel.Caption>
            <div className="sliderTextBg">
              <p>Look Inside</p>
              <h1> Experiences Review</h1>
              <p>
                “I am so happy to book my travel experience with International
                Youth Club. I must say that the team is well trained and
                completely professional, they take care of fine details and
                also, answer your queries respectfullly.”
              </p>
              <span>Sunaina Singhaniya</span>
              <span>Businesswomen</span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <video className="videoTag" autoPlay loop muted>
            <source
              src="https://videos.pexels.com/video-files/5803093/5803093-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <Carousel.Caption>
            <div className="sliderTextBg">
              <p>Look Inside</p>
              <h1> Experiences Review</h1>
              <p>
                “A wonderful and truly serene experience of Ladakh is what I
                have received from International Youth Club, the team conducted
                the trip well, and most of all, everything was just picture
                PERFECT!”
              </p>
              <span>Shubham Shrivastava</span>
              <span>Architech</span>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <video className="videoTag" autoPlay loop muted>
              <source
                src="https://videos.pexels.com/video-files/2324326/2324326-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
            </video>
            <Carousel.Caption>
              <div className="sliderTextBg">
                <p>Look Inside</p>
                <h1> Experiences Review</h1>
                <p>
                  “Hands down! They are the best travel agency I've ever booked
                  my tours from. The team keeps a check on you while your on
                  your vacation, ensure that you receive a quality experience
                  and also, if needed, compensates you with free treats. Quite
                  professional &amp; ethical company!”
                </p>
                <span>Karan James</span>
                <span>Artist</span>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* <div
        style={{
          width: "100%",
          margin: "5%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ paddingRight: "3rem" }}>
          <Button
            style={{ width: "18rem", height: "5rem", margin: "5px" }}
            variant="outline-success"
          >
            <p>Why Us</p>
          </Button>{" "}
          <Button
            style={{ width: "18rem", height: "5rem", margin: "5px" }}
            variant="outline-success"
          >
            <p>Our Serviece</p>
          </Button>{" "}
          <Button
            style={{ width: "18rem", height: "5rem", margin: "5px" }}
            variant="outline-success"
          >
            <p>Our Story</p>
          </Button>{" "}
          <Button
            style={{ width: "18rem", height: "5rem", margin: "5px" }}
            variant="outline-success"
          >
            <p>FAQ,s</p>
          </Button>{" "}
        </div>
        <div>
          <h2>Experienced Staff</h2>
          <p style={{ width: "70%", fontWeight: "normal", margin: "25px" }}>
            Our friendly consultants travel regularly & offer first-hand advice
            to help you settle for nothing but the best!
          </p>
        </div>

        <div>
          <h2>Hassle-free Experience</h2>
          <p style={{ width: "70%", fontWeight: "normal", margin: "25px" }}>
            We coordinate your travel so flights, transfers & tours all connect
            smoothly and you just relax and enjoy your journey with our utlimate
            tour packages.
          </p>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
          </svg>
          <h2>Trusted by Travelers</h2>
          <p style={{ width: "70%", fontWeight: "normal", margin: "25px" }}>
            We have conducted more than 10,000+ tours. So rest assured, you are
            with an expert.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default BgVideos;
