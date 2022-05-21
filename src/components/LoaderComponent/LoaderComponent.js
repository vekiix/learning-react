import React from "react";
import {Wrapper} from './LoaderComponentStyle.js'
import {ThreeDots} from "react-loader-spinner"


const LoaderComponent = () => {
    return(   
        <>
        <Wrapper>
            <ThreeDots
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />
        </Wrapper>     
        </>
    )
}

export default LoaderComponent