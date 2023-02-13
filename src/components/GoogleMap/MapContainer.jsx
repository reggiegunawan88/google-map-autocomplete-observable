import React from 'react';
import useMapContainer from './hooks/useMapContainer';

const MapContainer = () => {
  const { mapRef, isMapReady } = useMapContainer();

  if (!isMapReady) {
    return <></>;
  }
  return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default MapContainer;
