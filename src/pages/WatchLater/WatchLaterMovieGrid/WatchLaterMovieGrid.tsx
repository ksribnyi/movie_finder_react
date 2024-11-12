import {Grid} from "@mui/material";
import React from "react";
import MovieItem from "../../../components/MovieItem/MovieItem";
import {WatchLaterTypes} from "../../../types/watchLater.types";
import InfiniteScroll from "react-infinite-scroll-component";


const WatchLaterMovieGrid = ({movieLater, buttonEffect, requestMovieLaterMore}: WatchLaterTypes.IGridProps) => {
    return (
        <InfiniteScroll
            dataLength={(movieLater?.results || []).length}
            next={() => movieLater.next && requestMovieLaterMore(movieLater.next)}
            hasMore={true}
            loader={""}
        >
            <Grid container rowSpacing={2} columnSpacing={2}
                  className={"grid_movie"}>
                {movieLater.results.map((row: any) => {
                    return <MovieItem key={row.id}
                                      movieData={row.movie}
                                      id={row.id}
                                      buttonEffect={buttonEffect}
                                      isWatchLater={row.is_watch_later}/>
                })}
            </Grid>
        </InfiniteScroll>

    )
}

export default WatchLaterMovieGrid