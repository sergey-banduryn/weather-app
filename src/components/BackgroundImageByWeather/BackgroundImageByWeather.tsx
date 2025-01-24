import { cardBackgroundPath, cardBackgroundStatus } from './constants';
import { styles } from './styles';
import { WeatherState } from '@enums';

interface IBackgroundImageByWeatherProps {
  state: WeatherState;
}

function BackgroundImageByWeather({ state }: IBackgroundImageByWeatherProps) {
  const backgroundImageUrl =
    cardBackgroundPath +
    (cardBackgroundStatus[state] ??
      cardBackgroundStatus[WeatherState.Atmosphere]);

  return <img src={backgroundImageUrl} style={styles.image} alt="Background" />;
}
export default BackgroundImageByWeather;
