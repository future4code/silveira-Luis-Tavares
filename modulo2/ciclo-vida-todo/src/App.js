import React from 'react'
import styled from 'styled-components'
import './styles.css'

// ------------ STYLED COMPONENTS ------------

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

// ------------ FUNCIONALIDADES ------------

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    this.setState({
      tarefas: JSON.parse(localStorage.getItem('tarefas'))
    })
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const tarefasAtualizadas = [...this.state.tarefas, novaTarefa];

    this.setState({
      tarefas: tarefasAtualizadas,
      inputValue: '',
    });
  }

  selectTarefa = (id) => {
    const alterarEstadoTarefa = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaListaTarefas = {
          ...tarefa, 
          completa: !tarefa.completa
        }

        return novaListaTarefas;
      } else {
        return tarefa;
      }
    })

    this.setState({tarefas: alterarEstadoTarefa});
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map((tarefa, key) => {
            return (
              <Tarefa
              key={key}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
