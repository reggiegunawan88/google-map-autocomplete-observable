import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import useMapContainer from './hooks/useMapContainer';

const MapContainer = props => {
  const { isLoaded, center, loadMap, unloadMap } = useMapContainer();
  const mapStyle = {
    width: '100%',
    height: '400px'
  };
  if (!isLoaded) {
    return <></>;
  }
  return (
    <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={13} onLoad={loadMap} onUnmount={unloadMap}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
};

export default MapContainer;
