import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";
import groundwaterData from "./data/GroundwaterData";


const locations = groundwaterData;
const states = [
  "All",
  "Tamil Nadu",
  "Karnataka",
  "Telangana"
];
function App() {
  const [selectedState, setSelectedState] = useState("All");

  const filteredLocations =
    selectedState === "All"
      ? locations
      : locations.filter(
          (location) => location.state === selectedState
        );

  return (
    <div className="app">
      <nav className="navbar">
        <h2>💧 Groundwater Monitoring System</h2>
      </nav>

      <div className="main-content">
        <aside className="sidebar">
          <h3>Dashboard</h3>

          <ul>
            <li>Home</li>
            <li>Map</li>
            <li>Reports</li>
            <li>About</li>
          </ul>

         <br />
          
          <h3>Filter by State</h3>

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <br />
          <br />

          <h3>Statistics</h3>
          <p>Total Locations: {filteredLocations.length}</p>
          <p>
  Normal Areas: {
    filteredLocations.filter(loc => loc.status === "Normal").length
  }
</p>

<p>
  Warning Areas: {
    filteredLocations.filter(loc => loc.status === "Warning").length
  }
</p>

<p>
  Critical Areas: {
    filteredLocations.filter(loc => loc.status === "Critical").length
  }
</p>
        </aside>

        <main className="map-section">
          <MapContainer
            center={[22.9734, 78.6569]}
            zoom={5}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filteredLocations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>
                  <strong>{location.name}</strong>

                  <br />
                  State: {location.state}

                  <br />
                  District: {location.district}

                  <br />
                  Groundwater Level: {location.level}
                  <br />
                  status: {location.status}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </main>
      </div>

      <footer className="footer">
        © 2026 NextGenBuilder | Groundwater Monitoring System
      </footer>
    </div>
  );
}

export default App;
