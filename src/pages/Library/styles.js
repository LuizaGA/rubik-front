import styled from 'styled-components'

export const ContainerGeral = styled.div`
  margin-left: 15rem;
  padding: 2.5rem 2.5rem 0 2.5rem;
  background-color: #000000;

  h2 {
    font-size: 1.5rem;
    padding: 1rem 0 0 0;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #ffffff;
  }

  h4 {
    color: white;
    padding: 1rem 0 0 0;
    margin: 5rem 0;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;

    h2 {
      margin-top: 1rem;
    }
  }
`
