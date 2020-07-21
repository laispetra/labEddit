import React, { useState } from "react";
import axios from "axios";
import { FormContainer, Form, Input, Button } from './styles'


import { useHistory } from "react-router-dom";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const signUp = () => {
    const body = {
      email: email,
      password: password,
      username: username,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
        body
      )
      .then(() => {
        alert("Conta criada com sucesso!");
        setEmail("");
        setUserName("");
        setPassword("");
        goToLoginPage();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <FormContainer>
    <Form>
      <label>
        <strong>CADASTRO DE USUÁRIO</strong>
      </label>
      <Input
        type="text"
        placeholder="Nome de usuário"
        value={username}
        onChange={handleUserName}
      />

      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={handleUpdateEmail}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChange={handleUpdatePassword}
      />

      <Button onClick={signUp}>Cadastrar</Button>
    </Form>
    </FormContainer>
  );
}

export default SignUp;
