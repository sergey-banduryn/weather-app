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

  const performNavigation = (): void => {
    void navigate(`/${value}`);
    setValue('');
  };

  const onClick = (): void => {
    performNavigation();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      performNavigation();
    }
  };

  return (
    <Box>
      <TextField
        id="search"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Search city"
        size="small"
        value={value}
        variant="outlined"
      />
      <IconButton disabled={!value} onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export { SearchCity };
