import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Bem vindo!</h1>
        <p className="lead">Esse é seu sistema de finanças</p>
        <p className="lead">Seu saldo atual é de R$ 5.000,00</p>
        <hr className="my-4"></hr>
        <p>
          E essa é sua área administrativa, utilize um dos menus ou botões
          abaixo para navegar pelo software
        </p>
        <p className="lead">
          <Link className="btn btn-info">Novo Lançamento</Link>
        </p>
      </div>
    </div>
  );
}
