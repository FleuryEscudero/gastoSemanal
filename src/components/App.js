import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';

class App extends Component {

  state = {
    presupuesto: '',
    restante : '',
      gastos : {}
  }   

    //Agregar al state
    agregarGasto = gasto => {

    //tomar una copia del state
      const gastos = {...this.state.gastos}
    //agregar el gasto al objeto del state
    

    gastos[`gasto${Date.now()}`] = gasto;
    
    this.setState({
      gastos
    })

    //ponerlo en el state

    }
    
    render (){
      
      return (
        <div className="App container">
    <Header
    titulo='Gasto Semanal'
    />
    <div className="contenido-principal contenido">
      <div className="row">
        <div className="one-half column">
        <FormularioGasto
          agregarGasto = {this.agregarGasto}/>
        </div>
        <div className="one-half column">
        <Listado
        gastos = {this.state.gastos}/>
        </div>
      </div>
    </div>
   </div>
  )
}
}


export default App;
