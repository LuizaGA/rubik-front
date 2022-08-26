import styled from 'styled-components'

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ContainerItem = styled.div`
  height: 14.5rem;
  width: 11.5rem;
  margin: 1rem;
  padding: 0.8rem;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 0.5rem;

  img {
    height: 7rem;
    width: 10rem;
    border: none;
    border-radius: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    padding: 0.8rem 0;
    color: #ffffff;
  }

  p {
    font-size: 0.8rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  :hover {
    /* height: 15.5rem;
    width: 12.5rem;
    justify-content: center;

    img {
      height: 8rem;
      width: 11rem;
    } */

    h3 {
      color: #3dcf64;
    }

    p {
      color: #3dcf64;
    }
  }
  @media only screen and (max-width: 426px) {
    height: 13rem;
    width: 9rem;
    margin: 1rem 0.5rem;

    img {
      height: 5rem;
      width: 7.5rem;
      border: none;
      border-radius: 0.5rem;
    }
  }
`