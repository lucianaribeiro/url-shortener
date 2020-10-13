import React from 'react';
import styled from 'styled-components'

import ShortUrlComponent from '../../components/shortUrlComponent';

import { Helmet } from "react-helmet";
export default class HomePage extends React.Component {

    render() {
        return (
            <Wrapper>
                <Helmet>
                    <style>{'body {background-color: white;} '}</style>
                </Helmet>
                <ShortUrlComponent />
                <div>
                    <h1>BBBBBBBB</h1>
                </div>
            </Wrapper>
        );
    }
};

const Wrapper = styled.div`
    width: 100%;
    min-height: 98vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
