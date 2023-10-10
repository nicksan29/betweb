import { useState } from "react";
import React from "react";
import foto1 from "./assets/foto1.jpg";
import logo from "./assets/logo.jpg";
import de from "./assets/de.jpg";
import ni from "./assets/ni.jpg";
import eve from "./assets/eve.jpg";
import dan from "./assets/dan.jpg";
import dani from "./assets/dani.jpg";
import gau from "./assets/gau.jpg";
import kel from "./assets/kel.jpg";
import kle from "./assets/kle.jpg";
import leo from "./assets/leo.jpg";
import ram from "./assets/ram.jpg";
import wes from "./assets/wes.jpg";
import './style/index.scss';
import Manycolor from "./components/manycolor";
import Membros from "./components/membros";
import Membrosdos from "./components/membrosdos";



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

      <Membrosdos titulo="Membros - Diretor"
      texto="Nosso atual diretor do clube é Denilson Fonseca que está nesse cargo desde 2021. Já foi diretor em dois clubes, instrutor no Betel, é lider em desbravadores. Ele é quem comanda, organiza e responde pelo clube."
      img={de}
      />

      <Membros titulo="Membros - Diretor Associado"
      texto="Nosso atual diretor associado do clube é Nicolas Sandoli que está nesse cargo desde 2021. Também já atuou como conselheiro. Ele é responsável por auxiliar o diretor, representa as unidades masculinas no clube e cuida das partes de atividades do clube."
      img={ni}
      />

      <Membrosdos titulo="Membros - Diretora Associada"
      texto="Nossa atual diretora associada do clube é Evelyn Sandoli que está nesse cargo desde 2022. Também já atuou como diretora do Betel em 2016-2020 e como conselheira. Ela é responsável por auxiliar o diretor, representa as unidades femininas no clube e cuida das partes de design do clube."
      img={eve}
      />

      <Membros titulo="Membros - Secretário"
      texto="Nosso atual secretário do clube é Kelvin Paz que está nesse cargo desde 2023. Também já atuou como vice diretor em outro clube e como conselheiro. Ele é responsável por Mexer com o sistema, Documentos, agenda e cadastros."
      img={kel}
      />

      <Membrosdos titulo="Membros - Tesoureiro"
      texto="Nosso atual tesoureiro do clube é Leonardo Theodoro que está nesse cargo desde 2022. Também já atuou como conselheiro. Ele é responsável por Mexer com as finanças do clube. "
      img={leo}
      />

      <Membros titulo="Membros - Conselheiro"
      texto="Nosso atual Conselheiro da unidade Leões de Judá do clube é Daniel Macas que está nesse cargo desde 2022. Ele é responsável por interagir e cuidar da unidades e de todos os desbravadores, ele é responsável por instruir e ajuda-los tanto dentro do clube como também acompanha-los fora do clube. "
      img={dan}
      />

      <Membrosdos titulo="Membros - Conselheiro Associado"
      texto="Nosso atual Conselheiro associado da unidade Leões de Judá do clube é Gabriel Gau que está nesse cargo desde 2023. Ele já foi capelão do clube. Ele é responsável por Auxiliar o conselheiro, interagir e cuidar da unidades e de todos os desbravadores, ele é responsável por instruir e ajuda-los tanto dentro do clube como também acompanha-los fora do clube. "
      img={gau}
      />

      <Membros titulo="Membros - Conselheira"
      texto="Nossa atual Conselheira da unidade Guerreiras de Simeão do clube é Danielle Deyse que está nesse cargo desde 2023. Ela já foi diretora de outro clube, e no Betel já foi Secretária e instrutora. Ela também é líder de Desbravadores Ela é responsável por interagir e cuidar da unidade e de todas as desbravadoras, ela é responsável por instruir e ajuda-las tanto dentro do clube como também acompanha-las fora do clube. "
      img={dani}
      />

      <Membrosdos titulo="Membros - Capelão"
      texto="Nosso atual Capelão do clube é Ramon Fontana que está nesse cargo desde 2022. Ele já foi Diretor associado e conselheiro do clube. Ele é responsável por cuidar da parte Espiritual do clube e das horas de meditações. "
      img={ram}
      />

      <Membros titulo="Membros - Capelão"
      texto="Nosso atual Capelão do clube é Klemer Nascimento que está nesse cargo desde 2022. Ele é responsável por cuidar da parte Espiritual do clube e dos estudos biblicos. "
      img={kle}
      />
      
      <Membrosdos titulo="Membros - Instrutor de Ordem unida"
      texto="Nosso atual instrutor de ordem unida é Wesley da Conceição que está nesse cargo desde 2019. Ele é responsável por cuidar da parte de ordem unida do clube. "
      img={wes}
      />
    </div>
  );
}

export default App;
