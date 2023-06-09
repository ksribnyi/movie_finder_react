import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css"
import {FindmovieTypes} from "./findmovie.types";
import GridMovie from "./GridMovie";
import InfiniteScroll from 'react-infinite-scroller';


const GridConstructor = ({movie, next, buttonEffect, requestMovieMore}: FindmovieTypes.IGridConstructor) => {
    return (
        <InfiniteScroll loadMore={() => next && requestMovieMore(next)} hasMore={true}>
            <Grid container rowSpacing={2} columnSpacing={2}
                  className={"grid_movie"}>
                {movie.results !== undefined && movie.results.map((row: any) => <GridMovie key={row.id}
                                                                                           id={row.id}
                                                                                           buttonEffect={buttonEffect}
                                                                                           typeIcon={"add"}
                                                                                           movieData={row}
                />)}
            </Grid>
        </InfiniteScroll>
    )
}

export default GridConstructor