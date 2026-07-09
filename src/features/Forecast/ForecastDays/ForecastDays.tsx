import { useState } from 'react';

import { Box } from '@mui/material';

import { getMaxTempForDay, getMinTempForDay } from '@helpers';
import type { IForecastDays } from '@types';

import { ForecastDay } from '../ForecastDay';
import { ForecastHours } from '../ForecastHours';
import { styles } from './styles';

interface IForecastDaysProps {
  data: IForecastDays[];
}

function ForecastDays({ data }: IForecastDaysProps) {
  const [date, setDate] = useState(data[0].d_txt);

  const selectedDay = data.find((day) => day.d_txt === date);

  const days = data.map((day) => {
    const { d_txt } = day;

    const onClick = () => {
      setDate(d_txt);
    };
    const isActive = d_txt === date;

    const min = getMinTempForDay(day.hours);
    const max = getMaxTempForDay(day.hours);

    const minMaxTemp = {
      max,
      min,
    };

    return (
      <ForecastDay key={d_txt} {...{ d_txt, isActive, minMaxTemp, onClick }} />
    );
  });

  return (
    <>
      <Box sx={styles.box}>{days}</Box>
      {selectedDay && <ForecastHours hours={selectedDay.hours} />}
    </>
  );
}

export { ForecastDays };
