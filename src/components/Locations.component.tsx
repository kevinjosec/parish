import { Heading, Paragraph } from "@kevinjosec/typekit";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { LocateIcon } from "lucide-react";

/* Fix leaflet icon issue */
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function LocationsComponent() {
  const position: [number, number] = [29.284668, 48.079891];

  return (
    <div className="p-4 flex flex-col gap-6">
      {/* Page Heading */}
      <Heading children="Our Location" />

      {/* Address Card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 font-medium">
          <LocateIcon />
          St. Mary’s Jacobite Syrian Orthodox Church
        </div>
        <Paragraph children="Salwa, Block 10, Kuwait" />

        <a
          href="https://www.google.com/maps/place/St.Marys+Jacobite+Church,+Salwa,+Block+10%D8%8C+Kuwait/data=!4m2!3m1!1s0x3fcf9e282f751ee3:0x4bfcdaaaddb4a301"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline opacity-80 hover:opacity-100 transition"
        >
          View on Google Maps
        </a>
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-100 w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>
              <a
                href="https://maps.app.goo.gl/Q4SWCVQYfg2BtJV57"
                target="_blank"
                rel="noopener noreferrer"
              >
                St. Mary’s Jacobite Syrian Orthodox Church
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
