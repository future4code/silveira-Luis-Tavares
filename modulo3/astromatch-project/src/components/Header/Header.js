import React from "react";
import { HeaderMainPage, HeaderMatchesPage } from "../../stylesHeader";

import previousIcon from "../../assets/imgs/backward.png";
import astromatchLogo from "../../assets/imgs/tinder.png";
import matchesIcon from "../../assets/imgs/matches.png"

export function Header(props) {
    return (
        <>            
            {props.currentPage == "main" ? (
                <HeaderMainPage>
                    <div>
                        <img src={astromatchLogo} />
                        <h1>astromatch</h1>
                    </div>

                    <img onClick={() => props.changePage("matches")} src={matchesIcon} />
                </HeaderMainPage>
            ) : (
                <HeaderMatchesPage>
                    <div>
                        <img src={astromatchLogo} />
                        <h1>astromatch</h1>
                    </div>
                    
                    <img onClick={() => props.changePage("main")} src={previousIcon} />
                </HeaderMatchesPage>
            )}
        </>
    );
}