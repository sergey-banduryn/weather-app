import { cardBackgroundPath, cardBackgroundStatus } from './constants';
import { styles } from './styles';
import { WeatherState } from '@enums';

interface IBackgroundImageByWeatherProps {
  state: WeatherState;
}

function BackgroundImageByWeather({ state }: IBackgroundImageByWeatherProps) {
  const backgroundImageUrl = cardBackgroundPath + cardBackgroundStatus[state];

  return <img src={backgroundImageUrl} style={styles.image} alt="Background" />;
}
export default BackgroundImageByWeather;
