import L from "leaflet";
import { useEffect } from "react";

interface Container {
  _leaflet_id: any;
}

const UserMap = (props: any) => {
  const user = props.user;
  const lat = user.address.geo.lat;
  const lng = user.address.geo.lng;

  useEffect(() => {
    // cast the return value so i could access _leaflet_id in the line
    var container = L.DomUtil.get("user-map") as unknown as Container;

    if (container != null) {
      container._leaflet_id = null;
    }

    var map = L.map("user-map").setView([lat, lng], 6);

    L.marker([lat, lng]).addTo(map);

    // Create our map tile layer:
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibGFuZGl0enoiLCJhIjoiY2wybTBneTZnMHNyZTNjcGtwdmRmbXliNSJ9.y8vV15YBMZLc5Wlx8jiWtA",
      }
    ).addTo(map);
  }, []);

  // Define the styles that are to be passed to the map instance:
  const mapStyles = {
    overflow: "hidden",
    width: "100%",
    height: 400,
  };

  return <div id="user-map" style={mapStyles} />;
};

export default UserMap;
