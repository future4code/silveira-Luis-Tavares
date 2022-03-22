import React from 'react';
import './App.css';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import minhaFoto from "./images/minha-foto.jpeg";
import logoTrabalho from "./images/work-logo.png"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Luis Felipe" 
          descricao="Olá, eu sou o Luis! Sou apaixonado por tecnologia, cinema e games. Atualmente sou estudante do curso Dev-Web fullstack da Labenu, e me encontro a cada dia em constante evolução no mundo da programação!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1647975201~hmac=05a458370265c665628851a68ac9e45e"
          info="E-mail:"
          valorInfo="luis_melotavares@hotmail.com"
        />

        <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/5521/premium/5521776.png?token=exp=1647975365~hmac=2395952976af2f2e2cb9bf93494c18c8"
          info="Endereço:"
          valorInfo="Rua da Glória, 210 - Glorinha, Rio Grande do Sul, Brasil."
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/725/725624.png"
          info="Telefone:"
          valorInfo="(51) 99738-7907"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ logoTrabalho } 
          nome="DaColônia Alimentos Naturais" 
          descricao="Auxiliar de operação de máquina." 
        />
        
        <CardGrande 
          imagem={ logoTrabalho } 
          nome="JLG Transportes" 
          descricao="Auxiliar de contabilidade." 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências Educacionais</h2>
        <CardGrande
          imagem="https://scontent.fccm7-1.fna.fbcdn.net/v/t1.6435-9/99296127_575260363119101_713037980717023232_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wmqazJCIjHIAX9KjcJ6&_nc_ht=scontent.fccm7-1.fna&oh=00_AT9ktX1tGdtT5r0U0RKPiIxiWHzHLFBDGxB-m_WU4lsY2A&oe=625F3808"
          nome="Labenu"
          descricao="Estudante da turma Silveira, do curso dev-web Fullstack."
        />

        <CardGrande
          imagem="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/71/33/a1/7133a1c6-a112-fd84-76a6-381b9fb34815/source/512x512bb.jpg"
          nome="Unisinos"
          descricao="Curso técnologo de Análise e Desenvolvimento de Sistemas em andamento."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1647975723~hmac=1e37b8c78790d3e3510c22f5035676de" 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/733/733609.png" 
          texto="Github" 
        />        
      </div>
    </div>
  );
}

export default App;
