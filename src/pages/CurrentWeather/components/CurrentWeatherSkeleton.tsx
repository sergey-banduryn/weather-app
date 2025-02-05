import { Skeleton, Stack } from '@mui/material';

function CurrentWeatherSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton height={30} variant="rounded" width={70} />
      <Skeleton height={30} variant="rounded" width={70} />
      <Skeleton height={30} variant="rounded" width={70} />
    </Stack>
  );
}

export default CurrentWeatherSkeleton;
