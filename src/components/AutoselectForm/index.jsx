import React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setKeyword } from 'store/actions/formAction';

const AutoselectForm = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '1',
        borderRadius: 2,
        width: '50%'
      }}
    >
      <Box
        sx={{
          backgroundColor: '#4D90FE',
          p: 1
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
          Map Autocomplete Search
        </Typography>
      </Box>
      <FormGroup sx={{ p: 1 }}>
        {/* radio button input */}
        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="establishment" control={<Radio />} label="Establishment" />
            <FormControlLabel value="address" control={<Radio />} label="Address" />
            <FormControlLabel value="geocode" control={<Radio />} label="Geocode" />
            <FormControlLabel value="cities" control={<Radio />} label="Cities" />
            <FormControlLabel value="regions" control={<Radio />} label="Regions" />
          </RadioGroup>
        </FormControl>

        {/* checkbox input */}
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Bias to map viewport" />
          <FormControlLabel control={<Checkbox />} label="Strict bounds" />
        </Box>

        {/* searchbar input */}
        <TextField placeholder="Enter a location" size="small" onChange={e => dispatch(setKeyword(e.target.value))} />
      </FormGroup>
    </Box>
  );
};

export default AutoselectForm;
