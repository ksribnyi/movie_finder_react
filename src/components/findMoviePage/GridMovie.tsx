import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import {FindmovieTypes} from "./findmovie.types";
import LikeMovie from "./LikeMovie";
import MoviePhoto from "./MoviePhoto";

const StyleGridMovie = {
    movieBox: {
        background: "gray",
        width: 281.95,
        height: 500,
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "space-between"
    },
    link: {
        textDecoration: "none",
        color: "black",
        wordWrap: "break-word" as "break-word",
        fontWeight: "bold"
    },
    aboutMovie: {
        height: 40,
        fontSize: 16,
        textAlign: "center" as "center",
    },

}

const imdbLink = "https://www.imdb.com/title/"

const generateLink = (imdb_id: string) => {
    return imdbLink + imdb_id + "/"
}

const GridMovie = ({buttonEffect, movieData, typeIcon, id}: FindmovieTypes.IGridMovie) => {
    return (
        <Grid item>
            <div style={StyleGridMovie.movieBox}>
                <MoviePhoto poster={movieData.poster} linkImdb={generateLink(movieData.imdb_id)}
                            buttonEffect={buttonEffect} id={id} typeIcon={typeIcon}/>
                <div style={{height: 80, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div style={StyleGridMovie.aboutMovie}>{
                        <a style={StyleGridMovie.link}
                           href={generateLink(movieData.imdb_id)}
                           target="_blank"
                           rel="noreferrer noopener">{movieData.title}</a>}
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <time style={{margin: "auto 0", paddingLeft: 5}}>{movieData.year}</time>
                        {movieData.is_liked !== undefined && <LikeMovie likesCount={movieData.likes_count}
                                                                        isLiked={movieData.is_liked}
                                                                        id={id}/>}
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default GridMovie