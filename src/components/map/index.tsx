"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Spinner from "@/src/components/spinner";
import { MAP_KEY } from "@/src/core/constants";

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAP_KEY!,
  });

  const location = {
    lat: 33.523179484241105,
    lng: 73.08880698465705,
  };

  const mapOptions = {
    disableDefaultUI: false,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    minZoom: 5,
    maxZoom: 40,
  };

  return (
    <div
      className={`map-section sm:pb-1/2 relative h-[38.5rem] w-full overflow-hidden rounded-[1.25rem] md:h-auto md:flex-1`}
    >
      {isLoaded ? (
        <GoogleMap
          id="google-map"
          zoom={18}
          center={location}
          options={mapOptions}
          mapContainerClassName="absolute top-0 left-0 h-full w-full"
        />
      ) : (
        <div className="absolute top-0 left-0 flex h-full w-full items-center">
          <Spinner color="text-dark-gray" />
        </div>
      )}
    </div>
  );
};

export default MapComponent;
