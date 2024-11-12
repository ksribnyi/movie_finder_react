import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {IconButton} from "@mui/material";
import {FindmovieTypes} from "../../types/findMovie.types";
import {FindMovieAPI} from "../../api/FindMovie/FindMovieAPI";
import {useState} from "react";

const like = ({id, setLike, setCount, count, setShowLoginModal}: FindmovieTypes.ILikeButton) => {
    FindMovieAPI.likeMovie({id}).then(r => {
        if (r.status === 201) {
            setLike(true)
            setCount(count + 1)
        }
        else {
            setShowLoginModal(true)
        }
    }).catch(
        (error) => {
            if (error.response && error.response.status === 401) {
                setShowLoginModal(true)
            } else {
                console.error("An error occurred:", error)
            }
        }
    )
}

const unlike = ({id, setLike, setCount, count, setShowLoginModal}: FindmovieTypes.ILikeButton) => {
    FindMovieAPI.unlikeMovie({id}).then(r => {
        if (r.status === 200) {
            setLike(false)
            setCount(count - 1)
        }
    }).catch(
        (error) => {
            if (error.response && error.response.status === 401) {
                setShowLoginModal(true)
            } else {
                console.error("An error occurred:", error)
            }
        }
    )
}

const LikeIcon = ({liked, id, setLike, setCount, count, setShowLoginModal}: FindmovieTypes.ILikeIcon) => {
    if (liked) {
        return <IconButton onClick={() => unlike({id, setLike, setCount, count, setShowLoginModal})}>
            <FavoriteIcon style={{ color: "#1976d2" }}/>
        </IconButton>
    } else {
        return <IconButton onClick={() => like({id, setLike, setCount, count, setShowLoginModal})}>
            <FavoriteBorderOutlinedIcon style={{ color: "#1976d2" }}/>
        </IconButton>
    }
}

const LikesCounter = ({likesCount, isLiked, id, setShowLoginModal}: FindmovieTypes.ILikesCounter) => {
    const [liked, setLike] = useState(isLiked)
    const [count, setCount] = useState(likesCount)
    return (
        <div>
            <span>{count}</span>
            {LikeIcon({liked, id, setLike, setCount, count, setShowLoginModal})}
        </div>
    )
}

export default LikesCounter