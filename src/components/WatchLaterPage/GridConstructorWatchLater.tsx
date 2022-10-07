import {Grid} from "@mui/material";
import React from "react";
import GridMovie from "../findMoviePage/GridMovie";
import {WatchLaterTypes} from "./watchLater.types";
import DeleteIcon from "@mui/icons-material/Delete";

const GridConstructorWatchLater = ({ movie, resFinished, buttonEffect }: WatchLaterTypes.IGridProps) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={2}
              className={"grid_movie"}>
            {resFinished && movie.results.map((row: any) => {
                return <GridMovie key={row.id}
                                  movieData={row.movie}
                                  id={row.id}
                                  buttonEffect={buttonEffect}
                                  textBtn={<DeleteIcon style={{color: "white"}}/>}/>
            })}
        </Grid>
    )
}

export default GridConstructorWatchLater