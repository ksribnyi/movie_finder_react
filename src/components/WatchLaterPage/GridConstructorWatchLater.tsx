import {Grid} from "@mui/material";
import React from "react";
import GridMovie from "../findMoviePage/GridMovie";
import {WatchLaterTypes} from "./watchLater.types";

const GridConstructorWatchLater = ({ movie, resFinished, buttonEffect }: WatchLaterTypes.IGridProps) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={2}
              className={"grid_movie"}>
            {resFinished && movie.results.map((row: any) => {
                console.log(row)
                return <GridMovie key={row.id}
                                  poster={row.movie.poster}
                                  imdb_id={row.movie.imdb_id}
                                  year={row.movie.year}
                                  title={row.movie.title}
                                  id={row.id}
                                  buttonEffect={buttonEffect}
                                  textBtn={"DELETE"}/>
            })}
        </Grid>
    )
}

export default GridConstructorWatchLater