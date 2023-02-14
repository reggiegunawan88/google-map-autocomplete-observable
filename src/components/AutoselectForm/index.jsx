import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useAutoselectForm from './hooks/useAutoselectForm';

const AutoselectForm = () => {
  const { textboxRef, selectOptions } = useAutoselectForm();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '1',
        borderRadius: 2
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
          <RadioGroup defaultValue="all" onChange={selectOptions} row>
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
          <FormControlLabel control={<Checkbox defaultChecked disabled />} label="Bias to map viewport" />
        </Box>

        {/* searchbar input */}
        <TextField placeholder="Enter a location" size="small" inputRef={textboxRef} />
      </FormGroup>
    </Box>
  );
};

export default AutoselectForm;
