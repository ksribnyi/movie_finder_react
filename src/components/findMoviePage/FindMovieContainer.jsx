import React from "react";
import {connect} from "react-redux";
import {requestMovie, setSearchBody} from "../../redux/FindMovieReducer";
import FindMovieGrid from "./FindMovieGrid";

const FindMovieContainer = (props) => {
    const findMovie = () => {
        props.requestMovie(props.bodyInput)
    }
    const onChange = (e) => {
        let body = e.target.value
        props.setSearchBody(body)
    }
    return (
        <FindMovieGrid findMovie={findMovie} onChange={onChange} movie={props.movie}/>
    )
}

const mapStateToProps = (state) => ({
    movie: state.movie.movie,
    bodyInput: state.movie.newSearchBody
})

export default connect(mapStateToProps, {requestMovie, setSearchBody})(FindMovieContainer)
