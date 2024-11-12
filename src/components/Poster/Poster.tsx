import {IconButton} from "@mui/material"
import {FindmovieTypes} from "../../types/findMovie.types"
import "./Poster.scss"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import React, {useState} from "react";
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";



const CheckPhoto = ({
                        poster,
                        linkImdb,
                        id,
                        isWatchLater,
                        setShowLoginModal,
                        buttonEffect
                    }: FindmovieTypes.IMoviePhoto) => {
    const [watchLater, setWatchLater] = useState(isWatchLater)

    // const AddWatchLater = () => {
    //     WatchLaterMovieAPI.addWatchLater({id})
    //         .then(() => setWatchLater(!watchLater))
    //         .catch(
    //             (error) => {
    //                 console.log(error)
    //                 if (error.response && error.response.status === 401) {
    //                     setShowLoginModal(true)
    //                 } else {
    //                     console.error("An error occurred:", error)
    //                 }
    //             }
    //         )
    // }

    // const removeWatchLater = () => {
    //     WatchLaterMovieAPI.deleteWatchLater({id}).then(() => setWatchLater(!watchLater))
    //         .catch(
    //             (error) =>
    //                 console.error("An error occurred:", error)
    //         )
    // }
    const DeleteWatch = () => {
        WatchLaterMovieAPI.deleteWatchLater({id})
        setWatchLater(!watchLater)
    }

    const AddWatchLater = () => {
        WatchLaterMovieAPI.addWatchLater({id})
        setWatchLater(!watchLater)
    }
    // const handleClick = () => {
    //     console.log("ad")
    //     buttonEffect(id)
    //     setWatchLater(!watchLater)
    // }


    if (poster) {
        return (
            <div className={"poster_wrapper"}>
                <div className={"button_wrapper"}>
                    <IconButton className={"button"} onClick={!watchLater ? AddWatchLater : DeleteWatch}>
                        {!watchLater ? <StarOutlineIcon/> :
                            <StarIcon/>}
                    </IconButton>
                </div>
                <a href={linkImdb}
                   target="_blank"
                   rel="noreferrer noopener">
                    <img className={"imgPoster"} alt="poster movie"
                         src={poster}/>
                </a>
            </div>
        )
    } else {
        return "No photo"
    }
}

const Poster = ({poster, linkImdb, id, isWatchLater, setShowLoginModal, buttonEffect}: FindmovieTypes.IMoviePhoto) => {
    return (
        <div>
            {CheckPhoto({poster, linkImdb, id, isWatchLater, setShowLoginModal, buttonEffect})}
        </div>
    )
}

export default Poster