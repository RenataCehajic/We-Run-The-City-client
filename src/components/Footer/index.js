import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <>
      <Row
        style={{
          color: "white",
          backgroundColor: "#fff",
        }}
      >
        <Col
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginTop: "4rem",
            }}
          >
            ©2021
          </p>
          <p>Created as a Portfolio Project by Renata Cehajic</p>
          <p>renata.cehajic@gmail.com</p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Col
          style={{
            textAlign: "right",
            margin: "2rem",
          }}
        >
          <a
            href="https://www.linkedin.com/in/renata-cehajic-49712630/"
            target="_blank"
            without
            rel="noopener noreferrer"
            style={{
              boxShadow: "0.5rem 2rem 2rem #000000",
            }}
          >
            <img
              src="https://image.flaticon.com/icons/svg/1384/1384088.svg"
              alt="LinkedIn Logo"
              className="img-thumbnail"
              style={{
                width: "4rem",
              }}
            />
          </a>
        </Col>
        <Col
          style={{
            textAlign: "left",
            margin: "2rem",
          }}
        >
          <a
            href="https://github.com/RenataCehajic"
            target="_blank"
            without
            rel="noopener noreferrer"
            style={{
              boxShadow: "0.5rem 2rem 2rem #000000",
            }}
          >
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111612.svg"
              alt="GitHub Logo"
              className="img-thumbnail"
              style={{
                width: "4rem",
              }}
            />
          </a>
        </Col>
      </Row>
    </>
  );
}
