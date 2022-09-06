import React from "react";
import {connect} from "react-redux";
import {requestMovie, setSearchBody} from "../../redux/FindMovieReducer";
import FindMovieGrid from "./FindMovieGrid";
import {responseMovie} from "../../models/response/Response";

type IMovieContainer = {
    movie: {
        movie: responseMovie,
        bodyInput: string,
    },
    requestMovie: (name: string) => Promise<void>,
    setSearchBody: (body: string) => {type: string, body: string},
}

const FindMovieContainer = ({requestMovie, setSearchBody, movie}: IMovieContainer) => {
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

const mapStateToProps = (state: IMovieContainer) => ({
    movie: state.movie,
})

export default connect(mapStateToProps, {requestMovie, setSearchBody})(FindMovieContainer)