import { Box } from '@mui/material';
import React from 'react';
import useMapContainer from './hooks/useMapContainer';

const MapContainer = () => {
  const { mapRef, isMapReady } = useMapContainer();

  if (!isMapReady) {
    return <></>;
  }
  return <Box ref={mapRef} sx={{ width: '100%', height: '400px' }}></Box>;
};

export default MapContainer;
