import React from "react";
import { Main as MainDiv} from "./MainStyle";

const Main = (props) => {
    return (
        <MainDiv>
            {props.children}
        </MainDiv>
    )
}

export default Main;