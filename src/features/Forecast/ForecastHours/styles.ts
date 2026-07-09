import type { ComponentStyles } from '@types';

const styles = {
  box: {
    borderRadius: 4,
    display: 'flex',
    my: 2,
    p: 2,
    width: 'min-content',
  },
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
