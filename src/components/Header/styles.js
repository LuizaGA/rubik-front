import styled from 'styled-components'

export const ContainerGeral = styled.div`
  width: 100%;
  height: 70px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.img`
  height: 2.5rem;
  width: auto;
  background-color: transparent;
`

export const NomeSite = styled.h2`
  font-size: 2rem;
  margin-left: 1rem;
  color: #ffffff;
  font-family: 'Silkscreen', cursive;
`

export const Lista = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Item = styled.li`
  font-size: 1.2rem;
  text-decoration: none;
  margin-left: 1.5rem;
  color: #ffffff;
`

export const Menu = styled.img`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    height: 2rem;
  }
`
