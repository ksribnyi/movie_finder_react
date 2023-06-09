import {Grid} from "@mui/material";
import React from "react";
import GridMovie from "../findMoviePage/GridMovie";
import {WatchLaterTypes} from "./watchLater.types";

const GridConstructorWatchLater = ({movie, resFinished, buttonEffect}: WatchLaterTypes.IGridProps) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={2}
              className={"grid_movie"}>
            {resFinished && movie.results.map((row: any) => {
                return <GridMovie key={row.id}
                                  movieData={row.movie}
                                  id={row.id}
                                  buttonEffect={buttonEffect}
                                  typeIcon={"delete"}/>
            })}
        </Grid>
    )
}

export default GridConstructorWatchLater