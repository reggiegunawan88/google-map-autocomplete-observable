import React from 'react';
import { Box } from '@mui/material';

import withInitMap from 'components/HOC/GoogleMap/withInitMap';

const MapContainer = ({ mapRef, isMapReady }) => {
  if (!isMapReady) {
    return <></>;
  }
  return <Box ref={mapRef} sx={{ width: '100%', height: '400px' }}></Box>;
};

export default withInitMap(MapContainer);
