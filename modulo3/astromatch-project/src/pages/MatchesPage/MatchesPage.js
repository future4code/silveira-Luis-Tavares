import React, { useEffect, useState } from "react";
import { BASE_URL, STUDENT } from "../../constants/requests";

import axios from "axios";
import { MatchesList } from "./styles";
import { Header } from "../../components/Header/Header";

export function MatchesPage(props) {
    const [matches, setMatches] = useState([]);

    const getMatches = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/${STUDENT}/matches`);
            setMatches(response.data.matches);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMatches();
    }, []);

    return (
        <div>

            <Header 
            currentPage={props.currentPage}
            changePage={props.changePage}
            />

            <ul>
                {matches.map((profile) => {
                    return (
                        <MatchesList>
                            <img src={profile.photo} />
                            <p>{profile.name}</p>
                        </MatchesList>
                    )
                })}
            </ul>
        </div>
    )
}