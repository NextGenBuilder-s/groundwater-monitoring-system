import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div>
      <h1>Groundwater Monitoring System</h1>

      <MapContainer
        center={[11.341, 77.717]} // Erode
        zoom={10}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[11.341, 77.717]}>
          <Popup>Erode Groundwater Monitoring Point</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;