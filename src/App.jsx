import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

const locations = [
  { name: "Erode, Tamil Nadu", level: "12.5 m", position: [11.341, 77.717] },
  { name: "Chennai, Tamil Nadu", level: "11.2 m", position: [13.0827, 80.2707] },
  { name: "Coimbatore, Tamil Nadu", level: "10.8 m", position: [11.0168, 76.9558] },
  { name: "Madurai, Tamil Nadu", level: "13.1 m", position: [9.9252, 78.1198] },

  { name: "Bengaluru, Karnataka", level: "15.3 m", position: [12.9716, 77.5946] },
  { name: "Mysuru, Karnataka", level: "14.1 m", position: [12.2958, 76.6394] },

  { name: "Hyderabad, Telangana", level: "16.2 m", position: [17.3850, 78.4867] },

  { name: "Mumbai, Maharashtra", level: "9.7 m", position: [19.0760, 72.8777] },
  { name: "Pune, Maharashtra", level: "11.4 m", position: [18.5204, 73.8567] },

  { name: "Ahmedabad, Gujarat", level: "13.8 m", position: [23.0225, 72.5714] },

  { name: "Jaipur, Rajasthan", level: "18.0 m", position: [26.9124, 75.7873] },

  { name: "Bhopal, Madhya Pradesh", level: "12.9 m", position: [23.2599, 77.4126] },

  { name: "Lucknow, Uttar Pradesh", level: "10.5 m", position: [26.8467, 80.9462] },

  { name: "Patna, Bihar", level: "8.9 m", position: [25.5941, 85.1376] },

  { name: "Kolkata, West Bengal", level: "7.6 m", position: [22.5726, 88.3639] },

  { name: "Bhubaneswar, Odisha", level: "9.8 m", position: [20.2961, 85.8245] },

  { name: "New Delhi, Delhi", level: "17.1 m", position: [28.6139, 77.2090] },

  { name: "Srinagar, Jammu & Kashmir", level: "11.7 m", position: [34.0837, 74.7973] },

  { name: "Guwahati, Assam", level: "6.5 m", position: [26.1445, 91.7362] }
];
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
          center={[22.9734, 78.6569]}
          zoom={5}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
             
            {locations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>
                  <strong>{location.name}</strong>                
                  <br />
                   Groundwater Level: {location.level}
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