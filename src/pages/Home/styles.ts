import type { ComponentStyles } from '@types';

const styles = {
  mainBox: {
    display: 'flex',
    justifyContent: 'space-between',
    my: 2,
    width: 760,
  },
  searchBox: {
    my: 4,
  },
  wrapperBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
} satisfies ComponentStyles;

export { styles };
