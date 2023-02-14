/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
import useShallowEqualSelector from 'helpers/useShallowEqualSelector';
import { selectMapPlace, setMapOption } from 'store/actions/formAction';
import { useEffect, useRef } from 'react';

const withAutocomplete = Component => () => {
  const dispatch = useDispatch();
  const textboxRef = useRef();
  const { mapProps } = useShallowEqualSelector(state => state.googleMap);
  const formState = useShallowEqualSelector(state => state.form);

  const selectOptions = e => {
    dispatch(setMapOption(e.target.value));
  };

  // initiate map autocomplete instance
  const initAutocompletePlace = () => {
    const { map } = mapProps;
    const { options } = formState;
    const autocomplete = new google.maps.places.Autocomplete(textboxRef.current, options);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      // dispatch to observable epic
      dispatch(selectMapPlace(place));
    });
  };

  useEffect(() => {
    // initiate map autocomplete after google map instance is created
    if (window.google?.maps) {
      initAutocompletePlace();
    }
  }, [window.google?.maps]);

  return <Component textboxRef={textboxRef} selectOptions={selectOptions} />;
};

export default withAutocomplete;
