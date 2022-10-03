import styled from 'styled-components'

export const ContainerGeral = styled.div`
  margin-left: 15rem;
  padding-top: 4rem;
  background-color: #000000;
  padding-bottom: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;

  @media only screen and (max-width: 2000px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;
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


  @media only screen and (max-width: 1300px) {
    h2 {
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1.5rem;
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
