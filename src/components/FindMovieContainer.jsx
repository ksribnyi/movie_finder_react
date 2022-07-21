import React from "react";
import {connect, useSelector} from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, TextField} from "@mui/material";
import {requestMovie, setSearchBody} from "../redux/FindMovieReducer";

const FindMovieContainer = (props) => {
    const movieArr = useSelector(state => state.movie.movie)
        .sort((prev, next) => prev.year - next.year);

    const findMovie = () => {
        props.requestMovie(props.bodyInput)
    }
    const onChange = (e) => {
        let body = e.target.value
        props.setSearchBody(body)
    }
    return (
        <div>
            <TextField onChange={onChange} value={props.bodyInput}/>
            <TableContainer sx={{maxWidth: 700, textAlign: "center", margin: "auto"}} component={Paper}>
                <Table sx={{ minWidth: 700, maxWidth:700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Poster</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Release date</TableCell>
                            {/*<TableCell align="right">About movie</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.movie.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="right">{row.poster && <img style={{height:80}} alt='poster movie' src={row.poster}/> || 'No photo'}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.year}</TableCell>
                                {/*<TableCell align="right">{row.infoMovie}</TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={findMovie}>FIND</Button>
        </div>

    )
}

const mapStateToProps = (state) => ({
    movie: state.movie.movie,
    bodyInput: state.movie.newSearchBody
})

export default connect(mapStateToProps, {requestMovie, setSearchBody})(FindMovieContainer)