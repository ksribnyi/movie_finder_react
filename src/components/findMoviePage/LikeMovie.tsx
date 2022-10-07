import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton} from "@mui/material";
import {FindmovieTypes} from "./findmovie.types";
import {FindMovieAPI} from "../../api/FindMovie/FindMovieAPI";

const like = (id: number) => {
    FindMovieAPI.likeMovie({id})
}
const unlike = (id: number) => {
    FindMovieAPI.unlikeMovie({id})
}
const LikeIcon = ({isLiked, id}: FindmovieTypes.ILikeIcon) => {
    if (isLiked) {
        return <FavoriteIcon onClick={() => unlike(id)}/>
    }
    else {
        return <FavoriteBorderOutlinedIcon onClick={() => like(id)}/>
    }
}


const LikeMovie = ({likesCount, isLiked, id}: FindmovieTypes.ILikeMovie) => {
    return (
        <div>
            <span>{likesCount}</span>
            <IconButton>{LikeIcon({isLiked, id})}</IconButton>
        </div>
    )
}

export default LikeMovie