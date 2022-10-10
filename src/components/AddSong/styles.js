import styled from 'styled-components'

export const ContainerGeral = styled.div`
  width: 100%;
  background-color: #2F2F2F;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.5rem;

  div {
    cursor: pointer;

    &:hover {
      color: #3dcf64;
    }

    p {
      margin-top: 0.2rem;
    }
  }
  
`