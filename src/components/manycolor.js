import React, { Component } from 'react';
import logo from "../assets/logo.jpg";

class Manycolor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradiente: 'linear-gradient(to right, #000, #000 )',
      gradientesDisponiveis: [
        
        'linear-gradient(to right, #000, #c9862d, #9340FF)',
        'linear-gradient(to right, #9340FF, #000, #c9862d )',
        'linear-gradient(to right, #c9862d, #9340FF, #000 )',
      ],
      
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.alterarGradiente, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  alterarGradiente = () => {
    const { gradiente, gradientesDisponiveis } = this.state;
    const gradienteAtualIndex = gradientesDisponiveis.indexOf(gradiente);
    const proximoIndex = (gradienteAtualIndex + 1) % gradientesDisponiveis.length;
    const novoGradiente = gradientesDisponiveis[proximoIndex];
    this.setState({ gradiente: novoGradiente });
  };

  render() {
    const { gradiente } = this.state;

    return (
      <div
      style={{
        background: gradiente,
        transition: 'background 1s ease'
      }}
    >
      <nav className="navsty navbar navbar-expand-md nav-bar-dark  mb-4">
        
        <img className="log col-1" src={logo}/>
        <p className="tlt col-2">BETEL</p>
        <div className="col-9 icon">
        <a className="navbar-brand text-white ml-4" href="#top">
              QUEM SOMOS
          </a>
        <a className="navbar-brand text-white ml-4" href="#top">
              HISTORIA
          </a>
        <a className="navbar-brand text-white ml-4" href="#top">
              MEMBROS
          </a>
        <a className="navbar-brand text-white ml-4" href="#top">
              EVENTOS
          </a>
        <a className="navbar-brand text-white ml-4" href="#top">
              UNIDADES
          </a>
        </div>
        </nav>
    </div>
    );
  }
}

export default Manycolor;
