import NorthIcon from '@mui/icons-material/North';
import { Box, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

import { styles } from './styles';

interface Props {
  deg: number;
  speed: string;
  styles: WindStyles;
}

interface WindStyles {
  arrowWrap?: SystemStyleObject;
  variant?: TypographyProps['variant'];
}

function Wind({ deg, speed, styles: exStyles }: Props) {
  const arrowWrapStyles = [
    styles.arrowWrap,
    { rotate: `${String(deg)}deg` },
    exStyles.arrowWrap ?? {},
  ];

  return (
    <Box sx={styles.wind}>
      <Box sx={arrowWrapStyles}>
        <NorthIcon sx={styles.arrow} />
      </Box>
      <Typography variant={exStyles.variant}>{speed}</Typography>
    </Box>
  );
}

export { Wind };
export type { WindStyles };
