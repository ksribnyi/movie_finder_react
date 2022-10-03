import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import {StateMovie} from "../../models/response/Response";
import GridMovie from "./GridMovie";
import InfiniteScroll from 'react-infinite-scroller';



const GridConstructor = ({movie, next, buttonEffect, requestMovieMore}:
                             {
                                 movie: Array<StateMovie>,
                                 requestMovieMore: (name: string) => Promise<void>,
                                 next: string,
                                 buttonEffect: (id: string | number) => void
                             }) => {
    return (
        <InfiniteScroll loadMore={() => requestMovieMore(next)} hasMore={true} >
            <Grid container rowSpacing={2} columnSpacing={2}
                  className={"grid_movie"}>
                {movie.map((row: any) => <GridMovie key={row.id}
                                                    poster={row.poster}
                                                    imdb_id={row.imdb_id}
                                                    year={row.year}
                                                    title={row.title}
                                                    id={row.id}
                                                    buttonEffect={buttonEffect}
                                                    textBtn={"ADD WATCH LATER"}/>)}
            </Grid>
        </InfiniteScroll>
    )
}

export default GridConstructor