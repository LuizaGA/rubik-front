import styled from 'styled-components'

export const ContainerGeral = styled.div`
  width: 100%;
  height: auto;
  background-color: #000000;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-left: 1rem;
    color: #ffffff;
    font-family: 'Silkscreen', cursive;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    color: #ffffff;
    margin-right: 1.5rem;
    font-size: 1rem;
  }

  p:hover {
    color: #3dcf64;
    cursor: pointer;
  }

  img {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    p {
      display: none;
    }

    img {
      display: flex;
      height: 2rem;
    }

    img:hover {
      cursor: pointer;
    }
  }
`

export const Botao = styled.div`
  background-color: #ffffff;
  color: #000000;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5rem;

  :hover {
    color: #3dcf64;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const ContainerMobile = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000;
  padding: 2rem;

  img {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 2rem;
  }
`

export const TextoMobileDestaque = styled.p`
  font-size: 2rem;
  text-decoration: none;
  margin-top: 1rem;
  color: #ffffff;
  font-weight: 700;

  :hover {
    cursor: pointer;
    color: #3dcf64;
  }
`

export const TextoMobile = styled.p`
  font-size: 1.5rem;
  text-decoration: none;
  margin-top: 1rem;
  color: #ffffff;

  :hover {
    color: #3dcf64;
    cursor: pointer;
  }
`

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 10rem;
  margin-right: 1rem;
  padding: 0.2rem 0.5rem;

  p {
    color: #ffffff;
    margin-right: 1rem;
    font-size: 1rem;
  }

  img {
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
