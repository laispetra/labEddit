import styled from "styled-components";

export const FormContainer = styled.div`
    margin-top: 50px;
`;

export const Form = styled.div`
    border-radius: 51px;
    display: grid;
    font-family: "Roboto Mono", monospace;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;
    width: 600px;
    height: 500px;
    margin: auto;
`;
export const Input = styled.input`
    font-family: "Roboto Mono", monospace;
`;

export const Button = styled.button`
  background-color: #fff;
  width: 80%;
  height: 30px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 51px;
  margin: 0 auto;
  margin-bottom: 20px;
  cursor: pointer;
  font-weight: bold;
  :hover{
    background-color: rgba(4, 210, 255, 0.12);
  }
  `;

