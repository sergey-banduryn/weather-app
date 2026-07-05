const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  hidden: {
    '&::-webkit-scrollbar': {
      width: 2,
    },
    '&::-webkit-scrollbar-thumb': {
      bgcolor: 'lightgray',
    },
    '&::-webkit-scrollbar-track': {
      bgcolor: 'transparent',
    },
    height: 190,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
} as const;

export { styles };
