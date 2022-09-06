import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import {responseMovie} from "../../models/response/Response";
import GridMovie from "./GridMovie";

const GridConstructor = ({
                             movie,
                             buttonEffect
                         }: { movie: responseMovie, buttonEffect: (id: string | number) => void }) => {
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={2}
                  className={"grid_movie"}>
                {movie.results !== undefined && movie.results.map((row: any) => <GridMovie key={row.id}
                                                                                           poster={row.poster}
                                                                                           imdb_id={row.imdb_id}
                                                                                           year={row.year}
                                                                                           title={row.title}
                                                                                           id={row.id}
                                                                                           buttonEffect={buttonEffect}/>)}
            </Grid>
        </div>
    )
}

export default GridConstructor