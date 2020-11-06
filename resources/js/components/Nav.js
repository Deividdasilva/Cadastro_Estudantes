import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/register/index">Estudantes</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register/form">Cadastro</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register/edit/${id}">Alterar</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
