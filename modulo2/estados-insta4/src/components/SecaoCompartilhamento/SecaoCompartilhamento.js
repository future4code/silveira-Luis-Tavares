import React from "react";
import styled from "styled-components";
import iconeDirect from '../../img/direct.svg'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'

const ContainerCompartilhar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const IconeRedeSocial = styled.img`
    width: 45px;
    padding: 5px 10px;
`
export function SecaoCompartilhamento() {
        return (
            <ContainerCompartilhar>
                { <IconeRedeSocial alt={  'Icone' } src={ iconeFacebook } /* onClick={  } */ /> }
                { <IconeRedeSocial alt={  'Icone' } src={ iconeTwitter } /* onClick={  } */ /> }
                { <IconeRedeSocial alt={  'Icone' } src={ iconeDirect } /* onClick={  } */ /> }
            </ContainerCompartilhar>
        )
    }
