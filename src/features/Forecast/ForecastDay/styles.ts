import type { ComponentStyles } from '@types';

const styles = {
  box: {
    borderRadius: 4,
    cursor: 'pointer',
    flex: '0 0 auto',
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
