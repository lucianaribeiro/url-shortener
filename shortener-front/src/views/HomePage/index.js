import React from 'react';
import styled from 'styled-components'
import ShortUrlComponent from '../../components/shortUrlComponent';

import { Helmet } from "react-helmet";

const background = require('../../assets/img/background.png');
const cover = require('../../assets/img/cover.png')
export default class HomePage extends React.Component {



    render() {
        return (
            <Wrapper>
                <Helmet>
                    <style>{`body {background-image: url('${background}')} body {background-position: center} body {background-size: cover} body{ background-repeat: no-repeat}`}</style>
                </Helmet>
                <ShortUrlComponent />
                <div>
                    <img src={cover} alt="cover" />
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
    justify-content: space-evenly;
    align-items: center;
`;