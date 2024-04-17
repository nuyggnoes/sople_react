import React from "react";
import styled from "styled-components";
import { theme } from "./color";
// icons
import { FaAirbnb } from "react-icons/fa6";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    max-width: 2000px;
    height: 80px;
    border: 1px solid grey;
    padding: 15px 35px;
    margin: auto;
`
const MainLogo = styled.div`
    width: 40px;
    height: 40px;
`

function NavBar(props) {
    return (
        <Wrapper>
            <FaAirbnb size={40} color={theme.red} />
        </Wrapper>
    )
}
export default NavBar;