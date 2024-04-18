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
import IconList from "./IconList";

const MainContainer = styled.div`
    border: 1px solid black;
    width: 100%;
    position: fixed;
`;

const FirstContainer = styled.div`
    display: flex;
    /* background-color: white; */
    justify-content: space-between;
    align-items: center;
    width: inherit;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #DDDDDD;
    padding: 15px 80px;
    margin: auto;
`;

const Container1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;
`;

const ShadowWrapper = styled.div`
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 25px;
    &:hover{
        background-color: #dedede;
    }
`;

const UserButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85px;
    height: 47px;
    border: 1px solid #DDDDDD;
    border-radius: 25px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        box-shadow: 3px 2px 4px 1px lightgrey;
    }
`;

const SecondContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function NavBar() {
    return (
        <MainContainer>
            <FirstContainer>
                <FaAirbnb size={38} color={theme.mainRed} />
                <TextInput />
                <Container1>
                    <ShadowWrapper>
                        Airbnb your space.
                    </ShadowWrapper>
                    <ShadowWrapper>
                        <TbWorld size={25}/>
                    </ShadowWrapper>
                    <UserButton>
                        <IoMenuSharp size={25} color={theme.iconGrey} />
                        <FaUserCircle size={30} color={theme.iconGrey} />
                    </UserButton>
                </Container1>
            </FirstContainer>
            <SecondContainer>
                <IconList/>
            </SecondContainer>
        </MainContainer>
    )
}
export default NavBar;