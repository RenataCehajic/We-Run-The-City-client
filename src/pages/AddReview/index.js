import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { postReview } from "../../store/runningclubDetail/actions";

export default function AddReview() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [content, setContent] = useState("");

  const submitReview = (event) => {
    event.preventDefault();
    dispatch(postReview(content, id));
    setContent("");
    history.push(`/runningclubs/${id}`);
  };

  return (
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
  );
}
