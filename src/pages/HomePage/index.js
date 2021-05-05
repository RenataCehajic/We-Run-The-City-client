import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "./style.css";

export default function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Container>
        <div id="landing-header">
          <h2 style={{ marginBottom: "100px" }}>
            <span
              style={{
                backgroundColor: "#fdff00",
                color: "#000",
                letterSpacing: "15",
              }}
            >
              <em>
                I don’t <strong>run</strong> to add days to my life - <br /> I{" "}
                <strong>run</strong> to add life to my days. - Ronald Rook
              </em>{" "}
            </span>
          </h2>
          <Link
            to={"/runningclubs"}
            className="btn btn-lg btn-success"
            style={{ marginTop: "20px" }}
          >
            View All Running clubs
          </Link>
        </div>

        <ul className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </div>
  );
}
