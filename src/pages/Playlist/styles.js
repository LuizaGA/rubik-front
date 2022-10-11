import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 15rem;
  padding-top: 4rem;
  background-color: #000000;
  padding-bottom: 1.5rem;
  max-width: 2000px;

  display: flex;
  flex-direction: column;
  color: white;

  #delete {
    background-color: #2F2F2F;
    margin: 0 2rem 1rem 2rem;
    padding: 1rem;
    align-self: flex-end;
    color: #D45151;

    img {
      height: 0.9rem;
      margin-right: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      margin: 0.1rem 0;
      padding: 0.05rem;
      cursor: pointer;
    }

    div:hover {
      background-color: black;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`

export const ContainerBotao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  margin: 0 2rem 1.5rem 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.3rem 0.5rem;
    cursor: pointer;

    img {
      height: 1.2rem;
      margin-right: 0.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }

  /* @media only screen and (max-width: 430px) {
    gap: 1rem;
    flex-direction: column;
  } */


`

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;

  h4 {
    color: white;
    padding: 1rem 0 0 0;
    margin: 5rem 0;
    text-align: center;
  }

  @media only screen and (max-width: 2000px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Dados = styled.div`
  text-align: center;
  width: 35%;
  height: 100%;

  img {
    width: 80%;
    max-width: 40rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    padding: 0 1rem;
    margin-top: 1rem;
    font-style: italic;
  }


  @media only screen and (max-width: 1300px) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 2.5rem;
    }

    img {
      margin-top: 1rem;
      width: 95%;
      max-width: 95%;
      min-width: 15rem;
    }
  }

  @media only screen and (max-width: 530px) {
    width: 90%;
    h2 {
      font-size: 1.3rem;
    }
    img {
      width: 15rem;
    }
  }
`

export const Musicas = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    width: 55%;
    gap: 0.5rem;
    max-width: 60rem;

  @media only screen and (max-width: 1000px) {
    width: 90%;
    max-width: 100%;
  }

  @media only screen and (max-width: 530px) {
    width: 95%;
  }
`
