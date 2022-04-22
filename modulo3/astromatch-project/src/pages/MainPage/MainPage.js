import React, { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL, STUDENT } from "../../constants/requests";
import { ProfileContainer, BlurredContainer, InfoContainer, ProfilePicture, DescriptionContainer, UserBio } from "./styles";
import { ChoiceButtons } from "../../components/ChoiceButtons/ChoiceButtons";

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

            await axios.post(`${BASE_URL}/${STUDENT}/choose-person`, body);
            getProfileToChoose();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {/* -------- MAIN PAGE --------- */}

            <ProfileContainer>
                <BlurredContainer background={profile.photo} />
                    <ProfilePicture src={profile.photo} />

                    <DescriptionContainer>
                        <InfoContainer>
                            <p>{profile.name},</p>
                            <p>{profile.age}</p>
                        </InfoContainer>

                        <UserBio>{profile.bio}</UserBio>
                    </DescriptionContainer>

            </ProfileContainer>

            {/* -------- MAIN PAGE --------- */}
            
            <ChoiceButtons 
            choosePerson={choosePerson}
            />
        </>
    )
}