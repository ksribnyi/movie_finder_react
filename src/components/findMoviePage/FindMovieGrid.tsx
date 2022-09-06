import {Button, TextField} from "@mui/material";
import React from "react";
import GridConstructor from "./GridConstructor";
import "./FindMovie.css"
import {responseMovie} from "../../models/response/Response";
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";

const StyleFindMovieGrid = {
    textInput: {
        background: "grey",
        borderRadius: 5
    },
    btnInput: {
        background: "grey",
        borderRadius: 5,
        height: 40,
        color: "black",
        width: 55
    }
}

type FindMovieProps = {
    findMovie: React.MouseEventHandler,
    movie: responseMovie,
    onChange: React.ChangeEventHandler,
    bodyInput: string
}

const AddWatchLater = (id: string | number) => {
    WatchLaterMovieAPI.addWatchLater(id).then(date => console.log(date))
}

const FindMovieGrid: React.FC<FindMovieProps> = ({findMovie, movie, onChange, bodyInput}) => {
    return (
        <div className={"find_movie_control"}>
            <div className={"control"}>
                <TextField variant={"outlined"} size={"small"} style={StyleFindMovieGrid.textInput}
                           autoComplete={"off"} onChange={onChange} value={bodyInput}/>
                <Button style={StyleFindMovieGrid.btnInput}
                        onClick={findMovie}>FIND
                </Button>
            </div>
            <GridConstructor movie={movie} buttonEffect={AddWatchLater}/>
        </div>

    )
}

export default FindMovieGrid