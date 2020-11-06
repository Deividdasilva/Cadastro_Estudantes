import React, { useEffect, useState } from 'react';

import registerServices from "../../services/Register";

import { Link } from "react-router-dom";


function List(){

  const [ listRegister, setListRegister ] = useState([]);

  useEffect(()=>{

    async function fetchDataRegister(){
      const res = await registerServices.listRegister();
      setListRegister(res.data);
    }

    fetchDataRegister();

  },[]);

  const onClickDelete = async (i, id) => {

    var yes = confirm("Deseja excluir esse aluno?");


    if (yes===true) {

      const res = await registerServices.delete(id);

      if(res.success) {
        alert(res.message)
        const newList = listRegister
        newList.splice(i,1);
        setListRegister(newList);
      }
      else {
        alert(res.message);
      }
    }

  }

  return (
    <section>
      <table class="table" text="align-center">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Registro</th>
            <th scope="col">Nome</th>
            <th scope="col">Data Nascimento</th>
            <th scope="col">Cidade</th>
            <th scope="col">Nome da mãe</th>
            <th scope="col">Data Pagamento</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody >

          {
            listRegister.map((item, i)=>{
              return(
                <tr>
                  <th scope="row">{i}</th>
                  <td>{item.name_lastname}</td>
                  <td>{item.date_birth}</td>
                  <td>{item.city}</td>
                  <td>{item.name_mother}</td>
                  <td>{item.date_payment}</td>
                  <td>
                    <Link to={"/register/edit/"+item.id} class="btn btn-warning"> Edit </Link>
                    <a href="#" class="btn btn-danger" onClick={()=>onClickDelete(i,item.id)}> Delete </a>
                  </td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </section>
  )
}

export default List;
