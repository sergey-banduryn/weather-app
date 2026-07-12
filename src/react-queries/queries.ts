import { queryOptions, skipToken, useQuery } from '@tanstack/react-query';

import { fetchForecast, fetchGeocodingToCity, fetchWeather } from '@api';

function useForecast(city: string) {
  return useQuery(
    queryOptions({
      queryFn: () => fetchForecast(city),
      queryKey: ['fetchForecast', city],
    }),
  );
}

function useGeocodingToCity(coords: GeolocationCoordinates | undefined) {
  return useQuery(
    queryOptions({
      queryFn: coords ? () => fetchGeocodingToCity(coords) : skipToken,
      queryKey: [
        'fetchGeocodingToCity',
        coords?.latitude,
        coords?.longitude,
        coords,
      ],
    }),
  );
}

function useWeather(city: string) {
  return useQuery(
    queryOptions({
      queryFn: () => fetchWeather(city),
      queryKey: ['fetchWeather', city],
    }),
  );
}

export { useForecast, useGeocodingToCity, useWeather };
