import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import ShortUrl from '../../actions/shortUrl';
import { FetchUrl }  from '../../actions/fetchUrl';
import { TextField } from '@material-ui/core';

const axios = require('axios').default;
export default class ShortUrlComponent extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            longer: '',
            shorter: '',
        };
    }

    handleSubmit = async event => {
        console.log(event);
        event.preventDefault();

        axios.post(`http://localhost:3000/saveUrl`, {
            longUrl:this.state.longer,
        }).then((response) => {
            this.setState({shorter: response.data.shortUrl});
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

    }

    handleFormChange = event => {
        const value = event.target.value;
        this.setState({ longer: value });
    }

    redirectLink = () => {
        // window.open(this.state.shorter);
        console.log(this.state)
    }

    render() {
        return (
            <Wrapper>
                <TitleWrapper>
                    <PageTitle>
                        Diminua seus links facilmente!
                </PageTitle>
                    <PageSubtitle>
                        Uma ferramenta que te auxilia encurtar qualquer url que deseja.
                </PageSubtitle>
                </TitleWrapper>
                <WrapperContent>
                    <form
                        noValidate autoComplete="off"
                        onChange={this.handleFormChange}
                        onSubmit={this.handleSubmit}>
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
                    {this.state.shorter && 
                        <URLWrapper>
                            <div onClick={this.redirectLink}>{this.state.shorter}</div>
                        </URLWrapper>
                    }
                </WrapperContent>
            </Wrapper>
        );
    }

};

const Wrapper = styled.div`
    width: 30%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

const URLWrapper = styled.div``;

const PageTitle = styled.h1`
    font-family: 'Hammersmith One', sans-serif;
    font-size: 70px;
`;

const PageSubtitle = styled.h2`
    color: #6D6D6D;
`;