import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton} from "@mui/material";
import {FindmovieTypes} from "./findmovie.types";

const LikeMovie = ({likesCount, isLiked, id, like, unlike}: FindmovieTypes.ILikeMovie) => {
    return (
        <div>
            <span>{likesCount}</span>
            <IconButton>{isLiked ? <FavoriteIcon onClick={() => unlike ? unlike(id) : ""}/> :
                <FavoriteBorderOutlinedIcon onClick={() => like ? like(id) : ""}/>}</IconButton>
        </div>
    )
}

export default LikeMovie