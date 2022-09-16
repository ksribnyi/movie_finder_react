import {Button, Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import {FindmovieTypes} from "./findmovie.types";

const StyleGridMovie = {
    movieBox: {
        background: "gray",
        width: 280,
        height: 500,
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "space-between"
    },
    imgPoster: {
        width: 280,
        height: "auto"
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

const GridMovie = ({buttonEffect, key, poster, imdb_id, year, title, id, textBtn}: FindmovieTypes.IGridMovie) => {
    return (
        <Grid key={key} item>
            <div style={StyleGridMovie.movieBox}>
                <div>{poster ?
                    <a href={generateLink(imdb_id)}
                       target="_blank"
                       rel="noreferrer noopener">
                        <img style={StyleGridMovie.imgPoster} alt="poster movie"
                             src={poster}/>
                    </a> : "No photo"}</div>
                <div style={StyleGridMovie.aboutMovie}>
                    <div>{
                        <a style={StyleGridMovie.link}
                           href={generateLink(imdb_id)}
                           target="_blank"
                           rel="noreferrer noopener">{title}</a>}
                    </div>
                    <div>{year}</div>
                    <div>
                        <Button onClick={() => buttonEffect(id)}>{textBtn}</Button>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default GridMovie