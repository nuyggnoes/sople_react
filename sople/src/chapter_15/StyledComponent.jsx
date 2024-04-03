import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background-color: grey;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

const Button = styled.button`
    color: ${(props) => props.dark ? "white" : "dark"};
    background: ${(props) => props.dark ? "black" : "white"};
    border: 1px solid black;
`

const Buttonn = styled.button`
    color: grey;
    border: 2px solid palevioletred;
`
const RoundedButton = styled(Buttonn)`
    border-radius: 16px;
`

function MainPage(props) {
    return (
        <Wrapper>
            <Title>
                Styled-Components
            </Title>
            <br />
            <Button>Normal</Button>
            <Button dark>Dark</Button>
            <br />
            <Buttonn>Normal</Buttonn>
            <RoundedButton>Rounded</RoundedButton>
        </Wrapper>
    );
}
export default MainPage;