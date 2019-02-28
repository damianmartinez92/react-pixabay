//FUNCIONALES
import React, { Component } from 'react'

//COMPONENTES
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'


export default class App extends Component {
  state = {
    termino: '',
    imagenes: []
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=11751353-09eb9c33121cfa4d6c662ec50&q=${this.state.termino}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))  
  }

  datosBusqueda = termino => {
    this.setState({
      termino
    }, () => {
      this.consultarApi()
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
            <p className="lead text-center">Buscador de imágenes</p>
            <Buscador
              datosBusqueda={this.datosBusqueda}  
            />
            <Resultado 
              imagenes={this.state.imagenes} 
            />
        </div>
      </div>
    )
  }
}
