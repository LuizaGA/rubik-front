import styled from 'styled-components'

export const ContainerGeral = styled.div`
  margin-left: 15rem;
  padding-top: 3.5rem;
  background-color: #000000;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;


  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`

export const Dados = styled.div`
  text-align: center;
  width: 35%;
  height: 100%;

  img {
    width: 80%
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-top: 2rem;
  }

`

export const Musicas = styled.div`
    display: flex;
    flex-direction: column;

`
