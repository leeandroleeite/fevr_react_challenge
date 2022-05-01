import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Gallery } from "./pages/Gallery";
import Map from "./components/Map";

function App() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => setUsers(response.data));
    getLocations(users);
  }, [users]);

  var locations: any = [];

  function getLocations(users: any) {
    for (let i in users) {
      locations.push([
        parseFloat(users[i].address.geo.lat),
        parseFloat(users[i].address.geo.lng),
      ]);
    }
    return locations;
  }

  if (!users || !locations) return null;

  return (
    <>
      <div style={{ margin: 10, display: "flex", flexDirection: "column" }}>
        <Map locations={locations} />
        <hr />
        <Gallery users={users} />
      </div>
    </>
  );
}

export default App;
