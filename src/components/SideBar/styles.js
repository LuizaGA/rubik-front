import styled from 'styled-components'

export const ContainerGeral = styled.div`
  height: 100%;
  background-color: #1e1e1e;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;

  p {
    color: #ffffff;
    margin: 0 1rem;
    font-size: 1rem;
  }

  p:hover {
    color: #3dcf64;
    cursor: pointer;
  }

  :hover {
    color: #3dcf64;
    cursor: pointer;
  }

  img {
    height: 1rem;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  p {
    font-size: 0.7rem;
    color: #ffffff;
    margin-top: 0.8rem;
  }

  p:hover {
    color: #3dcf64;
    cursor: pointer;
  }
`
