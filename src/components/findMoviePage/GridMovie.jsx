import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css"

const GridMovie = (props) => {
    const imdbLink = "https://www.imdb.com/title/"
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={2}
                  className={'grid_movie'}>
                {props.movie.map((row) => (
                    <Grid key={row.id} item>
                        <div style={{background: "gray", width: 280, height: 500}}>
                            <div align="right">{row.poster ?
                                <a href={imdbLink + row.imdb_id + '/'}
                                   target="_blank"
                                   rel="noreferrer noopener">
                                    <img style={{width: 280, height: 450, textAlight: "center"}} alt='poster movie'
                                         src={row.poster}/>
                                </a> : 'No photo'}</div>
                            <div align="right">{
                                <a style={{textDecoration: "none", wordWrap: "break-word"}}
                                   href={imdbLink + row.imdb_id + '/'}
                                   target="_blank"
                                   rel="noreferrer noopener">{row.title}</a>}</div>
                            <div align="right">{row.year}</div>
                        </div>
                    </Grid>
                ))}
            </Grid>

        </div>

    )
}

export default GridMovie