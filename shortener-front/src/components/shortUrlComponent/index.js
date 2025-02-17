import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import ShowUrlComponent from "../showUrlComponent";
import RankingComponent from "../rankingComponent";

const axios = require("axios").default;
export default class ShortUrlComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      longer: "",
      shorter: "",
      openAlert: false,
      load: false,
      showRanking: false,
    };
  }

  handleSubmit = async (event) => {
    const local = "http://localhost:3000/saveUrl";
    const production = "http://157.245.253.7:3000/saveUrl";

    console.log(event);
    event.preventDefault();
    this.setState({ load: true });
    this.setState({ openAlert: true });

    await axios
      .post(local, {
        longUrl: this.state.longer,
      })
      .then((response) => {
        if (response.data.count) {
          this.setState({ shorter: response.data.shortUrl });
        } else {
          this.setState({ shorter: response.data });
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleFormChange = (event) => {
    const value = event.target.value;
    this.setState({ longer: value });
  };

  redirectLink = () => {
    window.open(`${this.state.shorter}`, "_blank");
    // window.location.href=`http://${this.state.shorter}`
  };

  renderShortURL() {
    if (!this.state.shorter) {
      return null;
    }

    return <ShowUrlComponent shorter={this.state.shorter} />;
  }

  render() {
    const showRanking = this.state.showRanking;
    return (
      <Wrapper>
        <TitleWrapper>
          {!showRanking && (
            <div>
              <PageTitle>Shorten your links easily!</PageTitle>
              <PageSubtitle>
                A tool that helps you shorten any URL you want.
              </PageSubtitle>
            </div>
          )}
          {showRanking && <PageTitle>The most accessed URLs!</PageTitle>}
        </TitleWrapper>
        <WrapperContent>
          {!showRanking && (
            <div>
              <form
                noValidate
                autoComplete="off"
                onChange={this.handleFormChange}
                onSubmit={this.handleSubmit}
              >
                <FormWrapper>
                  <TextWrapper>
                    <TextField
                      id="outlined-basic"
                      label="URL"
                      variant="outlined"
                      borderColor="white"
                      fullWidth
                    />
                  </TextWrapper>
                  <ButtonWrapper>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                    >
                      Shorten
                    </Button>
                  </ButtonWrapper>
                </FormWrapper>
              </form>
              <URLWrapper>
                {/* <a target="_blank" href={this.state.shorter}>{this.state.shorter}</a> */}
                {this.renderShortURL()}
              </URLWrapper>
            </div>
          )}
          {showRanking && <RankingComponent />}
          {!showRanking && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => this.setState({ showRanking: true })}
            >
              Show Ranking
            </Button>
          )}{" "}
          {showRanking && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => this.setState({ showRanking: false })}
            >
              Shorten a URL
            </Button>
          )}
        </WrapperContent>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 35%;
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
  margin-bottom: 10px;
`;

const TextWrapper = styled.div`
  margin: 2px;
  margin-right: 15px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  align-self: center;
`;

const URLWrapper = styled.div`
  margin-bottom: 10px;
`;

const PageTitle = styled.h1`
  font-family: "Hammersmith One", sans-serif;
  font-size: 70px;
`;

const PageSubtitle = styled.h2`
  color: #6d6d6d;
`;

const Link = styled.div`
  cursor: pointer;
`;
