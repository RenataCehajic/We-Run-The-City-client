import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchRunningclubsLocations } from "../../store/map/actions";
import { selectLocations } from "../../store/map/selectors";

export default function RunningclubMap() {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);
  const [activeRunningclub, setActiveRunningclub] = useState(null);

  const runner = new Icon({
    iconUrl: "https://image.flaticon.com/icons/svg/484/484167.svg",
    iconSize: [25, 25],
  });

  useEffect(() => {
    dispatch(fetchRunningclubsLocations());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{ marginTop: "60px", textAlign: "center", marginBottom: "65px" }}
      >
        <h2>
          <span
            style={{
              textShadow: "#74d600",
              fontSize: "1.8rem",
              padding: "20px",
              boxShadow: "1rem 1rem 5rem #74d600",
            }}
          >
            Map of Running clubs in Amsterdam
          </span>
        </h2>
      </div>
      <MapContainer
        center={[52.3680775, 4.9041506]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations &&
          locations.map((location) => (
            <Marker
              icon={runner}
              key={location.id}
              position={[location.latitude, location.longitude]}
              onClick={() => {
                setActiveRunningclub(location);
              }}
            >
              <Popup
                key={location.id}
                position={[location.latitude, location.longitude]}
                onClose={() => {
                  setActiveRunningclub(null);
                }}
              >
                <Link to={`/runningclubs/${location.runningclubId}`}>
                  <h5
                    style={{
                      color: "#fff",
                    }}
                  >
                    {location.address}
                  </h5>
                </Link>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
