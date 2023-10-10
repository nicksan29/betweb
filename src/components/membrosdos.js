import React from 'react';

function Membrosdos(props) {
  return (
    <main className="container mt-5 mb-5">
    <div className="row">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
        <div className='grad2 col-6'>
          <img className=" img2 col-12 " src={props.img} />
        </div>
        
        <div className="col-6">
          <h1 className=" tx1a1 tx1 ">{props.titulo}</h1>
          <p className="tx2">{props.texto}</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  );
}

export default Membrosdos;

{/* <div>
<h2>{props.titulo}</h2>
<p>{props.conteudo}</p>
</div> */}
