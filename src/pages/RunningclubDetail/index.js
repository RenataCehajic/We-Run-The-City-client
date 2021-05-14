import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { postReview } from "../../store/runningclubDetail/actions";

import "./style.css";

import { fetchRunningclubDetails } from "../../store/runningclubDetail/actions";
import { incrementLikes } from "../../store/runningclubDetail/actions";

import { selectRunningclubDetails } from "../../store/runningclubDetail/selectors";
import { selectUser } from "../../store/user/selectors";

export default function RunningclubDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const runningclubDetails = useSelector(selectRunningclubDetails);
  const user = useSelector(selectUser);
  const [content, setContent] = useState("");

  const submitReview = (event) => {
    event.preventDefault();
    dispatch(postReview(content, id));
    setContent("");
    // history.push(`/runningclubs/${id}`);
  };

  useEffect(() => {
    if (id !== "0") {
      dispatch(fetchRunningclubDetails(id));
    }
  }, [dispatch, id]);

  const { location } = runningclubDetails;
  console.log("location", location);

  // const address = location.map((loc, i) => {
  //   return <ListGroup.Item key={i}>{loc.address}</ListGroup.Item>;
  // });

  const review = location.reviews;
  console.log("REVIEW", review);

  const reviewOne = location.reviews?.map((review, i) => {
    return (
      <Card
        key={i}
        style={{
          backgroundColor: "#74d600",
          color: "#000",
        }}
      >
        <Card.Header
          style={{
            border: "none",
          }}
        >
          <h6
            style={{
              color: "#000",
            }}
          >
            {" "}
            {review.user?.firstName} {review.user?.lastName} wrote
          </h6>{" "}
          <i>{review.content}</i>
        </Card.Header>

        <Card.Footer
          style={{
            borderBottom: "0.5rem solid #fff",
          }}
        >
          <h6
            style={{
              color: "#000",
            }}
          >
            Posted at <Moment>{review.time}</Moment>
          </h6>
        </Card.Footer>
      </Card>
    );
  });

  const likeRunningclub = () => {
    dispatch(incrementLikes(id));
  };

  return (
    <>
      <div>
        <div
          className="Parktitle"
          style={{
            textAlign: "center",
          }}
        >
          <h2 className="Running">
            <span
              style={{
                textShadow: "#74d600",
                fontSize: "1.8rem",
                padding: "20px",
                boxShadow: "1rem 1rem 5rem #74d600",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {runningclubDetails.title}
            </span>
          </h2>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          {user.token ? (
            <h4
              style={{
                color: "#000",
                marginTop: "3rem",
                marginBottom: "20px",
              }}
            >
              {" "}
              Like
              <div>
                <Button
                  style={{
                    backgroundColor: "#fdff00",
                    borderColor: "#000",
                    textShadow: "2px 1px  5px #000000",
                    marginTop: "10px",
                  }}
                  onClick={likeRunningclub}
                >
                  <span style={{ fontSize: "2rem" }}>❤</span>{" "}
                </Button>
                <p
                  style={{
                    color: "#000",
                    marginTop: "10px",
                  }}
                >
                  {runningclubDetails.rate}
                </p>
              </div>
            </h4>
          ) : null}
        </div>
        <Jumbotron
          className="jumbotron"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1572278116640-337bc3c3b8ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1bm5lcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
            backgroundSize: "auto 100%",
          }}
        >
          <Row>
            <Col variant="flush" className="card1">
              <ListGroup>
                <ListGroup.Item
                  style={{
                    backgroundColor: "#74d600",
                    color: "#000",
                  }}
                >
                  <h5>Contact information</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6> {location.address}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6>{runningclubDetails.phoneNum}</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6>
                    {runningclubDetails.email ? (
                      runningclubDetails.email
                    ) : (
                      <i>No email provided</i>
                    )}
                  </h6>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href={runningclubDetails.website}
                    target="_blank"
                    without="true"
                    rel="noopener noreferrer"
                    style={{ color: "#000" }}
                  >
                    {runningclubDetails.website}
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col variant="flush" className="card2">
              <ListGroup>
                <ListGroup.Item
                  style={{
                    backgroundColor: "#74d600",
                    color: "#000",
                  }}
                >
                  <h5>Training</h5>
                </ListGroup.Item>
                {runningclubDetails.isTraining ? (
                  <ListGroup.Item>
                    Price {runningclubDetails.trainingPrice} €
                  </ListGroup.Item>
                ) : null}
                <ListGroup.Item>
                  Level: {runningclubDetails.runningLevel}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col variant="flush" className="card3">
              <ListGroup>
                <ListGroup.Item
                  style={{
                    backgroundColor: "#74d600",
                    color: "#000",
                  }}
                >
                  <h5>Rooster</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  {runningclubDetails.trainingHours}
                </ListGroup.Item>
                <ListGroup.Item>
                  Duration: {runningclubDetails.trainingDuration}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron
          className="jumbotron1"
          style={{
            backgroundColor: "#fff",
            backgroundSize: "cover",
            textAlign: "center",
            margin: "20px",
          }}
        >
          <h2
            style={{
              marginBottom: "3rem",
              color: "#000",
            }}
          >
            Reviews
          </h2>
          {reviewOne}
        </Jumbotron>
        <Container>
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <h1
              className="mt-5 mb-5"
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#74d600",
                marginBottom: "2rem",
                borderBottom: "3px solid #fff",
                textAlign: "center",
              }}
            >
              Add Review
            </h1>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Write Review</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-5">
              <Button
                variant="primary"
                type="submit"
                onClick={submitReview}
                style={{
                  backgroundColor: "#74d600",
                  borderColor: "#000",
                  color: "#000",
                  marginRight: "10%",
                }}
              >
                Submit Review
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
}
