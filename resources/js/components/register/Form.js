
import React, { useEffect, useState } from 'react';

import registerServices from "../../services/Register";

import { cpf } from 'cpf-cnpj-validator'; 


function Form(){

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

    let eventTypes = [
        { name: "1° Ano", value: 1 },
        { name: "2° Ano", value: 2 },
        { name: "3° Ano", value: 3 },
        { name: "4° Ano", value: 4 },
        { name: "5° Ano", value: 5 },
        { name: "6° Ano", value: 6 },
        { name: "7° Ano", value: 7 },
        { name: "8° Ano", value: 8 },
        { name: "9° Ano", value: 9 }
  ];


  const handleCpf = (value) => {
      
    let result = cpf.isValid(value);  
    if (!result) {  
        console.log('CPF não é válido'); 
    } else if (result){
        setCpfMother(value)
    }
    //console.log(result); 
    //console.log(value);    
}

    const saveRegister = async () => {

        
        const data = {
            name,dateBirth, series, cep, rua, numero, complemento, bairro, city, estado, nameMother, cpfMother, datePayment
        }

        const res = await registerServices.save(data);

        if (res.success) {
            alert(res.message);
        } else {
            alert(res.message);
        }
    }

    

  return(
    <div className="row">

      <div className="col-md-5">
          <label htmlFor="name">Nome*</label>
          <input 
              className="form-control"
              type="text"
              onChange={(event)=>setName(event.target.value)}
          />
      </div>

      <div className="col-md-3">
                <label htmlFor="dateBirth">Data do Nascimento*</label>
                <input 
                    className="form-control"
                    id="dateBirth"
                    type="date"
                    onChange={(event)=>setDateBirth(event.target.value)}
                />
      </div>

      <div className="col-md-2">
				<label htmlFor="series">Serie de Ingresso*</label>
				<select
					className="form-control"
					name="series"
                    type="text"
					onChange={(event)=>setSeries(event.target.value)}
				>
					<option value="">Serie</option>
					{
                        eventTypes && eventTypes.map((e, index) => {
                            return(
                                <option key={index} value={e.value}>{e.name}</option>
                            )
                        })
                    }
                    
				</select>
	  </div>

      <div className="col-md-2">
                <label htmlFor="cep">CEP*</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>setCep(event.target.value)}
                />
      </div>

      <div className="col-md-6">
                <label htmlFor="rua">Rua*</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>setRua(event.target.value)}
                />
      </div>

      <div className="col-md-2">
                <label htmlFor="numero">Número*</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>setNumero(event.target.value)}
                />
      </div>

      <div className="col-md-4">
                <label htmlFor="complemento">Complemento*</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>setComplemento(event.target.value)}
                />
      </div>

      <div className="col-md-3">
                <label htmlFor="bairro">Bairro*</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>setBairro(event.target.value)}
                />
      </div>

      <div className="col-md-6">
                <label htmlFor="city">Cidade</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>setCity(event.target.value)}
                />
      </div>

      <div className="col-md-3">
                <label htmlFor="estado">Estado*</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>setEstado(event.target.value)}
                />
      </div>

      <div className="col-md-6">
          <label htmlFor="nameMother">Nome da mãe*</label>
          <input 
              className="form-control"
              type="text"
              onChange={(event)=>setNameMother(event.target.value)}
          />
      </div>

      <div className="col-md-3">
                <label htmlFor="cpfMother">CPF da mãe*</label>
                <input 
                    className="form-control"
                    type="text"
                    onChange={(event)=>handleCpf(event.target.value)}
                    
                />
      </div>

      <div className="col-md-3">
                <label htmlFor="datepayment">Data do pagamento*</label>
                <input 
                    className="form-control"
                    type="date"
                    onChange={(event)=>setDatePayment(event.target.value)}
                />
      </div>

      <div>
        <div className="col-md-3"><br/>
            <button 
                class="btn btn-primary" 
                type="submit"
                onClick={()=>saveRegister()}
                >
                    Cadastrar
                </button>
        </div>
      </div>

     






      

    </div>
  )
}

export default Form;
