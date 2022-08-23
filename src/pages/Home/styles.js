import styled from 'styled-components'

export const ContainerGeral = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #19a889;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }
`

export const ContainerTexto = styled.div`
  width: 60%;
  padding-right: 4rem;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
  }
`

export const ImgCubo = styled.img`
  height: 20rem;
  border-radius: 1.5rem;

  @media only screen and (max-width: 1024px) {
    margin: 3rem auto;
  }

  @media only screen and (max-width: 426px) {
    height: 17rem;
    margin: 2rem auto;
  }
`

export const TextoSpotify = styled.p`
  font-size: 1rem;
  letter-spacing: 3px;
  color: #ffffff;

  @media only screen and (max-width: 426px) {
    font-size: 0.8rem;
  }
`

export const TextoDestaque = styled.h3`
  font-size: 3.5rem;
  color: #ffffff;
  font-weight: 700;
  margin: 3rem 0;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 2rem 0;
  }

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
  }
`

export const TextoSecundario = styled.h5`
  font-size: 1.5rem;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 426px) {
    font-size: 1rem;
  }
`

export const TextoObs = styled.h5`
  font-size: 0.8rem;
  color: #ffffff;

  @media only screen and (max-width: 426px) {
    font-size: 0.6rem;
  }
`

export const Botao = styled.div`
  width: 20rem;
  background-color: #000000;
  border-radius: 4rem;
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TextoBotao = styled.h5`
  font-size: 1rem;
  color: #ffffff;
  margin: 0.6rem 0rem;
  font-weight: 500;

  @media only screen and (max-width: 426px) {
    font-size: 0.8rem;
  }
`
