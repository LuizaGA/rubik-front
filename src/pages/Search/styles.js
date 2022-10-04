import styled from 'styled-components'

export const ContainerGeral = styled.div`
  margin-left: 15rem;
  padding: 2.5rem 2.5rem 0 2.5rem;
  background-color: #000000;

  h2 {
    font-size: 1.5rem;
    padding: 1rem 0 0 0;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #ffffff;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;

    h2 {
      margin-top: 1rem;
    }
  }

  @media only screen and (max-width: 664px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0;
    }
  }
`

export const Input = styled.input`
  padding: 0.5rem;
  width: 75%;
  border: 1px solid black;
  border-radius: 4px;

  @media only screen and (max-width: 1100px) {
    width: 65%;
  }

  @media only screen and (max-width: 880px) {
    width: 60%;
  }

  @media only screen and (max-width: 769px) {
    flex-grow: 1;
    margin-right: 2rem;
  }

  @media only screen and (max-width: 664px) {
    width: 80%;
    margin-right: 0;
  }

`

export const InputSubmit = styled.input`
  height: 2.5rem;
  width: 15rem;
  border: none;
  border-radius: 31rem;
  background-color: #286b45;
  color: white;
  font-size: 1rem;
  font-weight: 700;

  @media only screen and (max-width: 1440px) {
    width: 10rem;
  }

  @media only screen and (max-width: 664px) {
    width: 15rem;
    margin-top: 1rem;
  }
`