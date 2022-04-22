import React from "react";
import { HeaderMainPage, HeaderMatchesPage } from "../../stylesHeader";

export function Header(props) {
    return (
        <>            
            {props.currentPage == "main" ? (
                <HeaderMainPage>
                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/4423/premium/4423669.png?token=exp=1650635236~hmac=2568f44e63820866350079c75da457e6" />
                        <h1>astromatch</h1>
                    </div>

                    <img onClick={() => props.changePage("matches")} src="https://cdn-icons-png.flaticon.com/512/7111/7111090.png" />
                </HeaderMainPage>
            ) : (
                <HeaderMatchesPage>
                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/4423/premium/4423669.png?token=exp=1650635236~hmac=2568f44e63820866350079c75da457e6" />
                        <h1>astromatch</h1>
                    </div>
                    
                    <img onClick={() => props.changePage("main")} src="https://cdn-icons.flaticon.com/png/512/5464/premium/5464039.png?token=exp=1650640303~hmac=a69032970491c06c7415f2d554fb0df5" />
                </HeaderMatchesPage>
            )}
        </>
    );
}