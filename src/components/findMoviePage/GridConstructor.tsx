import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import GridMovie from "./GridMovie";
import {FindmovieTypes} from "./findmovie.types";
import AddIcon from "@mui/icons-material/Add";

const GridConstructor = ({ movie, buttonEffect }: FindmovieTypes.IGridConstructor) => {
    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={2}
                  className={"grid_movie"}>
                {movie.results !== undefined && movie.results.map((row: any) => <GridMovie key={row.id}
                                                                                           id={row.id}
                                                                                           buttonEffect={buttonEffect}
                                                                                           textBtn={<AddIcon style={{color: "white", background: "gray", padding: 0}}/>}
                                                                                           movieData={row}
                />)}
            </Grid>
        </div>
    )
}

export default GridConstructor