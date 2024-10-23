import React, { useRef, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px', 
};

const center = {
  lat: 49.25002898474728,
  lng: -122.99996181534327,
};

const Map = () => {
  const mapRef = useRef(null); 

  useEffect(() => {
    const google = window.google; 

    if (mapRef.current && google) {
      const map = mapRef.current;

      map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        ref={mapRef} 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} 
      />
    </LoadScript>
  );
};

export default Map;
