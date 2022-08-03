import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css"
import {StateMovie} from "../../redux/FindMovieReducer";

const StyleGridMovie = {
    movieBox: {
        background: "gray",
        width: 280,
        height: 500
    },
    imgPoster: {
        width: 280,
        height: 450
    },
    link: {
        textDecoration: "none",
        wordWrap: "break-word" as "break-word"
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
                            <div>{
                                <a style={StyleGridMovie.link}
                                   href={generateLink(row.imdb_id)}
                                   target="_blank"
                                   rel="noreferrer noopener">{row.title}</a>}</div>
                            <div>{row.year}</div>
                        </div>
                    </Grid>
                ))}
            </Grid>

        </div>

    )
}

export default GridMovie