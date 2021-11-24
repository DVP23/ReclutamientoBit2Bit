import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";
import ButtonDesign from "./ButtonDesign";

const HeaderColumn = styled.div`
    display:grid;
    grid-template-columns: 1fr min-content;
    padding: 30px 20px;
    
`;


function Questions(){
    return(
        <main>
            <HeaderColumn>
                <SubHeader>Questions</SubHeader>
                <ButtonDesign to={'/question'}>Ask&nbsp;a&nbsp;Question</ButtonDesign>
            </HeaderColumn>
                <QuestionRow />
                <QuestionRow />
                <QuestionRow />
        </main>
    );
}

export default Questions;