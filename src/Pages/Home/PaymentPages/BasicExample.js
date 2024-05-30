import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import QuickPay from "../../../Images/PaymentLogo/QuickPay.png";

function BasicExample() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ width: "50%", margin: "40px" }}>
          <div>
            <h1>Thanks For Your Business!</h1>

            <h5 style={{color:'blue'}}> click here for Quick Payment </h5>
            <img src={QuickPay} alt="img" width="200px" height="50px"></img>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter  Name " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter  Phone Number " />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Comments or Massege</Form.Label>
              <Form.Control type="text" placeholder="Comments or Massege" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div style={{ width: "50%", margin: "40px" }}>
          <h2>How to Book</h2>
          <span style={{ lineHeight: "30px" }}>
            <strong> Online:</strong> Our participation process is very simple.
            You may apply online to reserve your seat through this page or call
            us at 8010224422 between 10:00 AM to 06:00 PM on any working day.
            Alternatively, you may email us at
            bookings@internationalyouthclub.org for booking and assistance.
          </span>
          <br></br>
          <span style={{ lineHeight: "30px" }}>
            <strong> Offline:</strong> You may book offline through NEFT or
            Direct Transfer by paying the booking amount in the following Bank
            Account:
          </span>
          <div
            style={{ margin: "20px", fontSize: "larger", fontStyle: "italic" }}
          >
            <p>Account Name: INTERNATIONAL YOUTH CLUB</p>
            <p>Account No.: 50200065659460</p>
            <p>IFSC Code: HDFC0000043</p>
            <p>Account Type: Current</p>
            <p>Branch Name: Saket, New Delhi</p>
          </div>
          <span style={{ lineHeight: "30px" }}>
            You need to email NEFT/Transfer/Proof of deposit details at
            bookings@internationalyouthclub.org along with Expedition Name, Date
            of Reporting, Participant’s – name, mobile, email, DOB, city, and
            gender in order to send you the confirmation within 48 working hours
            from our side.
          </span>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
