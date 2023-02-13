import React from 'react';
import Box from '@mui/material/Box';
import AutoselectForm from 'components/AutoselectForm';
import MapContainer from 'components/GoogleMap/MapContainer';
import Div100vh from 'react-div-100vh';
import Typography from '@mui/material/Typography';
import useShallowEqualSelector from 'helpers/useShallowEqualSelector';

const Home = () => {
  const keyword = useShallowEqualSelector(state => state.form.keyword);

  return (
    <Div100vh style={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h3">React - Google Maps by Reggie Gunawan</Typography>
        <Typography variant="h5">Searchbar value: {keyword}</Typography>
        <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
          <AutoselectForm />
          <MapContainer />
        </Box>
      </Box>
    </Div100vh>
  );
};

export default Home;
