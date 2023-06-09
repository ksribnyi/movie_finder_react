import {IconButton} from "@mui/material"
import {FindmovieTypes} from "./findmovie.types"
import "./MoviePhoto.css"
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const StyleMoviePhoto = {
    Btn: {
        padding: 0,
        height: 50,
        fontSize: 35
    }
}


const CheckPhoto = ({poster, linkImdb, buttonEffect, id, typeIcon}: FindmovieTypes.IMoviePhoto) => {
    if (poster) {
        return (
            <div className={"photoContainer"}>
                <div className={"buttonAdd"}>
                    <IconButton style={StyleMoviePhoto.Btn} onClick={() => buttonEffect(id)}>
                        {typeIcon === "add" ? <AddIcon style={{color: "white", background: "gray", padding: 0}}/> :
                            <DeleteIcon style={{color: "white"}}/>}
                    </IconButton>
                </div>
                <a href={linkImdb}
                   target="_blank"
                   rel="noreferrer noopener">
                    <img className={"imgPoster"} alt="poster movie"
                         src={poster}/>
                </a>
            </div>
        )
    } else {
        return "No photo"
    }
}

const MoviePhoto = ({poster, linkImdb, buttonEffect, id, typeIcon}: FindmovieTypes.IMoviePhoto) => {
    return (
        <div>
            {CheckPhoto({poster, linkImdb, buttonEffect, id, typeIcon})}
        </div>
    )
}

export default MoviePhoto