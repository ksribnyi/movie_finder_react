import React from "react";
import {connect} from "react-redux";
import {requestMovie, setSearchBody, StateMovie} from "../../redux/FindMovieReducer";
import FindMovieGrid from "./FindMovieGrid";

type MovieContainer = {
    movie:{
        movie:Array<StateMovie>,
        bodyInput: string,
    },
    requestMovie: any,
    setSearchBody: any
}

const FindMovieContainer = ({requestMovie, setSearchBody, movie}:MovieContainer) => {
    const findMovie = () => {
        requestMovie(movie.bodyInput)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        setSearchBody(body)
    }
    return (
        <FindMovieGrid findMovie={findMovie} onChange={onChange} movie={movie.movie} bodyInput={movie.bodyInput}/>
    )
}

const mapStateToProps = (state:MovieContainer) => ({
    movie: state.movie,
})

export default connect(mapStateToProps, {requestMovie, setSearchBody})(FindMovieContainer)
