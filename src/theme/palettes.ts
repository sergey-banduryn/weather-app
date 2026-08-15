import type { PaletteOptions } from '@mui/material';

const lightPalette: PaletteOptions = {
  background: {
    default: '#fdfbf7',
    paper: '#ffffff',
  },
  info: {
    main: '#00bcd4',
  },
  primary: {
    contrastText: '#ffffff',
    main: '#2196f3',
  },
  secondary: {
    contrastText: '#212121',
    main: '#ffb74d',
  },
  text: {
    primary: '#1a237e',
    secondary: '#5c6bc0',
  },
  weatherWidgets: {
    cardActiveBg: '#e2cca9',
    cardBg: '#fff0db',
    hourlyBg: '#95a792',
    mainBg: '#ffe0b2',
  },
};

const darkPalette: PaletteOptions = {
  background: {
    default: '#0a192f',
    paper: '#172a45',
  },
  info: {
    main: '#26c6da',
  },
  primary: {
    contrastText: '#0a192f',
    main: '#90caf9',
  },
  secondary: {
    contrastText: '#ffffff',
    main: '#f48fb1',
  },
  text: {
    primary: '#d0d0d0',
    secondary: '#8892b0',
  },
  weatherWidgets: {
    cardActiveBg: '#3a6073',
    cardBg: '#1e3d59',
    hourlyBg: '#172a45',
    mainBg: '#172a45',
  },
};

export { darkPalette, lightPalette };
