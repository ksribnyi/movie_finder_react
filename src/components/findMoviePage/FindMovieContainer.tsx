import React from "react";
import {connect} from "react-redux";
import {requestMovie, setSearchBody} from "../../redux/FindMovieReducer";
import FindMovieGrid from "./FindMovieGrid";
import {AppStateType} from "../../redux/redux-store"

type MovieContainer = {
    bodyInput: string,
    movie: [],
    requestMovie: any,
    setSearchBody: any
}

const FindMovieContainer = ({bodyInput, requestMovie, setSearchBody, movie}:MovieContainer) => {
    const findMovie = () => {
        requestMovie(bodyInput)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        setSearchBody(body)
    }
    return (
        <FindMovieGrid findMovie={findMovie} onChange={onChange} movie={movie} bodyInput={bodyInput}/>
    )
}

const mapStateToProps = (state:AppStateType) => ({
    movie: state.movie.movie,
    bodyInput: state.movie.newSearchBody
})

export default connect(mapStateToProps, {requestMovie, setSearchBody})(FindMovieContainer)
