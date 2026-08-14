import { Skeleton, Stack } from '@mui/material';

function CurrentWeatherSkeleton() {
  return (
    <Stack spacing={'9px'} useFlexGap>
      <Skeleton height={26} variant="rounded" width={70} />
      <Skeleton height={26} variant="rounded" width={70} />
      <Skeleton height={26} variant="rounded" width={70} />
    </Stack>
  );
}

export { CurrentWeatherSkeleton };
