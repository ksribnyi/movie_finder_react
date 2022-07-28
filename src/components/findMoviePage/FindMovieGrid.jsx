import {Button, TextField} from "@mui/material";
import React from "react";
import GridMovie from "./GridMovie";
import "./FindMovie.css"

const FindMovieGrid = (props) => {
    return (
        <div>
            <div className={"find_movie_control"}>
                <TextField variant={"outlined"} size={"small"} style={{background: "grey", borderRadius: 5}}
                           autoComplete={"off"} onChange={props.onChange} value={props.bodyInput}/>
                <Button style={{background: "grey", borderRadius: 5, height: 40, color: "black", width:55}}
                        onClick={props.findMovie}>FIND</Button>
            </div>

            <GridMovie movie={props.movie}/>

        </div>

    )
}

export default FindMovieGrid