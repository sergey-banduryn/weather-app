import { Box, Link } from "@mui/material";
import { useStore } from "@store";
import { Link as RouterLink } from "react-router";

function SearchHistory() {
  const { searchedCities } = useStore();

  const links = searchedCities.toReversed().map((city) => {
    return (
      <Link key={city} component={RouterLink} to={`/${city}`}>
        {city}
      </Link>
    );
  });

  return <Box sx={{ display: "flex", gap: 1, my: 1 }}>{links}</Box>;
}

export default SearchHistory;
