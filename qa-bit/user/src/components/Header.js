import styled from "styled-components";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const StyledHeader = styled.header`
    background-color: #94DAFF;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
    display:grid;
    grid-template-columns: 200px 1fr 200px;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    grid-column-gap: 20px;
`;

const LogoRecluta = styled(Link)`
    color: #396EB0;
    text-decoration: none;
    padding: 0 15px;
    svg{
        margin-top: 10px;
        float: left;
        padding-right: 5px;
    }
    b{
        font-weight: bold;
    }
`;

const SearchInput = styled.input`
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #0F00FF;
    background: rgb(57, 110, 176);
    padding: 10px 10px;
    color: #ffff;
`;

const ProfileUser = styled(Link)`
    color: #396EB0;
    text-decoration: none;
    font-weight: bold;
    padding: 0 20px;
`; 

function Header(){
    const {user} = useContext(UserContext);
    return(
        <StyledHeader>
        <LogoRecluta to={'/home'} className="Logo">
            <FontAwesomeIcon icon={faRocket} size="2x"/>
            <b>Reclutamiento</b>    
        </LogoRecluta>
        <form action="" className="search">
          <SearchInput type="text" placeholder="Search..."/>
        </form>
        {user && (<ProfileUser to={'/profile'} className="profile">{user.email}</ProfileUser>)}
        {!user && (
        <div>
            <ProfileUser to={'/login'} className="profile">Log In</ProfileUser>
            <ProfileUser to={'/register'} className="profile">Register</ProfileUser>
        </div>
        )}
      </StyledHeader>
    );
}

export default Header;