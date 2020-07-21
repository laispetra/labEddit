import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { FormContainer, Form, Input, Button } from './styles'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/");
    }
  }, [history]);

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await Axios.post(`${baseUrl}/login`, loginBody);

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("username", response.data.user.username);
      alert("Login efetuado com sucesso!");
      history.push("/");
    } catch (error) {
      console.log(error);
      alert("Erro ao logar, tente novamente...");
    }
  };

  return (
    <FormContainer>
      <Form>
        <label>
          <strong>LOGIN</strong>
        </label>
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

        <Button onClick={handleLogin}>entrar</Button>
        <Button>cadastrar</Button>
      </Form>
    </FormContainer>
  );
}

export default LoginPage;
