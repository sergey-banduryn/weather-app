import { Box } from '@mui/material';

import { WeatherState } from '@enums';

import { skyImagesByState, skyStatePath } from './constants';
import { styles } from './styles';

interface IWeatherStateIconProps {
  state: WeatherState;
}

function WeatherStateIcon({ state }: IWeatherStateIconProps) {
  const url = skyStatePath + skyImagesByState[state];

  return (
    <Box>
      <img alt="Sky state" src={url} style={styles.image} />
    </Box>
  );
}

export default WeatherStateIcon;
