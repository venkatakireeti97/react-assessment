import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Map } from "../Reusable/Map/Map";
import { LineChart } from "../Reusable/LineChart";

function ChartsMapComponent() {
  const [mapCenter, setMapCenter] = React.useState<any[]>([51.505, -0.09]);
  const [mapZoom, setMapZoom] = React.useState<number>(3);

  //Use Of React Query
  const covidCountries = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      const data = await response.data;
      return data;
    },
  });

  //Get Fluctuations for linechart
  const fluctuationsData = useQuery({
    queryKey: ["historical"],
    queryFn: async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastDays=all"
      );
      const data = await response.data;
      return data;
    },
  });

  //Loader
  if (covidCountries.isLoading || fluctuationsData.isLoading)
    return <h1>Loading Dashboard....</h1>;
  if (covidCountries.isError || fluctuationsData.isError)
    return <h1>Error loading Dashboard!!</h1>;

  return (
    <div className="flex flex-col w-full p-10 page-container">
      <div className="text-lg font-bold">Country Covid Data:</div>
      <Map countries={covidCountries.data} center={mapCenter} zoom={mapZoom} />
      <div className="text-lg font-bold mt-4">Fluctuation in Cases:</div>
      <LineChart data={fluctuationsData.data}></LineChart>
    </div>
  );
}

export default ChartsMapComponent;
