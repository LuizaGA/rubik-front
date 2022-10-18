import styled from 'styled-components'

export const ContainerGeral = styled.div`
  width: 28rem;
  margin: 3rem auto;

  @media only screen and (max-width: 520px) {
    width: 25rem;
  }

  @media only screen and (max-width: 426px) {
    width: 21rem;
  }

  @media only screen and (max-width: 350px) {
    width: 18rem;
  }
`

export const ContainerLogo = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 426px) {
    height: 4rem;
  }
`

export const Logo = styled.img`
  height: 5rem;

  @media only screen and (max-width: 426px) {
    height: 3rem;
  }
`

export const NomeSite = styled.h3`
  font-size: 3rem;
  margin-left: 1rem;
  font-family: 'Silkscreen', cursive;
  cursor: pointer;

  @media only screen and (max-width: 426px) {
    font-size: 2rem;
    margin-left: 0.5rem;
  }
`

export const Texto = styled.h2`
  font-size: 2rem;
  margin: 2rem 0;
  font-weight: 700;
  text-align: center;

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`

export const Label = styled.label`
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
`

export const TextoObs = styled.p`
  font-size: 0.6rem;
  margin: 1.5rem 0;
  text-align: center;
`

export const Span = styled.span`
  color: #286b45;
  text-decoration: underline;
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
  margin-left: 8rem;

  @media only screen and (max-width: 520px) {
    margin-left: 6.5rem;
  }

  @media only screen and (max-width: 426px) {
    margin-left: 4.9rem;
  }

  @media only screen and (max-width: 350px) {
    margin-left: 3.5rem;
  }
`
