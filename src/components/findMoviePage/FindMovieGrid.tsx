import {Button, TextField} from "@mui/material";
import React from "react";
import GridMovie from "./GridMovie";
import "./FindMovie.css"

type FindMovieProps = {
    findMovie: React.MouseEventHandler,
    movie: any[],
    onChange: React.ChangeEventHandler,
    bodyInput: string
}

const FindMovieGrid:React.FC<FindMovieProps> = ({findMovie, movie, onChange, bodyInput}) => {
    return (
        <div>
            <div className={"find_movie_control"}>
                <TextField variant={"outlined"} size={"small"} style={{background: "grey", borderRadius: 5}}
                           autoComplete={"off"} onChange={onChange} value={bodyInput}/>
                <Button style={{background: "grey", borderRadius: 5, height: 40, color: "black", width: 55}}
                        onClick={findMovie}>FIND
                </Button>
            </div>
            <GridMovie movie={movie}/>
        </div>

    )
}

export default FindMovieGrid