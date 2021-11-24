import { Component, useContext } from "react";
import SubHeader from "./SubHeader";
import styled from "styled-components";
import Input from "./Input";
import OtherButton from "./OtherButton";
import axios from 'axios';
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";
import { registrar } from "../actions/Session";

const Container = styled.div`
    padding: 30px 20px;
`;

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    register(){
        registrar({ email: this.state.email, password: this.state.password,},(data)=>{

        });
    }
    render(){
        return(<>
            <Container>
                <SubHeader>Register</SubHeader>
                <Input placeholder={'Put an email'} type="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})}/>
                <Input placeholder={'Password'} type="password" value={this.state.password} autocomplete={'new-password'} onChange={e => this.setState({password:e.target.value})}/>
                <OtherButton onClick={() => this.register()}>Register</OtherButton>
            </Container>
        </>);
    };
}

Register.contextType = UserContext;

export default Register;