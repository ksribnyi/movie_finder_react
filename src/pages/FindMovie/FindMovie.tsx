import React from "react";
import {connect} from "react-redux";
import MovieGrid from "./MoviesGrid/MovieGrid";
import {clearMovie, setSearchBody} from "../../redux/ActionsCreators";
import {FindmovieTypes} from "../../types/findMovie.types";
import {requestMovieMore} from "../../redux/Movie/findMovieThunk";


const FindMovie = ({requestMovieMore, movie}: FindmovieTypes.IMovieContainer) => {

    return (
        <MovieGrid requestMovieMore={requestMovieMore} movie={movie.movie}
                   next={movie.next}/>
    )
}

const StateProps = (state: FindmovieTypes.IMovieContainer) => ({
    movie: state.movie,
})


export default connect(StateProps, {requestMovieMore, clearMovie, setSearchBody})(FindMovie)