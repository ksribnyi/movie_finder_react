import {Button, Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import {FindmovieTypes} from "./findmovie.types";
import LikeMovie from "./LikeMovie";
import MoviePhoto from "./MoviePhoto";

const StyleGridMovie = {
    movieBox: {
        background: "gray",
        width: 280,
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
        fontSize: 18,
        textAlign: "center" as "center",
    }
}

const imdbLink = "https://www.imdb.com/title/"

const generateLink = (imdb_id: string) => {
    return imdbLink + imdb_id + "/"
}

const GridMovie = ({ buttonEffect, key, movieData, textBtn, id }: FindmovieTypes.IGridMovie) => {
    return (
        <Grid key={key} item>
            <div style={StyleGridMovie.movieBox}>
                <MoviePhoto poster={movieData.poster} linkImdb={generateLink(movieData.imdb_id)}/>
                <div style={StyleGridMovie.aboutMovie}>
                    <div>{
                        <a style={StyleGridMovie.link}
                           href={generateLink(movieData.imdb_id)}
                           target="_blank"
                           rel="noreferrer noopener">{movieData.title}</a>}
                    </div>
                    <time>{movieData.year}</time>
                    <div style={{display: "flex"}}>
                        <Button onClick={() => buttonEffect(id)}>{textBtn}</Button>
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