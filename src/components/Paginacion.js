import React from 'react'


const Paginacion = props => (
    <div className="py-3">
        <button type="button" className="btn btn-info mr-1" onClick={props.paginaAnterior} >&larr; Anterior</button>
        <button type="button" className="btn btn-info" onClick={props.paginaSiguiente}>Siguiente &rarr;</button>
    </div>
)

export default Paginacion