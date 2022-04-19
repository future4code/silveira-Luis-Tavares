import React from "react";

import { ButtonsContainer } from "./styles";

export function ChoiceButtons(props) {
    return (
        <ButtonsContainer>
            <span onClick={() => props.choosePerson(false)}>❌</span>
            <span onClick={() => props.choosePerson(true)}>💚</span>
        </ButtonsContainer>
    )
}