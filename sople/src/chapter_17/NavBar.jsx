import React from "react";
import styled from "styled-components";
import { theme } from "./color";
// icons
import { FaAirbnb } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoMenuSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";


// components
import TextInput from "./TextInput";

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    max-width: 2000px;
    height: 80px;
    border-bottom: 1px solid #DDDDDD;
    padding: 15px 35px;
    margin: auto;
`;
const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;
`;

const Wrapper = styled.div`
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 25px;
    &:hover{
        background-color: #DDDDDD;
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85px;
    height: 47px;
    border: 1px solid #DDDDDD;
    border-radius: 25px;
    padding: 10px;
    &:hover{
        box-shadow: 3px 2px 4px 1px lightgrey;
    }
`;

function NavBar() {
    return (
        <MainContainer>
            <FaAirbnb size={38} color={theme.mainRed} />
            <TextInput />
            <CategoryContainer>
                <Wrapper>
                    Airbnb your space.
                </Wrapper>
                <Wrapper>
                    <TbWorld size={25}/>
                </Wrapper>
                <IconContainer>
                    <IoMenuSharp size={25} color={theme.iconGrey} />
                    <FaUserCircle size={30} color={theme.iconGrey} />
                </IconContainer>
            </CategoryContainer>
        </MainContainer>
    )
}
export default NavBar;