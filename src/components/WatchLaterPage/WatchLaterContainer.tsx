import React, {useEffect, useState} from "react";
import {responseMovieWatchLater} from "../../models/response/Response";
import {connect} from "react-redux";
import {requestMovieLater, setMovieWatchLater} from "../../redux/WatchLaterReducer";
import GridConstructorWatchLater from "./GridConstructorWatchLater";
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";

interface IWatchLaterContainer {
    movieLater: {
        movieS: responseMovieWatchLater,
    }
}

interface IWatchLaterProps {
    Later: responseMovieWatchLater,
    requestMovieLater: (callback: any) => void,
    setMovieWatchLater: (data: any) => void,
}

const DeleteWatch = (id: number) => {
    WatchLaterMovieAPI.deleteWatchLater(id).then()
}

const WatchLaterContainer = ({Later, requestMovieLater, setMovieWatchLater}: IWatchLaterProps) => {
    const [resFinished, setResFinished] = useState(false)
    console.log('LATER', Later)
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

const mapStateToProps = (state: IWatchLaterContainer) => ({
    Later: state.movieLater.movieS,
})

export default connect(mapStateToProps, {requestMovieLater, setMovieWatchLater})(WatchLaterContainer)