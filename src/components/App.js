import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './controlPresupuesto';

class App extends Component {

  state = {
    presupuesto: '',
    restante : '',
      gastos : {}
  }   


  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = ()=> {
    let presupuesto = prompt('cual es el presupuesto?');
    let resultado = validarPresupuesto(presupuesto);
    if (resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }else {
      this.obtenerPresupuesto();
    }
  }

    //Agregar al state
    agregarGasto = gasto => {

    //tomar una copia del state
      const gastos = {...this.state.gastos}
      //agregar el gasto al objeto del state
      
      
      gastos[`gasto${Date.now()}`] = gasto;
      
      //restar al prespuesto
      
      this.restarPresupuesto(gasto.cantidadGasto);
      
      
      //ponerlo en el state
      this.setState({
        gastos
      })
      
    }

    
    
    //Restar del presupuesto cuand ose crea el gasto
    
    restarPresupuesto = cantidad => {
      //leer el gasto
      let restar = Number(cantidad);
      //Tomar copia del state
      let restante = this.state.restante;

      //restar el gasto del state
      restante -= restar;
      restante = String(restante);

      //agregamos nuevo state
      this.setState({restante});
      
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
        gastos = {this.state.gastos}
        />
        <ControlPresupuesto
        presupuesto = {this.state.presupuesto}
        restante = {this.state.restante}/>
      
        </div>
      </div>
    </div>
   </div>
  )
}
}

export default App;
