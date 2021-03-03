import React, { useState } from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn() {
    console.log(email, password);
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email : ">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Informe seu email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                      <FormGroup label="Senha : ">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Senha"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormGroup>
                      <button type="button" className="btn btn-outline-success" onClick={signIn}>
                        Entrar
                      </button>
                      <button type="button" className="btn btn-outline-info" style={{marginLeft: 10}}>
                        Cadastre-se
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
