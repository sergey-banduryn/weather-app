import NorthIcon from '@mui/icons-material/North';
import { Box, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

import { styles } from './styles';

export interface WindStyles {
  arrowWrap?: SystemStyleObject;
  variant?: TypographyProps['variant'];
}

interface Props {
  deg: number;
  speed: string;
  styles: WindStyles;
}

function Wind({ deg, speed, styles: exStyles }: Props) {
  return (
    <Box sx={styles.wind}>
      <Box
        sx={[
          styles.arrowWrap,
          { rotate: `${String(deg)}deg` },
          exStyles.arrowWrap ?? {},
        ]}
      >
        <NorthIcon sx={styles.arrow} />
      </Box>
      <Typography variant={exStyles.variant}>{speed}</Typography>
    </Box>
  );
}

export { Wind };
