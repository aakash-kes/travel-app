import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import Travell from "../Images/Travell.webp";
import Googlepay from "../Images//PaymentLogo/Googlepay.jpg";
import UPILogo from "../Images/PaymentLogo/UPI.avif";
// import VISA from "../Images/PaymentLogo/VISA.webp";
import phonepe from "../Images/PaymentLogo/phonepe.webp";
import { Link } from "react-router-dom";

import "../Styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sb_footer section_padding">
          <div className="sb_footer-link">
            <div className="sb_footer-link-div">
              <img
                className="imgLogo"
                src={Travell}
                width={171}
                height={181}
                alt="171x181"
              />{" "}
              <div className="spanMedia">
                <span>
                  Looking to explore the world? We can help you with 'just' what
                  you've been looking for. Call/Whatsapp our travel agents to
                  gain the best travel experience there is on.<br></br>{" "}
                  +91-8318481867
                </span>
              </div>
            </div>

            <div className="sb_footer-link-div">
              <h2> Popular Destinations</h2>
              <p>Andaman & Nicobar Islands</p>
              <p>Bir Billing</p>
              <p>Kashmir</p>
              <p>Kasol</p>
              <p>Leh Ladakh</p>
              <p>Kerela</p>
              <p>Manali</p>
              <p>Spiti Valley</p>
              <p>Uttarakhand</p>
              <p>Anmand Nicobar</p>
              <p>Thailand</p>
            </div>

            {/* <div className="sb_footer-link-div">
              <h6>What Equipment Is Ideal For A Chadar Walk In Leh?</h6>
              <h6>Where Is The Cheapest And Best Place To Visit In India?</h6>
              <h6>7 Top Places To Visit In Kerala</h6>
              <h6>9 Top Places To Visit On Your Travel To Kullu Manali</h6>
              <h6>8 Best Places In & Around Kasol To Add To Your Checklist</h6>
            </div> */}

            <div className="sb_footer-link-div">
              <h3>We accept the following</h3>
              <div>
                <Link to="/PaymentPage">
                  <img
                    style={{ margin: "15px" }}
                    src={Googlepay}
                    href="/PaymentPage"
                    width={80}
                    height={50}
                    alt="171x60"
                  />
                </Link>

                <Link to="/PaymentPage">
                  <img
                    style={{ margin: "15px" }}
                    src={phonepe}
                    width={80}
                    height={50}
                    alt="171x60"
                  />
                </Link>

                {/* <Link to="/PaymentPage">
                  <img src={VISA} width={80} height={50} alt="171x60" />
                </Link> */}

                <Link to="/PaymentPage">
                  <img
                    style={{ margin: "15px" }}
                    src={UPILogo}
                    width={80}
                    height={50}
                    alt="60x60"
                  />
                </Link>
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>@{new Date().getFullYear} By AAkash kesharwani.</p>
            </div>

            <div className="sb_footer-below-links">
              <a href="/Terms">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>

              <a href="/Privacy">
                <div>
                  <p>Privacy</p>
                </div>
              </a>
              <a href="/Securiety">
                <div>
                  <p>Securiety</p>
                </div>
              </a>
              <a href="/Cookies">
                <div>
                  <p>Cookies & Declairation</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

/* <Card className="text-center testCss">
        <Card.Header>Featured</Card.Header>
        <div className="flex">
          <Card.Body className="mrginBox">
           <div>
              <img
                className="imgLogo"
                src={Travell}
                width={171}
                height={181}
                alt="171x181"
              />
            </div>
            <Card.Text>
              Looking to explore the world? We can help you with 'just' what
              you've been looking for . Call/Whatsapp our travel agents to gain
              the best travel experience there is on +91-8318481867
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Text>
              <h2> Popular Destinations</h2>
              <p>Andaman & Nicobar Islands</p>
              <p>Bir Billing</p>
              <p>Kashmir</p>
              <p>Kasol</p>
              <p>Leh Ladakh</p>
              <p>Kerela</p>
              <p>Manali</p>
              <p>Spiti Valley</p>
              <p>Uttarakhand</p>
              <p>Anmand Nicobar</p>
              <p>Thailand</p>
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <h6>What Equipment Is Ideal For A Chadar Walk In Leh?</h6>
            <h6>Where Is The Cheapest And Best Place To Visit In India?</h6>
            <h6>7 Top Places To Visit In Kerala</h6>
            <h6>9 Top Places To Visit On Your Travel To Kullu Manali</h6>
            <h6>8 Best Places In & Around Kasol To Add To Your Checklist</h6>
            <h6></h6>
            <h6></h6>
          </Card.Body>

          <Card.Body>
            <h3>We accept the following</h3>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingTop: "20px",
                }}
              >
                <div>
                  <img src={Googlepay} width={60} height={60} alt="171x60" />
                </div>
                <div>
                  <img src={VISA} width={60} height={60} alt="171x60" />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingTop: "20px",
                }}
              >
                <div>
                  <img src={UPILogo} width={60} height={60} alt="60x60" />
                </div>
                <div>
                  <img src={Paytm} width={60} height={60} alt="60x60" />
                </div>
              </div>
            </div>
          </Card.Body>
        </div>
        <div>
          <h4>
            © 2021 International Youth Club, All rights reserved. | Privacy
            Policy | Terms & Conditions
          </h4>
        </div>
      </Card> */
