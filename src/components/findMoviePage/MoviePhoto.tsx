import {IconButton} from "@mui/material"
import {FindmovieTypes} from "./findmovie.types"
import "./MoviePhoto.css"

const StyleMoviePhoto = {
    Btn: {
        padding: 0,
        height: 50,
        fontSize: 35
    }
}




const CheckPhoto = ({poster, linkImdb, buttonEffect, id, textBtn}: FindmovieTypes.IMoviePhoto) => {
    if (poster) {
        return (
            <div className={"photoContainer"}>
                <div className={"buttonAdd"}>
                    <IconButton style={StyleMoviePhoto.Btn} onClick={() => buttonEffect(id)}>{textBtn}</IconButton>
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

const MoviePhoto = ({poster, linkImdb, buttonEffect, id, textBtn}: FindmovieTypes.IMoviePhoto) => {
    return (
        <div>
            {CheckPhoto({poster, linkImdb, buttonEffect, id, textBtn})}
        </div>
    )
}

export default MoviePhoto