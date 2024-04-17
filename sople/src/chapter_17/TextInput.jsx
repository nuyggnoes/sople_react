import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const StyledTextInput = styled.input`
    border: 1px solid #DDDDDD;
    border-radius: 45px;
    height: 45px;
    width: 400px;
    padding: 0px 15px;
    outline: none;
    box-shadow: 4px 4px 8px 1px #E8E8E8;
`;

const Wrapper = styled.div`
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF385C;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 6px;
    &:hover{
        background-color: #d13d58;
    }
`;


function TextInput() {
    return (
        <Container>
            <StyledTextInput placeholder="Search"/>
            <Wrapper>
                <FaSearch color="white"/>
            </Wrapper>
        </Container>
    );
}
export default TextInput;