import React from "react";
import { HeaderContainer } from "./styles";

export function Header(props) {
    return (
        <HeaderContainer>            
            {props.currentPage == "main" ? (
                <>
                    <h1>Astromatch</h1>
                    <button onClick={() => props.changePage("matches")}>Matches</button>
                </>
            ) : (
                <>
                    <button onClick={() => props.changePage("main")}>Voltar</button>
                    <h1>Astromatch</h1>
                </>
            )}
        </HeaderContainer>
    );
}