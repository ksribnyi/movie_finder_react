import {Button, TextField} from "@mui/material";
import React from "react";
import GridMovie from "./GridMovie";

const FindMovieGrid = (props) => {
    return (
        <div>
            <TextField variant={"outlined"} size={"small"} style={{background: "grey", borderRadius: 5}}
                       autoComplete={"off"} onChange={props.onChange} value={props.bodyInput}/>
            <Button style={{background: "grey", borderRadius: 5, height: 40, color: "black"}}
                    onClick={props.findMovie}>FIND</Button>
            <GridMovie movie={props.movie}/>

        </div>

    )
}

export default FindMovieGrid