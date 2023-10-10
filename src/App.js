import { useState } from "react";
import React from "react";
import foto1 from "./assets/foto1.jpg";
import logo from "./assets/logo.jpg";
import denilson from "./assets/denilson.jpg";
import nicolas from "./assets/nicolas.jpg";
import evelyn from "./assets/evelyn.jpg";
import './style/index.scss';
import Manycolor from "./components/manycolor";



function App() {
  return (
    <div className="pagall">
      <Manycolor />
      

      <main className="container mt-5">
        <div className="row">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
              <h1 className=" tx1 ">Seja bem vindo ao Site do Betel</h1>
              <a className="btn" href="https://clubes.adventistas.org/br/apl/24189/betel/">Saiba Mais! </a>
              </div>
              
              <div className="grad col-6">
              <img className="col-12 img1 " src={foto1}/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="container mt-4">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <h1 className="col-8 tx1a1 tx1 ">O clube de Desbravadores Betel é um clube 
              que visa o crescimento fisico mental e espiritual das crianças.</h1>
              <p className="tx2">Somos dos Desbravadores um ministério da Igreja Adventista do Sétimo dia que busca ajudar crianças a se desenvolverem fisicamente, mentalmente e espiritualmente os aproximando mais da natureza e de Jesus.</p>
            </div>
          </div>
        </div>
      </main>

      <main className="container mt-4">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-6">
              <h1 className=" tx1a1 tx1 ">História</h1>
              <p className="tx2">Nosso Clube já existe a mais de 30 anos. Temos uma história de muitas superações e milagres vindos diretamente das mãos do Criador. Várias gerações cresceram com esse clube, e hoje, temos o prazer de ver nossos filhos trilhando o mesmo caminho.
Somos mais do que um clube, somos uma família que zela pela salvação de cada um. Esse é o foco principal do nosso clube. Nossa verdadeira missão.
Venha participar conosco dessa caminhada!</p>
              </div>
              <img className="col-6" src={logo} />
            </div>
          </div>
        </div>
      </main>

      <main className="container mt-4">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <img className=" img2 col-6 " src={denilson} />
            
            <div className="col-6">
              <h1 className=" tx1a1 tx1 ">Membros - Diretor</h1>
              <p className="tx2">Nosso atual diretor do clube é Denilson Fonseca que está nesse cargo desde 2021. Já foi diretor em dois clubes, instrutor no Betel, é lider em desbravadores. Ele é quem comanda, organiza e responde pelo clube.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="container mt-5">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
            <div className="col-6">
              <h1 className=" tx1a1 tx1 ">Membros - Diretor Associado</h1>
              <p className="tx2">Nosso atual diretor associado do clube é Nicolas Sandoli que está nesse cargo desde 2021. Também já atuou como conselheiro. Ele é responsável por auxiliar o diretor, representa as unidades masculinas no clube e cuida das partes de atividades do clube. </p>
              </div>
              <img className=" img2 col-6 " src={nicolas} />
            </div>
          </div>
        </div>
      </main>

      <main className="container mt-5">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <img className=" img2 col-6 " src={evelyn} />
            
            <div className="col-6">
              <h1 className=" tx1a1 tx1 ">Membros - Diretora Associada</h1>
              <p className="tx2">Nossa atual diretora associada do clube é Evelyn Sandoli que está nesse cargo desde 2022. Também já atuou como diretora do Betel em 2016-2020 e como conselheira. Ela é responsável por auxiliar o diretor, representa as unidades femininas no clube e cuida das partes de design do clube. </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default App;
