import styled from "styled-components";

const QuestionData = styled.div`
    color: #396EB0;
    text-align: center;
    display: inline-block;
    font-size: 1.1rem;
    margin-top: 7px;
    span{
        font-size: .7em;
        display: block;
        font-weight: bold;
        margin-top: 3.5px;
    }
`;

const TitleQuestion = styled.div`
    padding: 0 20px;
`;

const TagQuestions = styled.div`
    color: #396EB0;
    display: inline-block;
    margin-right: 3px;
    background-color: #ffff;
    padding: 5px;
    border-radius: 4px;
    font-size: .8rem;
`;

const LinkQuestion = styled.a`
    text-decoration: none;
    color: #396EB0;
    font-size: 1.4rem;
    display: block;
    margin-bottom: 7px;
    font-weight: bold;
`;

const StyledQuestionRow = styled.div`
    background-color: #E8F6EF;
    padding: 15px 15px 10px;
    display: grid;
    grid-template-columns: repeat(3, 50px) 1fr;
    border-top: 2px solid #035397;
`; 

const WaW = styled.div`
    display: inline-block;
    color: #396EB0;
    font-size: .7rem;
    float: right;
    padding: 10px 0;
`;

const LinkUser = styled.a`
    color: #396EB0;
    font-weight: bold;
`;

function QuestionRow(){
    return(
    <StyledQuestionRow>
        <QuestionData>
            0<span>votes</span>
        </QuestionData>
        <QuestionData>
            0<span>answers</span>
        </QuestionData>
        <QuestionData>
            0<span>views</span>
        </QuestionData>
        <TitleQuestion>
            <LinkQuestion>El titulo de la pregunta aqui va</LinkQuestion>
                <WaW>
                    asked 2 mins ago <LinkUser>PepePXNDX</LinkUser>
                </WaW>
                <TagQuestions>javascript</TagQuestions>
                <TagQuestions>quotes</TagQuestions>
                <TagQuestions>parsing</TagQuestions>
        </TitleQuestion>
    </StyledQuestionRow>
    );
}

export default QuestionRow;