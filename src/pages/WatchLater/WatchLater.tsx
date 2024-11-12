import React, {useEffect} from "react";
import {connect} from "react-redux";
import WatchLaterMovieGrid from "./WatchLaterMovieGrid/WatchLaterMovieGrid";
import {WatchLaterMovieAPI} from "../../api/WatchLaterMovie/WatchLaterMovieAPI";
import {WatchLaterTypes} from "../../types/watchLater.types";
import {requestMovieLater, requestMovieLaterMore} from "../../redux/WatchLater/WatchLaterThunk";

const DeleteWatch = (id: number) => {
    WatchLaterMovieAPI.deleteWatchLater({id})
}

const WatchLater = ({
                        movieLater,
                        requestMovieLater,
                        requestMovieLaterMore
                    }: WatchLaterTypes.IWatchLaterProps) => {
    useEffect(() => {
        requestMovieLater()
    }, [requestMovieLater]);
    return (
        <WatchLaterMovieGrid movieLater={movieLater} buttonEffect={DeleteWatch}
                             requestMovieLaterMore={requestMovieLaterMore}/>
    )
}

const StateProps = (state: WatchLaterTypes.IWatchLaterContainer) => ({
    movieLater: state.movieLater.movieLater,
})

export default connect(StateProps, {requestMovieLater, requestMovieLaterMore})(WatchLater)