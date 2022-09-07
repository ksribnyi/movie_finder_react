import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import {StateMovie} from "../../models/response/Response";

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

const GridMovie = ({movie}: { movie: StateMovie[] }) => {
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={2}
                  className={"grid_movie"}>
                {movie.map((row: StateMovie) => (
                    <Grid key={row.id} item>
                        <div style={StyleGridMovie.movieBox}>
                            <div>{row.poster ?
                                <a href={generateLink(row.imdb_id)}
                                   target="_blank"
                                   rel="noreferrer noopener">
                                    <img style={StyleGridMovie.imgPoster} alt="poster movie"
                                         src={row.poster}/>
                                </a> : "No photo"}</div>
                            <div style={StyleGridMovie.aboutMovie}>
                                <div>{
                                    <a style={StyleGridMovie.link}
                                       href={generateLink(row.imdb_id)}
                                       target="_blank"
                                       rel="noreferrer noopener">{row.title}</a>}
                                </div>
                                <div>{row.year}</div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default GridMovie