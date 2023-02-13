import { createRef, useEffect } from 'react';
import useShallowEqualSelector from 'helpers/useShallowEqualSelector';
import { useDispatch } from 'react-redux';
import validateLoadedScript from 'helpers/validateLoadedScript';

const useMapContainer = () => {
  const { isMapReady, center, apiKey } = useShallowEqualSelector(state => state.googleMap);
  const mapRef = createRef(null);
  const dispatch = useDispatch();

  window.initMap = () => {
    // eslint-disable-next-line no-undef
    new google.maps.Map(mapRef.current, {
      center: center,
      zoom: 15,
      mapTypeControl: false
    });
  };

  const loadMapScript = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;
    script.async = true;
    script.defer = true;
    dispatch({ type: 'SET_MAP_READY' });

    if (!validateLoadedScript({ url: script.src })) {
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    loadMapScript();
  }, []);

  return {
    mapRef,
    isMapReady
  };
};

export default useMapContainer;
