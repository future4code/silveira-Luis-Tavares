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
    width: 25px;
    padding: 5px 10px;
`

let msgCompartilhar = () => {
    console.log(`Post compartilhado no ${this.nome}`)
}

export function SecaoCompartilhamento(props) {
        return (
            <ContainerCompartilhar>
                <IconeRedeSocial alt={  'Icone' } src={ iconeFacebook } nome="Direct" onClick={  msgCompartilhar } />
                <IconeRedeSocial alt={  'Icone' } src={ iconeTwitter } nome="Facebook" onClick={  msgCompartilhar } />
                <IconeRedeSocial alt={  'Icone' } src={ iconeDirect } nome="Twitter" onClick={ msgCompartilhar } />
            </ContainerCompartilhar>
        )
    }
