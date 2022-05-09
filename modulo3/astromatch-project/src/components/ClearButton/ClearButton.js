import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 0 10px;
    margin-top: 3px;
    font-size: 1.1em;
`

export function ClearButton(props) {
    return (
        <>
            <Button onClick={props.clearFunction}>Clear</Button>
        </>
    )
}