import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton} from "@mui/material";
import {FindmovieTypes} from "./findmovie.types";
import {FindMovieAPI} from "../../api/FindMovie/FindMovieAPI";
import {useState} from "react";

const like = ({id, setLIke, setCount, count}: FindmovieTypes.ILikeButton) => {
    FindMovieAPI.likeMovie({id}).then(r => {
        if(r.status === 201) {
            setLIke(true)
            setCount(count + 1)
        }
    })
}

const unlike = ({id, setLIke, setCount, count}: FindmovieTypes.ILikeButton) => {
    FindMovieAPI.unlikeMovie({id}).then(r => {
        if(r.status === 200) {
            setLIke(false)
            setCount(count - 1)
        }
    })
}

const LikeIcon = ({liked, id, setLIke, setCount, count}: FindmovieTypes.ILikeIcon) => {
    if (liked) {
        return <FavoriteIcon onClick={() => unlike({id, setLIke, setCount, count})}/>
    }
    else {
        return <FavoriteBorderOutlinedIcon onClick={() => like({id, setLIke, setCount, count})}/>
    }
}

const LikeMovie = ({likesCount, isLiked, id}: FindmovieTypes.ILikeMovie) => {
    const [liked, setLIke] = useState(isLiked)
    const [count, setCount] = useState(likesCount)
    return (
        <div>
            <span>{count}</span>
            <IconButton>{LikeIcon({liked, id, setLIke, setCount, count})}</IconButton>
        </div>
    )
}

export default LikeMovie