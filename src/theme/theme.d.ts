import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    weatherWidgets?: {
      cardActiveBg: string;
      cardBg: string;
      hourlyBg: string;
      mainBg: string;
    };
  }

  interface PaletteOptions {
    weatherWidgets?: {
      cardActiveBg: string;
      cardBg: string;
      hourlyBg: string;
      mainBg: string;
    };
  }
}
