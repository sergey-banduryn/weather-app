import { useState } from 'react';
import { useNavigate } from 'react-router';

import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField } from '@mui/material';

function SearchCity() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClick = (): void => {
    //  eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigate(`/${value}`);
    setValue('');
  };

  return (
    <Box>
      <TextField
        id="search"
        variant="outlined"
        placeholder="Search city"
        value={value}
        onChange={onChange}
        size="small"
      />
      <IconButton onClick={onClick} disabled={!value}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchCity;
