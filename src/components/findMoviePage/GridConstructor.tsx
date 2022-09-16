import {Grid} from "@mui/material";
import React from "react";
import "./FindMovie.css";
import {responseMovie} from "../../models/response/Response";
import GridMovie from "./GridMovie";

import {FindMovieAPI} from "../../api/FindMovie/FindMovieAPI";

const like = (id: number) => {
    FindMovieAPI.likeMovie(id).then()
}
const unlike = (id: number) => {
    FindMovieAPI.unlikeMovie(id).then()
}

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
                                                                                           buttonEffect={buttonEffect}
                                                                                           textBtn={"ADD WATCH LATER"}
                                                                                           likesCount={row.likes_count}
                                                                                           isLiked={row.is_liked}
                                                                                           like={like}
                                                                                           unlike={unlike}
                />)}
            </Grid>
        </div>
    )
}

export default GridConstructor