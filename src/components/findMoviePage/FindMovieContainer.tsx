import React from "react";
import {connect} from "react-redux";
import FindMovieGrid from "./FindMovieGrid";
import {setSearchBody} from "../../redux/ActionsCreators";
import {FindmovieTypes} from "./findmovie.types";
import {requestMovie, requestMovieMore} from "../../redux/FindMovie/findMovieThunk";

const FindMovieContainer = ({requestMovie, requestMovieMore, setSearchBody, movie}: FindmovieTypes.IMovieContainer) => {
    const findMovie = async () => {
        await requestMovie(movie.bodyInput)
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        setSearchBody(body)
    }
    return (
        <FindMovieGrid findMovie={findMovie} requestMovieMore={requestMovieMore} onChange={onChange} movie={movie.movie}
                       next={movie.next} bodyInput={movie.bodyInput}/>
    )
}

const StateProps = (state: FindmovieTypes.IMovieContainer) => ({
    movie: state.movie,
})

export default connect(StateProps, {requestMovie, requestMovieMore, setSearchBody})(FindMovieContainer)