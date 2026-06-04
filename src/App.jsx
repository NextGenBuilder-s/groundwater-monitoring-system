import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
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
        </aside>

        <main className="map-section">
          <MapContainer
            center={[11.341, 77.717]}
            zoom={10}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[11.341, 77.717]}>
              <Popup>Erode Groundwater Monitoring Point</Popup>
            </Marker>
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