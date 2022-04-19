import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { BASE_URL, STUDENT } from "../../constants/requests";
import { ScreenContainer, ProfileContainer } from "./styles";
import { ChoiceButtons } from "../../components/ChoiceButtons/ChoiceButtons";
import { Header } from "../../components/Header/Header";

export function MainPage(props) {
    const [profile, setProfile] = useState([]);
    const [profileId, setProfileId] = useState("");

    const getProfileToChoose = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/${STUDENT}/person`);
            setProfile(response.data.profile);
            setProfileId(response.data.profile.id);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProfileToChoose();
    }, []);

    const choosePerson = async (boolean) => {
        try {
            const body = {
                id: profileId,
                choice: boolean
            }

            const response = await axios.post(`${BASE_URL}/${STUDENT}/choose-person`, body);
            getProfileToChoose();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            <Header
            currentPage={props.currentPage}
            changePage={props.changePage}
            />

            <ProfileContainer>
                <img src={profile.photo} />

                <p>{profile.name}, {profile.age}</p>
                <p>{profile.bio}</p>
            </ProfileContainer>
            
            <ChoiceButtons 
            choosePerson={choosePerson}
            />
        </div>
    )
}