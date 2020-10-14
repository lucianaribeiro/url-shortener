import React from 'react';
import styled from 'styled-components'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const axios = require('axios').default;

export default class RankingComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ranking: [],
        };
    }

    componentWillMount() {
        const local = 'http://localhost:3000/ranking';
        const production = 'http://157.245.253.7:3000/ranking'

        axios.get(production).then((response) => {
            this.setState({ ranking: response.data });
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        const ranking = this.state.ranking
        console.log("Ranking", ranking);
        return (
            <Wrapper>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">#</TableCell>
                                <TableCell align="center">Quantidade</TableCell>
                                <TableCell align="center">URL Original</TableCell>
                                <TableCell align="center">URL Encurtada</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ranking.map((row, i) => (
                                <TableRow key={row.longUrl}>
                                    <TableCell component="th" scope="row">
                                        {i}
                                    </TableCell>
                                    <TableCell align="center">{row.count}</TableCell>
                                    <TableCell align="center">{row.longUrl}</TableCell>
                                    <TableCell align="center">{row.shortUrl}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    margin-bottom: 10px;
`;