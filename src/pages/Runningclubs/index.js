import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { fetchRunningclubs } from "../../store/runningclubs/actions";
import { selectRunningclubs } from "../../store/runningclubs/selectors";

import RunningclubCard from "../../components/RunningclubCard";
import MapCard from "../../components/MapCard";

export default function Runningclubs() {
  const dispatch = useDispatch();
  const runningclubs = useSelector(selectRunningclubs);
  const [active, setActive] = useState("ListView");

  useEffect(() => {
    dispatch(fetchRunningclubs());
  }, [dispatch]);

  return (
    <div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button variant="success" onClick={() => setActive("ListView")}>
          List View
        </Button>
        <Button variant="success" onClick={() => setActive("MapView")}>
          Map View
        </Button>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {active === "ListView" && (
          <Container>
            {runningclubs
              .sort(
                (runningclub1, runningclub2) =>
                  runningclub2.rate - runningclub1.rate
              )
              .map((runningclub, i) => {
                return (
                  <RunningclubCard
                    key={i}
                    id={runningclub.id}
                    title={runningclub.title}
                    description={runningclub.description}
                    website={runningclub.website}
                    image={runningclub.image}
                    showLink={true}
                    email={runningclub.email}
                    phoneNum={runningclub.phoneNum}
                    isTraining={runningclub.isTraining}
                    trainingPrice={runningclub.trainingPrice}
                    runningLevel={runningclub.runningLevel}
                    trainingDuration={runningclub.trainingDuration}
                    rate={runningclub.rate}
                    trainingHours={runningclub.trainingHours}
                  />
                );
              })}
          </Container>
        )}
      </div>
      {active === "MapView" && <MapCard />}
    </div>
  );
}
