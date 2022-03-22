import React from 'react';
import styled from 'styled-components';

// ESTILO COMPONENTE

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    border: 1px solid black;
    padding: 15px 0px;
    margin-bottom: 10px;
`

const ImgInfo = styled.img`
    width: 50px;
    margin: 0px 10px;
`

const H3 = styled.h3`
margin-right: 5px;
`

// ESTRUTURA COMPONENTE

function CardPequeno(props) {
    return (
        <SmallCard>
            <ImgInfo src={ props.imagem } />
            <H3>{ props.info }</H3>
            <p>{ props.valorInfo }</p>
        </SmallCard>
    )
}

export default CardPequeno;