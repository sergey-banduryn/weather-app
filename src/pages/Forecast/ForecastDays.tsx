import { Box } from '@mui/material';
import { useState } from 'react';
import ForecastDay from './ForecastDay';
import ForecastHours from './ForecastHours';
import { getMaxTempForDay, getMinTempForDay } from '@helpers';
import { IForecastDays } from '@dataTypes';

interface IForecastDaysProps {
  data: IForecastDays[];
}

function ForecastDays({ data }: IForecastDaysProps) {
  const [date, setDate] = useState(data[0].d_txt);

  const selectedDay = data.find((day) => day.d_txt === date);

  const days = data.map((day) => {
    const { d_txt } = day;

    const onClick = () => setDate(d_txt);
    const isActive = d_txt === date;

    const min = getMinTempForDay(day.hours);
    const max = getMaxTempForDay(day.hours);

    const minMaxTemp = {
      min,
      max,
    };

    return (
      <ForecastDay key={d_txt} {...{ d_txt, onClick, isActive, minMaxTemp }} />
    );
  });

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        {days}
      </Box>
      {selectedDay && <ForecastHours hours={selectedDay.hours} />}
    </>
  );
}

export default ForecastDays;
