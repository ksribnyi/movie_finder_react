import {ReducersTypes} from "../redux/reducers.types";

export namespace WatchLaterTypes {
    export interface IGridProps {
        movieLater: ReducersTypes.IWatchLater["movieLater"];
        buttonEffect: (id: number) => void,
        requestMovieLaterMore: (name: string) => Promise<void>
    }

    export interface IWatchLaterContainer {
        movieLater: ReducersTypes.IWatchLater
    }

    export interface IWatchLaterProps {
        movieLater: ReducersTypes.IWatchLater["movieLater"];
        requestMovieLater: () => void;
        requestMovieLaterMore: (url: string) => Promise<void>;
    }

}