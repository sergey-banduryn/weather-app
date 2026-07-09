import type { ComponentStyles } from '@types';

const styles = {
  box: {
    alignItems: 'center',
    bgcolor: '#ffedd3',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    p: 3,
    position: 'relative',
    width: 250,
  },
  icon: {
    color: 'grey',
    height: 70,
    width: 70,
  },
} satisfies ComponentStyles;

export { styles };
