import styled from 'styled-components'

export const ContainerGeral = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 15rem;
  background-color: #1e1e1e;
  position: fixed;
  top: 0;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1.5rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
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

  img {
    height: 1rem;
  }

  :hover {
    color: #3dcf64;
    cursor: pointer;

    p {
      color: #3dcf64;
      cursor: pointer;
    }

    img {
      height: 1.5rem;
    }
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  /* margin-bottom: 3rem; */

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
