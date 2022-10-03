import {FindmovieTypes} from "./findmovie.types"

const StyleMoviePhoto = {
    imgPoster: {
        width: 280,
        height: "auto"
    }
}

const CheckPhoto = ({poster, linkImdb}: FindmovieTypes.IMoviePhoto) => {
    if (poster) {
        return (
            <a href={linkImdb}
               target="_blank"
               rel="noreferrer noopener">
                <img style={StyleMoviePhoto.imgPoster} alt="poster movie"
                     src={poster}/>
            </a>
        )
    } else {
        return "No photo"
    }
}

const MoviePhoto = ({poster, linkImdb}: FindmovieTypes.IMoviePhoto) => {
    return (
        <div>
            {CheckPhoto({poster, linkImdb})}
        </div>
    )
}

export default MoviePhoto