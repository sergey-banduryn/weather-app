import type { Theme } from '@mui/material';

const styles = {
  currentBox: (theme: Theme) => ({
    gridArea: 'current',
    justifySelf: 'center',
    [theme.breakpoints.up('sm')]: {
      justifySelf: 'start',
    },
  }),
  favoriteBox: (theme: Theme) => ({
    gridArea: 'favorite',
    justifySelf: 'center',
    [theme.breakpoints.up('sm')]: {
      justifySelf: 'end',
    },
  }),
  forecastBox: {
    gridArea: 'forecast',
    maxWidth: '760px',
    width: '100vw',
  },
  grid: (theme: Theme) => ({
    display: 'grid',
    gap: 3,
    gridTemplateAreas: `
      "search search"
      "current favorite"
      "forecast forecast"`,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(3, auto)',
    maxWidth: '760px',
    mb: 15,
    mx: 'auto',
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: `
        "search"
        "current"
        "forecast"
        "favorite"`,
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(4, auto)',
    },
  }),
  searchBox: {
    gridArea: 'search',
    marginTop: 4,
  },
  wrapperBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export { styles };
