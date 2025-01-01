import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function NoCity() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 250,
        p: 3,
        borderRadius: 4,
        bgcolor: "#ffedd3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <SearchIcon
          sx={{
            width: 70,
            height: 70,
            color: "grey",
          }}
        />
      </Box>
      <Typography>Please, search city</Typography>
    </Box>
  );
}

export default NoCity;
