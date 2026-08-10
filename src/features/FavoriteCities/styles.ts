const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
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
    maxHeight: 186,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
} as const;

export { styles };
