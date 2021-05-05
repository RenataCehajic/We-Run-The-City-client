import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

import "./style.css";

export default function RunningclubCard(props) {
  return (
    <div>
      <div>
        <h2 className="Running">
          <span
            style={{
              textShadow: "#74d600",
              fontSize: "1.8rem",
              padding: "20px",
              boxShadow: "1rem 1rem 5rem #74d600",
            }}
          >
            {props.title}
          </span>
        </h2>
      </div>
      <div>
        <h5 className="description">
          <span
            style={{
              backgroundColor: "white",
              color: "black",
              lineHeight: "1.5",
              letterSpacing: "15",
            }}
          >
            <i>{props.description}</i>
          </span>
        </h5>
      </div>
      <Jumbotron
        className="jumbotron"
        style={{
          backgroundImage: `url('${props.image}')`,
          color: "white",
          backgroundSize: "cover",
          margin: "40px",
        }}
      >
        <p>
          <Link to={`/runningclubs/${props.id}`} className="link-unstyled">
            <Button
              style={{
                backgroundColor: "#fdff00",
                color: "black",
                borderColor: "black",
                marginTop: "150px",
              }}
            >
              View Running club
            </Button>
          </Link>
        </p>
        <p>
          <a
            className="link-unstyled"
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="link-unstyled"
              style={{
                backgroundColor: "#fdff00",
                color: "black",
                borderColor: "black",
              }}
            >
              {props.website}
            </Button>
          </a>
        </p>
        <p>
          <span
            style={{ fontSize: "2rem" }}
            role="img"
            aria-labelledby=":black_heart:"
          >
            ❤
          </span>{" "}
          <span style={{ color: "#00000" }}>{props.rate}</span>
        </p>
      </Jumbotron>
    </div>
  );
}
