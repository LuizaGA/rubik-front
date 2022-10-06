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

  @media only screen and (max-width: 768px) {
    margin-left: 0;

    h2 {
      margin-top: 1rem;
    }
  }
`
export const Label = styled.label`
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  display: block;
  margin: 1.5rem 0 0.5rem 0;

  ::placeholder {
    font-size: 0.6rem;
    font-family: 'Inter', sans-serif;
  }
`

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
`

export const Legenda = styled.legend`
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  display: block;
  margin: 1.5rem 0 0.5rem 0;
`
export const LabelMenor = styled.label`
  font-size: 0.8rem;
  margin-right: 1rem;
`

export const ContainerGenero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`

export const AreaSubmit = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const InputSubmit = styled.input`
  height: 3.5rem;
  width: 11rem;
  border: none;
  border-radius: 31rem;
  background-color: #286b45;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2rem;
`