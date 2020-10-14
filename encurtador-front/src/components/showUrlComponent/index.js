import React from 'react';
import styled from 'styled-components'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Close from '@material-ui/icons/Close';

export default class ShortUrlComponent extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            shorter: '',
            openAlert: false,
        }
    }

    componentWillMount(){
        console.log(this.props.shorter)
        this.setState({
            shorter: this.props.shorter,
        }, this.setState({ openAlert: true }))
    }

    componentDidUpdate(prevProps){
        if(prevProps.shorter !== this.props.shorter){
            console.log("prev", prevProps)
            console.log("props", this.props)
            this.setState({
                shorter: this.props.shorter,
            }, this.setState({ openAlert: true }))
        }
    }

    redirectLink = () => {
        window.open(`${this.state.shorter}`, "_blank");
        // window.location.href=`http://${this.state.shorter}`
    }

    render(){
        return (
            <Collapse in={this.state.openAlert}>
                <Alert severity="success" action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            this.setState({ openAlert: false })
                        }}
                    >
                        <Close fontSize="inherit" />
                    </IconButton>
                }>
                    <AlertTitle>Seu link foi gerado com sucesso!</AlertTitle>
                    <strong><Link onClick={this.redirectLink}>{this.state.shorter}</Link></strong>
                </Alert>
            </Collapse>
        );
    }
};

const Link = styled.div`
    cursor: pointer;
`;