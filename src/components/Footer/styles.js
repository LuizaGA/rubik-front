import styled from 'styled-components'

export const ContainerGeral = styled.div`
  width: 100%;
  height: auto;
  padding: 3rem 2rem;
  background-color: #000000;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 426px) {
    flex-direction: column;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
`

export const Logo = styled.img`
  height: 2.5rem;
  width: auto;
  background-color: transparent;

  @media only screen and (max-width: 768px) {
    height: 2rem;
  }
`

export const NomeSite = styled.h2`
  font-size: 2rem;
  margin-left: 0.7rem;
  color: #ffffff;
  font-family: 'Silkscreen', cursive;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Lista = styled.ul`
  list-style: none;

  @media only screen and (max-width: 426px) {
    margin-top: 2rem;
  }
`

export const PrimeiroItem = styled.li`
  font-size: 0.8rem;
  font-weight: 300px;
  letter-spacing: 3px;
  text-decoration: none;
  color: #919496;
  text-transform: uppercase;
  margin: 0.5rem 0rem;

  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 3px;
  }
`

export const Item = styled.li`
  font-size: 1rem;
  text-decoration: none;
  margin-top: 1.2rem;
  color: #ffffff;

  @media only screen and (max-width: 426px) {
    margin-top: 1rem;
  }

  :hover {
    color: #3dcf64;
    cursor: pointer;
  }
`

export const ContainerFinal = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media only screen and (max-width: 426px) {
    margin-top: 2rem;
  }
`

export const ItemPequeno = styled.p`
  font-size: 0.75rem;
  color: #919496;
  margin-right: 1rem;

  :hover {
    color: #3dcf64;
    cursor: pointer;
  }
`

export const LinkWrapper = styled.div`
  :hover {
    color: #3dcf64;
  }
`
