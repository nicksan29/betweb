import React from 'react';

function Membros(props) {
  return (
    <main className="container mt-5 mb-5">
        <div className="row">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                <div className="col-6">
                <h1 className=" tx1a1 tx1 ">{props.titulo}</h1>
                <p className="tx2">{props.texto}</p>
                </div>
                <div className='grad col-6'>
                    <img className=" img2 col-12 " src={props.img} />
                </div>
                
             </div>
            </div>
        </div>
    </main>

  );
}

export default Membros;

{/* <div>
<h2>{props.titulo}</h2>
<p>{props.conteudo}</p>
</div> */}
