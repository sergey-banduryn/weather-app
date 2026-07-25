import type { ComponentStyles } from '@types';

const styles = {
  box: {
    borderRadius: 4,
    display: 'flex',
    p: 2,
    width: 'min-content',
  },
  overflow: { overflowX: 'auto', width: '100%' },
  timeTitle: {
    textAlign: 'center',
    width: '100%',
  },
  titles: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100px',
  },
} satisfies ComponentStyles;

export { styles };
