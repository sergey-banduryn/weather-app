import type { ComponentStyles } from '@types';

const styles = {
  arrow: {
    color: 'grey',
    height: '100%',
    width: '100%',
  },
  arrowWrap: {
    bgcolor: 'white',
    borderRadius: '50%',
    display: 'inline-block',
    height: 20,
    width: 20,
  },
  box: {
    borderRadius: 4,
    p: 3,
    position: 'relative',
    width: 250,
  },
  favoriteBtn: {
    position: 'absolute',
    right: '5%',
    top: '5%',
    zIndex: 2,
  },
  stateIcon: {
    bottom: '10%',
    height: 60,
    position: 'absolute',
    right: '10%',
    width: 60,
    zIndex: 2,
  },
  text: {
    position: 'relative',
    zIndex: 2,
  },
  wind: {
    alignItems: 'center',
    display: 'flex',
    gap: 1,
  },
} satisfies ComponentStyles;

export { styles };
