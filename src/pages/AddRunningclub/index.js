import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import { selectUser } from "../../store/user/selectors";
import { addRunningclub } from "../../store/user/actions";

export default function AddRunningclub() {
  const { token } = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [isTraining, setIsTraining] = useState(false);
  const [trainingPrice, setTrainingPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [trainingHours, setTrainingHours] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      addRunningclub(
        title,
        isTraining,
        trainingPrice,
        website,
        email,
        phoneNum,
        trainingHours,
        description,
        image,
        address,
        longitude,
        latitude
      )
    );
    setTitle("");
    setIsTraining(false);
    setTrainingPrice("");
    setWebsite("");
    setEmail("");
    setPhoneNum("");
    setTrainingHours("");
    setDescription("");
    setImage("");
    setAddress("");
    setLongitude(0);
    setLatitude(0);
  }

  if (token === null) {
    history.push("/");
  }

  return (
    <div>
      <>
        <Jumbotron>
          <h2 style={{ textAlign: "center" }}>
            <span
              style={{
                textShadow: "#74d600",
                fontSize: "1.8rem",
                padding: "20px",
                boxShadow: "1rem 1rem 5rem #74d600",
              }}
            >
              Add Running club
            </span>
          </h2>

          <Container
            style={{
              textAlign: "center",
            }}
          >
            <Form
              as={Col}
              md={{ span: 6, offset: 3 }}
              className="mt-5"
              style={{
                textAlign: "center",
              }}
            >
              <h6
                style={{
                  marginBottom: "2rem",

                  textAlign: "center",
                }}
              >
                Please fill in all the required fields in order to create a new
                running club
              </h6>
              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <Form.Label>
                  <h5>Running club Title</h5>
                </Form.Label>
                <Form.Control
                  style={{
                    textAlign: "center",
                  }}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  type="text"
                  placeholder="Enter title"
                  required
                />
              </Form.Group>

              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <input
                  checked={isTraining}
                  onChange={(event) => {
                    setIsTraining(event.target.checked);
                  }}
                  type="checkbox"
                  placeholder="Offer trainings?"
                  required
                />{" "}
                <Form.Label>
                  <h5>I offer trainings</h5>
                </Form.Label>
              </Form.Group>

              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <Form.Label>
                  <h5>Training Price</h5>
                </Form.Label>
                <Form.Control
                  value={trainingPrice}
                  onChange={(event) => setTrainingPrice(event.target.value)}
                  type="number"
                  placeholder="Your price of training, enter a number"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Address</h5>
                </Form.Label>
                <Form.Control
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  type="text"
                  placeholder="Naritaweg 10, 1043BX Amsterdam"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Longitude</h5>
                </Form.Label>
                <Form.Control
                  value={longitude}
                  onChange={(event) => setLongitude(event.target.value)}
                  type="number"
                  step="any"
                  placeholder="52.379189"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Latitude</h5>
                </Form.Label>
                <Form.Control
                  value={latitude}
                  onChange={(event) => setLatitude(event.target.value)}
                  type="number"
                  step="any"
                  placeholder="4.899431"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Website</h5>
                </Form.Label>
                <Form.Control
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  type="text"
                  placeholder="https://"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Email</h5>
                </Form.Label>
                <Form.Control
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder="info@runningclub.com"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Phone Number</h5>
                </Form.Label>
                <Form.Control
                  value={phoneNum}
                  onChange={(event) => setPhoneNum(event.target.value)}
                  type="text"
                  placeholder="+31-55-555-5555"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Training Hours</h5>
                </Form.Label>
                <Form.Control
                  value={trainingHours}
                  onChange={(event) => setTrainingHours(event.target.value)}
                  type="text"
                  placeholder="MON-SAT 8-21, SUN 9-20"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Description</h5>
                </Form.Label>
                <Form.Control
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  type="text"
                  placeholder="Enter description"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Image</h5>
                </Form.Label>
                <Form.Control
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  type="text"
                  placeholder="https://"
                  style={{
                    textAlign: "center",
                  }}
                />
                {image ? <Image src={image} alt="preview" thumbnail /> : null}
              </Form.Group>

              <Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={submitForm}
                  style={{
                    backgroundColor: "#74d600",
                    borderColor: "#000",
                    color: "#000",
                  }}
                >
                  Add Running club
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Jumbotron>
      </>
    </div>
  );
}
