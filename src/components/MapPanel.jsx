import React from 'react';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// New coordinates for Tea Cups Dela Costa (from provided Google Maps link)
const position = [14.7227777, 121.1333952];

const MapPanel = () => {
  return (
    <section id="map-panel" className="section map-panel">
      <div className="container map-panel-grid">
        <div className="map-panel-map">
          <MapContainer
            id="map"
            center={position}
            zoom={18}
            scrollWheelZoom={false}
            loading="lazy"
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div>
                  <strong>Tea Cups Dela Costa</strong>
                  <div>
                    <a href="https://www.google.com/maps/place/Tea+Cups+Dela+Costa+%7C+Rodriguez/@14.7227777,121.1333952,17z/data=!3m1!4b1!4m6!3m5!1s0x3397bbea0d8671bf:0xf32e6e9046ad7ba2!8m2!3d14.7227777!4d121.1333952!16s%2Fg%2F11w8tlrh95?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">Open in Google Maps</a>
                  </div>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="map-panel-info">
          <h2 className="section-title">CONTACT US</h2>
          <p className="muted">Have a question, suggestion, or just want to say hello? We'd love to hear from you!</p>
          <h3>Customer Support:</h3>
          <p>
            Email: <a href="mailto:teacupdelacosta@gmail.com">teacupdelacosta@gmail.com</a><br />
            Phone: 0919 480 0113<br />
            Hours: Monday - Friday, 8:00am - 9:00pm
          </p>
          <h3>Address</h3>
          <p>Dela Costa V, Rodriguez, Rizal, Philippines</p>
        </div>
      </div>
    </section>
  );
};

export default MapPanel;
