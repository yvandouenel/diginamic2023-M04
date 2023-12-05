import React, { useEffect, useState } from 'react';
import { Geolocation, Position } from '@capacitor/geolocation';

const GeolocationComponent: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Position>();

  useEffect(() => {
    const getGeoLocation = async () => {
      const position = await Geolocation.getCurrentPosition();
      setCoordinates(position);
    };

    getGeoLocation();
  }, []);

  return (
    <div>
      {coordinates ? (
        <div>
          <p>Latitude: {coordinates.coords.latitude}</p>
          <p>Longitude: {coordinates.coords.longitude}</p>
        </div>
      ) : (
        <p>Getting Geolocation...</p>
      )}
    </div>
  );
};

export default GeolocationComponent;