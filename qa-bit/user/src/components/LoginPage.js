import { Component, useContext } from "react";
import SubHeader from "./SubHeader";
import styled from "styled-components";
import Input from "./Input";
import OtherButton from "./OtherButton";
import axios from 'axios';
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

const Container = styled.div`
    padding: 30px 20px;
`;

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            redirectToHomePage: false,
        }
    }

    login(){
      
    }
    render(){
        return(<>
            {this.state.redirectToHomePage && (
                <Navigate to={'/home'} />
            )}
            <Container>
                <SubHeader>LogIn</SubHeader>
                <Input placeholder={'Put an email'} type="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})}/>
                <Input placeholder={'Password'} type="password" value={this.state.password} onChange={e => this.setState({password:e.target.value})}/>
                <OtherButton onClick={() => this.login()}>LogIn</OtherButton>
            </Container>
        </>);
    };
}

LoginPage.contextType = UserContext;

export default LoginPage;