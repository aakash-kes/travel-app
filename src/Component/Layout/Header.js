import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import TravelLogo from "../../Images/TravelLogo.jpg";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

import "../../Styles/Home.css";

const Header = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: "green" }}
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <img src={TravelLogo} alt="logo" width="150px" height="45px"></img>
            {/* <p>Avail End Of Season Sale Upto 20% OFF</p> */}
            <Nav className="me-auto right-align">
              <Nav.Link
                style={{
                  fontSize: "inherit",
                  fontStyle: "initial",
                  fontWeight: "bold",
                }}
                href="/home"
              >
                Home
              </Nav.Link>
              <NavDropdown
                style={{
                  fontSize: "inherit",
                  fontStyle: "initial",
                  fontWeight: "bold",
                }}
                title="Destination"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/destination">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{
                  fontSize: "inherit",
                  fontStyle: "initial",
                  fontWeight: "bold",
                }}
                title="Activities"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/activities">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{
                  fontSize: "inherit",
                  fontStyle: "initial",
                  fontWeight: "bold",
                }}
                title="Theme"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/themes">Action</NavDropdown.Item>
                <NavDropdown.Item href="/BackGroundVideo">
                  Themes vidos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More +" id="basic-nav-dropdown" disabled>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/PaymentPage">
                <Button variant="success">Pay Now</Button>{" "}
              </Link>

              <Link to=" https://meet.google.com/sih-fjva-phf">
                <Button style={{ marginLeft: "10px" }} variant="warning">
                  Call Now
                </Button>{" "}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// import "../../Styles/Home.css";

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse className="RightAlign" id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;
