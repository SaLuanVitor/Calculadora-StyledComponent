import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const Box = styled.div`
  background-color: gray;
  max-width: 400px;
  width: 100%;
  height: 350px;
  border-radius: 2em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 30%;
    padding: 1em;
    border-radius: 1em;
    margin-bottom: 1em;
    border: none;
    outline: none;
  }
  button {
    margin-right: 0.5em;
    margin-bottom: 1em;
    padding: 1.1em;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  h2 {
    width: 40%;
    height: 100px;
    border-radius: 0.5em;
    color: red;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default class App extends React.Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  sum = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  subtraction = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  mult = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  division = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    });
  };

  clear = () => {
    this.setState({
      result: "",
      n1: "",
      n2: ""
    });
  };

  //BUSCANDO VALOR DO INPUT

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  render() {
    return (
      <>
        <Box>
          <Title>Calculadora</Title>
          <input
            type="number"
            onChange={this.handleChange1}
            value={this.state.n1}
          />
          <input
            type="number"
            onChange={this.handleChange2}
            value={this.state.n2}
          />
          <div>
            <button onClick={this.sum}>+</button>
            {}
            <button onClick={this.subtraction}>-</button>
            <button onClick={this.mult}>*</button>
            <button onClick={this.division}>/</button>
            <button onClick={this.clear}>C</button>
          </div>
          <h2>{this.state.result}</h2>
        </Box>
      </>
    );
  }
}
