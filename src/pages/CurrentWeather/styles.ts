export const styles = {
  box: {
    position: "relative",
    width: 250,
    p: 3,
    borderRadius: 4,
    bgcolor: "#ffedd3",
  },
  favoriteBtn: {
    position: "absolute",
    right: "5%",
    top: "5%",
    zIndex: 2,
  },
  stateIcon: {
    position: "absolute",
    width: 60,
    height: 60,
    right: "10%",
    bottom: "10%",
    zIndex: 2,
  },
  text: {
    position: "relative",
    zIndex: 2,
  },
  wind: {
    display: "flex",
    alignItems: "center",
    gap: 1,
  },
  arrowWrap: {
    display: "inline-block",
    width: 20,
    height: 20,
    borderRadius: "50%",
    bgcolor: "white",
  },
  arrow: {
    width: "100%",
    height: "100%",
    color: "grey",
  },
} as const;
