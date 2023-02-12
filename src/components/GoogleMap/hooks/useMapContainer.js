import { useCallback, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const useMapContainer = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDZfVO29Iytspv4xz7S68doIoiztiRLhbk'
  });
  const [map, setMap] = useState(null);
  const center = {
    lat: 40.749933,
    lng: -73.98633
  };

  const onLoad = useCallback(() => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return {
    isLoaded,
    center,
    onLoad,
    onUnmount
  };
};

export default useMapContainer;
