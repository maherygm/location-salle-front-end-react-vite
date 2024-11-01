import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import LeafletRoutingMachine from "./content/LeafletRoutingMachine";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletGeoCoder from "./content/LeafletGeoCoder";


const VIsite = () => {
  const position = [-21.43772, 47.09989];
  return (
    <div className="w-full h-screen overflow-hidden z-0 pt-36">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ minHeight: "80vh", minWidth: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <LeafletRoutingMachine />
      </MapContainer>
    </div>
  );
};

export default VIsite;

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
