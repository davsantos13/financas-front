import React, { useState } from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { Link } from "react-router-dom";

export default function UserRegister() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repitaPassword, setRepitaPassaword] = useState("");

  function signUp() {
    console.log(nome, email, password, repitaPassword);
  }

  return (
    <div className="container">
      <Card title="Cadastro de Usuário">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-lg-6">
            <div className="bs-component">
              <fieldset>
                <FormGroup label="Nome: ">
                  <input
                    placeholder="Digite seu nome"
                    className="form-control"
                    type="text"
                    id="nome"
                    name="nome"
                    onChange={(e) => setNome(e.target.value)}
                  />
                </FormGroup>
                <FormGroup label="Email: ">
                  <input
                    placeholder="Digite seu email"
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup label="Senha: ">
                  <input
                    placeholder="Digite sua senha"
                    className="form-control"
                    type="password"
                    id="senha"
                    name="senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup label="Confirmar Senha: ">
                  <input
                    placeholder="Confirme sua senha"
                    className="form-control"
                    type="password"
                    id="confirmaSenha"
                    name="confirmaSenha"
                    onChange={(e) => setRepitaPassaword(e.target.value)}
                  />
                </FormGroup>
                <br></br>
                <br></br>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={signUp}
                  >
                    Salvar
                  </button>
                  <Link
                    to="/login"
                    type="button"
                    className="btn btn-outline-info"
                    style={{ marginLeft: 10 }}
                  >
                    Voltar
                  </Link>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
