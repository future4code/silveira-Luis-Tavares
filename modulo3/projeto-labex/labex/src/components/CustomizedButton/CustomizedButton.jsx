import React from 'react';
import { Botao } from './styles';

export function CustomizedButton(props) {
  return (
    <Botao onClick={props.onClick} />
  );
;}