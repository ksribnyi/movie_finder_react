import {Button, TextField} from "@mui/material";
import React from "react";
import GridConstructor from "./GridConstructor";
import "./FindMovie.css"
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";
import {FindmovieTypes} from "./findmovie.types";

const StyleFindMovieGrid = {
    textInput: {
        background: "grey",
        borderRadius: 5
    },
    btnInput: {
        background: "grey",
        borderRadius: 5,
        height: 40,
        color: "white",
        width: 55
    }
}

const AddWatchLater = (id: number) => {
    WatchLaterMovieAPI.addWatchLater({id})
}

const FindMovieGrid: React.FC<FindmovieTypes.IMovieProps> = ({findMovie, requestMovieMore, movie, next, onChange, bodyInput}) => {
    return (
        <div className={"find_movie_control"}>
            <div className={"control"}>
                <TextField variant={"outlined"} size={"small"} style={StyleFindMovieGrid.textInput}
                           autoComplete={"off"} onChange={onChange} value={bodyInput}/>
                <Button style={StyleFindMovieGrid.btnInput}
                        onClick={findMovie}>FIND
                </Button>
            </div>
            <GridConstructor movie={movie} requestMovieMore={requestMovieMore} next={next} buttonEffect={AddWatchLater}/>
        </div>
    )
}

export default FindMovieGrid