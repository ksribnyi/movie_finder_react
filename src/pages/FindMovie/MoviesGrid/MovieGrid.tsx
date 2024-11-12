import {Grid} from "@mui/material";
import React from "react";
import "../FindMovie.scss"
import {WatchLaterMovieAPI} from "../../../api/WatchLaterMovie/WatchLaterMovieAPI";
import {FindmovieTypes} from "../../../types/findMovie.types";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieItem from "../../../components/MovieItem/MovieItem";


const AddWatchLater = (id: number) => {
    WatchLaterMovieAPI.addWatchLater({id})
}

const MovieGrid: React.FC<FindmovieTypes.IMovieProps> = ({
                                                             requestMovieMore,
                                                             movie,
                                                             next,
                                                         }) => {
    return (
        <InfiniteScroll
            dataLength={(movie?.results || []).length}
            next={() => next && requestMovieMore(next)}
            hasMore={true}
            loader={""}
        >
            <Grid container rowSpacing={2} columnSpacing={2} className={"grid_movie"}>
                {(movie?.results || []).map((row: any) => (
                    <MovieItem
                        key={row.id}
                        id={row.id}
                        buttonEffect={AddWatchLater}
                        isWatchLater={row.is_watch_later}
                        movieData={row}
                    />
                ))}
            </Grid>
        </InfiniteScroll>
    )
}

export default MovieGrid