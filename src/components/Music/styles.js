import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 1rem;
  cursor: default;

  #musica {
    font-size: 1.2rem;
  }

  #artista {
    font-size: 1rem;
  }

  &:hover {
    background-color: #1e1e1e;
  }
`

export const Botao = styled.div`
  img {
    width: 2rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.2);
  }
`

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`