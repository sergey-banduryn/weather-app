export const styles = {
  hidden: {
    overflowX: 'hidden',
    overflowY: 'auto',
    height: 190,
    '&::-webkit-scrollbar': {
      width: 2,
    },
    '&::-webkit-scrollbar-track': {
      bgcolor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      bgcolor: 'lightgray',
    },
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
} as const;
