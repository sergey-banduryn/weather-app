import type { ComponentStyles } from '@types';

const styles = {
  box: {
    borderRadius: 4,
    cursor: 'pointer',
    p: 2,
    textAlign: 'center',
    width: 120,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  minMaxBox: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  minMaxTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  minMaxValue: {
    textAlign: 'center',
  },
} satisfies ComponentStyles;

export { styles };
