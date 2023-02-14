import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { mergeMap, mapTo } from 'rxjs/operators';

// get and set map location based on selected place
const getMapLocation = async ({ place, store }) => {
  const { map, marker } = store.value.googleMap.mapProps;

  if (!place.geometry || !place.geometry.location) {
    window.alert("No details available for input: '" + place.name + "'");
    return;
  }

  // If the place has a geometry, then present it on a map.
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }

  marker.setPosition(place.geometry.location);
  marker.setVisible(true);

  return place;
};

// set type option to autocomplete instance
const assignAutocompleteOption = ({ type, store }) => {
  const { autocomplete } = store.value.googleMap;
  autocomplete.setTypes(type);
  return type;
};

// epic listener for selecting autocomplete place
const selectAutoCompletePlace = (action$, store) =>
  action$.pipe(
    ofType('SET_PLACE'),
    mergeMap(action => getMapLocation({ place: action.payload, store }))
  );

// epic listener for selecting autocomplete radio button options
const selectAutocompleteOption = (action$, store) => {
  return action$.pipe(
    ofType('SET_AUTOCOMPLETE_OPTION'),
    mergeMap(action => assignAutocompleteOption({ type: action.payload, store })),
    mapTo({ type: 'SET_INPUT_KEYWORD', payload: '' })
  );
};

export default combineEpics(selectAutoCompletePlace, selectAutocompleteOption);
