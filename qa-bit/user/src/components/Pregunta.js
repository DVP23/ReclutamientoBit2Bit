import styled from "styled-components";
import OtherButton from "./OtherButton";
import SubHeader from "./SubHeader";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useState } from 'react';
import Input from "./Input";

const Container = styled.div`
    padding: 30px 20px;
`;

const QuestionBodyTextArea = styled.textarea`
    background: none;
    border: 3px solid #035397;
    color: #ffff;
    border-radius: 3px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    min-height: 200px;
    margin-bottom: 20px;
`;

const PreviewArea = styled.div`
    color: #ffff;
    padding 20px;
    background: none;
    border-radius: 3px;
    box-sizing: border-box;
    border: 3px solid #035397;
    margin-bottom: 20px;
`;


function Pregunta(){

    const [questionTitle, setQuestionTitle] = useState( '' );
    const [questionInfo, setQuestionInfo] = useState( '' );

    return(
        <Container>
            <SubHeader>Put your question.</SubHeader>
            <Input 
                type="text" 
                value={questionTitle} 
                onChange={e => setQuestionTitle(e.target.value)}
                placeholder="Title of the question..." />
            <QuestionBodyTextArea onChange={e => setQuestionInfo(e.target.value)} placeholder="Give more info of your question...">{questionInfo}</QuestionBodyTextArea>
            <PreviewArea>
                <ReactMarkdown plugins={[gfm]} children={questionInfo} />
            </PreviewArea>
            <OtherButton>Post question</OtherButton>
        </Container>
    );
}

export default Pregunta;