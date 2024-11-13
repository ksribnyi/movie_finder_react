import {Grid} from "@mui/material";
import React, {useEffect} from "react";
import "../../pages/FindMovie/FindMovie.scss";
import {FindmovieTypes} from "../../types/findMovie.types";
import LikesCounter from "../LikesCounter/LikesCounter";
import Poster from "../Poster/Poster";
import "./MovieItem.scss"
import {IMDB_LINK} from "../../constants/constants";
import {connect} from "react-redux";
import {setShowLoginModal} from "../../redux/ActionsCreators";

const generateLink = (imdb_id: string) => {
    return IMDB_LINK + imdb_id + "/"
}

const MovieItem = ({buttonEffect, movieData, isWatchLater, id, setShowLoginModal}: FindmovieTypes.IGridMovie) => {
    return (
        <Grid item>
            <div className={"movie_wrapper"}>
                <Poster poster={movieData.poster} linkImdb={generateLink(movieData.imdb_id)}
                        buttonEffect={buttonEffect} id={id} isWatchLater={isWatchLater}
                        setShowLoginModal={setShowLoginModal}/>
                <div className={"movie_info"}>
                    <div className={"movie_info_title"}>{
                        <a className={"link"}
                           href={generateLink(movieData.imdb_id)}
                           target="_blank"
                           rel="noreferrer noopener">{movieData.title}</a>}
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <time style={{margin: "auto 0", paddingLeft: 5}}>{movieData.year}</time>
                        {movieData.is_liked !== undefined && <LikesCounter likesCount={movieData.likes_count}
                                                                           isLiked={movieData.is_liked}
                                                                           id={id}
                                                                           setShowLoginModal={setShowLoginModal}/>}
                    </div>
                </div>
            </div>
        </Grid>
    )
}


export default connect(null, {setShowLoginModal})(MovieItem)