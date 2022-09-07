import React from "react";
import {connect} from "react-redux";
import FindMovieGrid from "./FindMovieGrid";
import {setSearchBody} from "../../redux/ActionsCreators";
import {FindmovieTypes} from "./findmovie.types";
import {requestMovie} from "../../redux/FindMovie/findMovieThunk";

const FindMovieContainer = ({requestMovie, setSearchBody, movie}: FindmovieTypes.IMovieContainer) => {
    const findMovie = async () => {
        await requestMovie(movie.bodyInput)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        setSearchBody(body)
    }
    return (
        <FindMovieGrid findMovie={findMovie} onChange={onChange} movie={movie.movie} bodyInput={movie.bodyInput}/>
    )
}

const StateProps = (state: FindmovieTypes.IMovieContainer) => ({
    movie: state.movie,
})

export default connect(StateProps, {requestMovie, setSearchBody})(FindMovieContainer)