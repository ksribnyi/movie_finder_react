import {Grid} from "@mui/material";
import React from "react";
import {responseMovieWatchLater} from "../../models/response/Response";
import GridMovie from "../findMoviePage/GridMovie";

interface IGridProps {
    movie: responseMovieWatchLater,
    resFinished: boolean,
    buttonEffect: (id: number) => void
}

const GridConstructorWatchLater = ({ movie, resFinished, buttonEffect }: IGridProps) => {
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
                                  buttonEffect={buttonEffect}/>
            })}
        </Grid>
    )
}

export default GridConstructorWatchLater