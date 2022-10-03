import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import GridConstructorWatchLater from "./GridConstructorWatchLater";
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";
import {WatchLaterTypes} from "./watchLater.types";
import {requestMovieLater} from "../../redux/WatchLater/WatchLaterThunk";
import {setMovieWatchLater} from "../../redux/ActionsCreators";

const DeleteWatch = (id: number) => {
    WatchLaterMovieAPI.deleteWatchLater({id})
}

const WatchLaterContainer = ({Later, requestMovieLater, setMovieWatchLater}: WatchLaterTypes.IWatchLaterProps) => {
    const [resFinished, setResFinished] = useState(false)
    useEffect(() => {
        requestMovieLater(setResFinished)
        return () => {
            setMovieWatchLater([])
        }
    }, [requestMovieLater, setMovieWatchLater]);
    return (
        <GridConstructorWatchLater movie={Later} resFinished={resFinished} buttonEffect={DeleteWatch}/>
    )
}

const StateProps = (state: WatchLaterTypes.IWatchLaterContainer) => ({
    Later: state.movieLater.movieS,
})

export default connect(StateProps, {requestMovieLater, setMovieWatchLater})(WatchLaterContainer)