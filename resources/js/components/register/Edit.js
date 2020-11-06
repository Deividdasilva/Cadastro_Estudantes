import React, { useEffect, useState } from 'react';

import registerServices from "../../services/Register";


function Edit(props){

    const [ id, setId ] = useState(null);
    const [ name, setName] = useState(null);
    const [ dateBirth, setDateBirth] = useState(null);
    const [ series, setSeries] = useState(null);
    const [ cep, setCep] = useState(null);
    const [ rua, setRua] = useState(null);
    const [ numero, setNumero] = useState(null);
    const [ complemento, setComplemento] = useState(null);
    const [ bairro, setBairro] = useState(null);
    const [ city, setCity] = useState(null);
    const [ estado, setEstado] = useState(null);
    const [ nameMother, setNameMother] = useState(null);
    const [ cpfMother, setCpfMother] = useState(null);
    const [ datePayment, setDatePayment] = useState(null);
    
    

  useEffect(()=>{

    async function fetchDataRegister(){

        let id = props.match.params.id;
        const res = await registerServices.get(id);

        if(res.success) {
            console.log(res.data);
            const data = res.data
            setId(data.id)
            setName(data.name_lastname)
            setDateBirth(data.date_birth)
            setSeries(data.series)
            setCep(data.cep)
            setRua(data.rua)
            setNumero(data.numero)
            setComplemento(data.complemento)
            setBairro(data.bairro)
            setCity(data.city)
            setEstado(data.estado)
            setNameMother(data.name_mother)
            setCpfMother(data.cpf_mother)
            setDatePayment(data.date_payment)
        }
        else {
            alert(res.message)
        }
    }
    fetchDataRegister();

  },[]);

  const updateRegister = async () => {

    const data = {
        id, name, dateBirth, series, cep, rua, numero, complemento, bairro, city, estado, nameMother, cpfMother, datePayment
    }

    const res = await registerServices.update(data);

      if (res.success) {
          alert(res.message)
      } else {
          alert(res.message);
      }
  
    }


  return (
    <div className="row">

<div className="col-md-5">
          <label htmlFor="name">Nome*</label>
          <input 
              className="form-control"
              name="name"
              value={name}
              type="text"
              onChange={(event)=>setName(event.target.value)}
          />
      </div>

      <div className="col-md-3">
                <label htmlFor="dateBirth">Data do Nascimento*</label>
                <input 
                    className="form-control"
                    name="dateBirth"
                    value={dateBirth}
                    id="dateBirth"
                    type="date"
                    onChange={(event)=>setDateBirth(event.target.value)}
                />
      </div>

      

      <div className="col-md-2">
          <label htmlFor="series">Série de Ingresso*</label>
          <input 
              className="form-control"
              name="series"
              value={series}
              type="text"
              onChange={(event)=>setSeries(event.target.value)}
          />
      </div>

      <div className="col-md-2">
                <label htmlFor="cep">CEP*</label>
                <input 
                    className="form-control"
                    name="cep"
                    value={cep}
                    type="text"
                    onChange={(event)=>setCep(event.target.value)}
                />
      </div>

      <div className="col-md-6">
                <label htmlFor="rua">Rua*</label>
                <input 
                    className="form-control"
                    name="rua"
                    value={rua}
                    type="text"
                    onChange={(event)=>setRua(event.target.value)}
                />
      </div>

      <div className="col-md-2">
                <label htmlFor="numero">Número*</label>
                <input 
                    className="form-control"
                    name="numero"
                    value={numero}
                    type="text"
                    onChange={(event)=>setNumero(event.target.value)}
                />
      </div>

      <div className="col-md-4">
                <label htmlFor="complemento">Complemento*</label>
                <input 
                    className="form-control"
                    name="complemento"
                    value={complemento}
                    type="text"
                    onChange={(event)=>setComplemento(event.target.value)}
                />
      </div>

      <div className="col-md-3">
                <label htmlFor="bairro">Bairro*</label>
                <input 
                    className="form-control"
                    name="bairro"
                    value={bairro}
                    type="text"
                    onChange={(event)=>setBairro(event.target.value)}
                />
      </div>

      <div className="col-md-6">
                <label htmlFor="city">Cidade</label>
                <input 
                    className="form-control"
                    name="city"
                    value={city}
                    type="text"
                    onChange={(event)=>setCity(event.target.value)}
                />
      </div>

      <div className="col-md-3">
                <label htmlFor="estado">Estado*</label>
                <input 
                    className="form-control"
                    name="estado"
                    value={estado}
                    type="text"
                    onChange={(event)=>setEstado(event.target.value)}
                />
      </div>

      <div className="col-md-6">
          <label htmlFor="nameMother">Nome da mãe*</label>
          <input 
              className="form-control"
              name="nameMother"
              value={nameMother}
              type="text"
              onChange={(event)=>setNameMother(event.target.value)}
          />
      </div>

      <div className="col-md-3">
                <label htmlFor="cpfMother">CPF da mãe*</label>
                <input 
                    className="form-control"
                    name="cpfMother"
                    value={cpfMother}
                    type="text"
                    onChange={(event)=>setCpfMother(event.target.value)}
                />
      </div>

      <div className="col-md-3">
                <label htmlFor="datePayment">Data do pagamento*</label>
                <input 
                    className="form-control"
                    name="datePayment"
                    value={datePayment}
                    type="date"
                    onChange={(event)=>setDatePayment(event.target.value)}
                />
      </div>

      <div>
        <div className="col-md-3"><br/>
            <button 
                class="btn btn-primary" 
                type="submit"
                onClick={()=>updateRegister()}
            >
                    Salvar
            </button>
        </div>
      </div>

    </div>
  )

}

export default Edit;
