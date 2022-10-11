import styled from 'styled-components'

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;

  @media only screen and (max-width: 1650px) {
    justify-content: space-around;
  }
`

export const ContainerItem = styled.div`
  height: 14.5rem;
  width: 11.5rem;
  //margin: 1rem;
  padding: 0.8rem;
  background-color: #2F2F2F;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 0.5rem; 
  cursor: pointer;

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
    background-color: #3C3C3C;

    h3 {
      color: #3dcf64;
    }

    p {
      color: #3dcf64;
    }
  }
  @media only screen and (max-width: 464px) {
    height: 13rem;
    width: 9rem;
    //margin: 1rem 0.5rem;

    img {
      height: 5rem;
      width: 7.5rem;
      border: none;
      border-radius: 0.5rem;
    }
  }
`
