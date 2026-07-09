import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import IconButton from '@mui/material/IconButton';

import { styles } from './styles';

interface IFavoriteBtnProps {
  isFavorite: boolean;
  toggleFavorite: () => void;
}

function FavoriteBtn({ isFavorite, toggleFavorite }: IFavoriteBtnProps) {
  return (
    <IconButton onClick={toggleFavorite}>
      {isFavorite ? (
        <StarIcon sx={styles.icon} />
      ) : (
        <StarBorderOutlinedIcon sx={styles.icon} />
      )}
    </IconButton>
  );
}

export { FavoriteBtn };
