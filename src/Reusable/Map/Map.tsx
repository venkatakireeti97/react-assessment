import { TileLayer, MapContainer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CountryObj } from "../../Utils/interfaces";
import "./Map.css";
import { Icon } from "leaflet";
const customIcon = new Icon({
  iconUrl: require("../../assets/location.png"),
  iconSize: [25, 25],
});

export const marker = (data: CountryObj[]) =>
  data.map((country) => (
    <Marker
      position={[country.countryInfo.lat, country.countryInfo.long]}
      key={country.countryInfo._id}
      icon={customIcon}
    >
      <Popup>
        <div className="w-40">
          <div
            className="marker-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="text-lg font-bold">{country.country}</div>
          <div className="mt-1 text-base font-medium">
            Total Cases: {country?.cases}
          </div>
          <div className="mt-1 text-base font-medium">
            Recovered: {country?.recovered}
          </div>
          <div className="mt-1 text-base font-medium">
            Deaths: {country?.deaths}
          </div>
        </div>
      </Popup>
    </Marker>
  ));

type CovidMapProps = {
  zoom: number;
  center: any;
  countries: CountryObj[] | undefined;
};

export const Map = (props: CovidMapProps) => {
  return (
    <div className="map">
      <MapContainer
        boundsOptions={{ padding: [50, 50] }}
        maxZoom={9}
        minZoom={2} //Min Zoom Restriction
        zoom={3}
        center={props.center}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          bounds={[
            [-90, -180],
            [90, 180],
          ]}
        />

        {marker(props.countries!)}
      </MapContainer>
    </div>
  );
};
