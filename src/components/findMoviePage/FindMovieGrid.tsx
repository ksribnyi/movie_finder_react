import {Button, TextField} from "@mui/material";
import React from "react";
import GridMovie from "./GridMovie";
import "./FindMovie.css"
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
        color: "black",
        width: 55
    }
}

const FindMovieGrid: React.FC<FindmovieTypes.IMovieProps> = ({findMovie, movie, onChange, bodyInput}) => {
    return (
        <div className={"find_movie_control"}>
            <div className={"control"}>
                <TextField variant={"outlined"} size={"small"} style={StyleFindMovieGrid.textInput}
                           autoComplete={"off"} onChange={onChange} value={bodyInput}/>
                <Button style={StyleFindMovieGrid.btnInput}
                        onClick={findMovie}>FIND
                </Button>
            </div>
            <GridMovie movie={movie}/>
        </div>
    )
}

export default FindMovieGrid