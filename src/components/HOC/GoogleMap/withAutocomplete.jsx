/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import useShallowEqualSelector from 'helpers/useShallowEqualSelector';
import { selectMapPlace } from 'store/actions/formAction';
import { storeAutocompleteInstance } from 'store/actions/googleMapAction';

const withAutocomplete = Component => () => {
  const dispatch = useDispatch();
  const textboxRef = useRef();
  const { mapProps } = useShallowEqualSelector(state => state.googleMap);
  const formState = useShallowEqualSelector(state => state.form);

  // initiate map autocomplete instance
  const initAutocompletePlace = () => {
    const { map } = mapProps;
    const { options } = formState;
    const autocomplete = new google.maps.places.Autocomplete(textboxRef.current, options);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      dispatch(selectMapPlace(place));
    });

    dispatch(storeAutocompleteInstance(autocomplete));
  };

  useEffect(() => {
    // initiate map autocomplete after google map instance is created
    if (window.google?.maps) {
      initAutocompletePlace();
    }
  }, [window.google?.maps]);

  return <Component textboxRef={textboxRef} />;
};

export default withAutocomplete;
