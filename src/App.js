//FUNCIONALES
import React, { Component } from 'react'

//COMPONENTES
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'


export default class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=11751353-09eb9c33121cfa4d6c662ec50&q=${this.state.termino}&per_page=30&page=${this.state.pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))  
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina
    if ( pagina === 1) return null
      pagina -= 1;

      this.setState({
        pagina
      },() => {
        this.consultarApi()
        this.scroll()
      }) 
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina
    pagina += 1;

    this.setState({
      pagina
    },() => {
      this.consultarApi()
      this.scroll()
    }) 
  }

  datosBusqueda = termino => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi()
    })
  }

  render() {
    return (
      <div className="app container mt-3">
        <div className="jumbotron">
        <h1 className="text-center">ReactPixabayApi</h1>
            <h1 className="lead text-center">Buscador de imágenes</h1>
            <Buscador
              datosBusqueda={this.datosBusqueda}  
            />
        </div>
          <div className="row justify-content-center">
              <Resultado 
                imagenes={this.state.imagenes} 
                paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
              />
          </div>    
      </div>
    )
  }
}
