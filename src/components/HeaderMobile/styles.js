import styled from 'styled-components'

export const ContainerGeral = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
`

export const Container = styled.div`
  width: 425px;
  background-color: #000000;
`

export const BtnFechar = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 2rem;
`

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 3rem 2rem;
`

export const ItemDestaque = styled.li`
  font-size: 2rem;
  text-decoration: none;
  margin-top: 1rem;
  color: #ffffff;
  font-weight: 700;
`

export const Item = styled.li`
  font-size: 1.5rem;
  text-decoration: none;
  margin-top: 1rem;
  color: #ffffff;

  :hover {
    color: #3dcf64;
    cursor: pointer;
  }
`
