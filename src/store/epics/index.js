import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';

async function getMapLocation({ place, store }) {
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
}

// epic listener for selecting autocomplete place
const selectAutoCompletePlace = (action$, store) =>
  action$.pipe(
    ofType('SET_PLACE'),
    mergeMap(action => getMapLocation({ place: action.payload, store }))
  );

export default combineEpics(selectAutoCompletePlace);
