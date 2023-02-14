import React from 'react';
import Div100vh from 'react-div-100vh';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MapContainer from 'components/GoogleMap/MapContainer';
import AutoselectForm from 'components/AutoselectForm';

import useShallowEqualSelector from 'helpers/useShallowEqualSelector';

const Home = () => {
  const { place } = useShallowEqualSelector(state => state.form);

  return (
    <Div100vh style={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4">React - Google Maps by Reggie Gunawan</Typography>
        <Box
          sx={{ position: 'relative', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <AutoselectForm />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 2 }}>
              <Typography variant="h5">Place name: {place.name || '-'}</Typography>
              <Typography variant="h5">Place address: {place.address || '-'}</Typography>
            </Box>
          </Box>
          <MapContainer />
        </Box>
      </Box>
    </Div100vh>
  );
};

export default Home;
