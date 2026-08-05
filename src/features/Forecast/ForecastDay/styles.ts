const styles = {
  box: {
    borderRadius: 4,
    cursor: 'pointer',
    flex: '0 0 auto',
    p: 2,
    textAlign: 'center',
    width: 120,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  day: (isWeekend: boolean) => ({
    color: isWeekend ? 'firebrick' : 'inherit',
  }),
  minMaxBox: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  minMaxTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  minMaxValue: {
    textAlign: 'center',
  },
} as const;

export { styles };
