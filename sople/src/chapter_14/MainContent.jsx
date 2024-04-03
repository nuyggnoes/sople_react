import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "100vw",
                height: "50vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p style={{fontSize: "2em"}}>안녕하세요. 테마 변경이 가능한 웹사이트입니다.</p>
            <button onClick={toggleTheme} style={{cursor:"pointer"}}>테마변경</button>
        </div>
    );
}

export default MainContent;