import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const Container = styled.section`
  background-image: url(https://images6.alphacoders.com/506/506593.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background-image: url(https://br.web.img3.acsta.net/newsv7/19/10/30/00/25/0765468.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 400px;
  width: 100%;
  height: 450px;
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
    text-align: center;
    border: none;
    outline: none;
  }
  button {
    margin-right: 0.5em;
    margin-bottom: 1em;
    padding: 1.1em;
    font-size: 1rem;
    border-radius: 2em;
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
  h3 {
    width: 50px;
    background-color: white;
    height: 50px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export default class App extends React.Component {
  state = {
    n1: "",
    operators: "",
    n2: "",
    result: ""
  };

  sum = () => {
    this.setState({
      result: this.state.n1 + this.state.n2,
      operators: "+"
    });
  };

  subtraction = () => {
    this.setState({
      result: this.state.n1 - this.state.n2,
      operators: "-"
    });
  };

  mult = () => {
    this.setState({
      result: this.state.n1 * this.state.n2,
      operators: "x"
    });
  };

  division = () => {
    this.setState({
      result: this.state.n1 / this.state.n2,
      operators: "/"
    });
  };

  clear = () => {
    this.setState({
      result: "",
      n1: "",
      operators: "",
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
      <Container>
        <Box>
          <Title>Calculadora</Title>
          <input
            type="number"
            onChange={this.handleChange1}
            value={this.state.n1}
          />
          <h3>{this.state.operators}</h3>
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
      </Container>
    );
  }
}
