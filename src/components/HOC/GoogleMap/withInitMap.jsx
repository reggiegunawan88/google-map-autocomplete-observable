/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { storeMapProperties } from 'store/actions/googleMapAction';

import useShallowEqualSelector from 'helpers/useShallowEqualSelector';
import validateLoadedScript from 'helpers/validateLoadedScript';

const withInitMap = Component => () => {
  const dispatch = useDispatch();
  const { isMapReady, center, apiKey } = useShallowEqualSelector(state => state.googleMap);
  const mapRef = useRef(null);

  window.initMap = () => {
    var mapInstance = new google.maps.Map(mapRef.current, {
      center: center,
      zoom: 15,
      mapTypeControl: false
    });

    var mapMarker = new google.maps.Marker({
      position: center,
      map: mapInstance
    });

    dispatch(storeMapProperties({ map: mapInstance, marker: mapMarker }));
  };

  const loadMapScript = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;
    script.async = true;
    script.defer = true;

    if (!validateLoadedScript({ url: script.src })) {
      document.body.appendChild(script);
    }
    dispatch({ type: 'SET_MAP_READY' });
  };

  useEffect(() => {
    loadMapScript();
  }, []);

  return <Component isMapReady={isMapReady} mapRef={mapRef} />;
};

export default withInitMap;
