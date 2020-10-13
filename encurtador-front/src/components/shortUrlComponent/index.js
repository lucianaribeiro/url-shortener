import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import ShortUrl from '../../actions/shortUrl';

import { TextField } from '@material-ui/core';
export default class ShortUrlComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    handleSubmit = async event => {
        console.log(event);

        ShortUrl(this.state.value);

        event.preventDefault();
    }

    handleFormChange = event => {
        const value = event.target.value;
        this.setState({value: value});
    }

    render() {
        return (
            <Wrapper>
                <form
                    noValidate autoComplete="off"
                    onChange={this.handleFormChange}
                    onSubmit={ this.handleSubmit }>
                    <FormWrapper>
                        <TextWrapper>
                            <TextField id="outlined-basic" label="URL" variant="outlined" borderColor="white" fullWidth />
                        </TextWrapper>
                        <ButtonWrapper>
                            <Button variant="contained" color="primary" size="large" type="submit">
                                Encurtar
                            </Button>
                        </ButtonWrapper>
                    </FormWrapper>
                </form>
            </Wrapper>
        );
    }

};

const Wrapper = styled.div`
    width: 30%;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    margin: 2px;
    margin-right: 15px;
    width: 100%;
`;

const ButtonWrapper = styled.div`
    align-self: center;
`;