import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

interface IFavoriteBtnProps {
  isFavorite: boolean;
  toggleFavorite: () => void;
}

function FavoriteBtn({ isFavorite, toggleFavorite }: IFavoriteBtnProps) {
  return (
    <IconButton onClick={toggleFavorite}>
      {isFavorite ? (
        <StarIcon sx={{ color: '#ffc107' }} />
      ) : (
        <StarBorderOutlinedIcon sx={{ color: '#ffc107' }} />
      )}
    </IconButton>
  );
}

export default FavoriteBtn;
