import React from "react";

import Carousel from "react-bootstrap/Carousel";

import "../../../Styles/Vido.css";

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
    </>
  );
};

export default BgVideos;
