import L from "leaflet";
import { useEffect } from "react";

interface Container {
  _leaflet_id: any;
}

const Map = (props: any) => {
  const locations = props.locations;
  useEffect(() => {
    //had to cast the return value so i could access _leaflet_id in the line
    var container = L.DomUtil.get("map") as unknown as Container;

    if (container != null) {
      container._leaflet_id = null;
    }

    var map = L.map("map").setView([0, 0], 2);

    if (locations) {
      locations.forEach((location: L.LatLngExpression) => {
        L.marker(location).addTo(map);
      });
    }

    // Create our map tile layer:
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        maxZoom: 15,
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
    height: 600,
  };

  return <div id="map" style={mapStyles} />;
};

export default Map;
