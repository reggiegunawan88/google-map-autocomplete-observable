import React from 'react';
import Box from '@mui/material/Box';
import AutoselectForm from 'components/AutoselectForm';
import MapContainer from 'components/GoogleMap/MapContainer';
import Div100vh from 'react-div-100vh';

const Home = () => {
  return (
    <Div100vh style={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <AutoselectForm />
        <Box sx={{ flex: '1', height: '100%', width: '100%' }}>
          <MapContainer />
        </Box>
      </Box>
    </Div100vh>
  );
};

export default Home;
