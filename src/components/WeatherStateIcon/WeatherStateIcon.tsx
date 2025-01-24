import { Box } from '@mui/material';
import { skyImagesByState, skyStatePath } from './constants';
import { WeatherState } from '@enums';
import { styles } from './styles';

interface IWeatherStateIconProps {
  state: WeatherState;
}

function WeatherStateIcon({ state }: IWeatherStateIconProps) {
  const url =
    skyStatePath +
    (skyImagesByState[state] ?? skyImagesByState[WeatherState.Atmosphere]);

  return (
    <Box>
      <img src={url} alt="Sky state" style={styles.image} />
    </Box>
  );
}

export default WeatherStateIcon;
