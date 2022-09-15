import styled from 'styled-components'

export const FirstContainer = styled.div`
  width: 100%;
  background-color: #0b6e4f;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }

  table {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin: 2rem 0rem;
  }

  td {
    height: 5rem;
    width: 15rem;
    background-color: #df9b6d;
    padding: 1rem;
    color: #ffffff;
    border-radius: 8px;
    border: 4px solid #0b6e4f;
    font-weight: 600;
  }

  td:hover {
    cursor: pointer;
  }
`

export const SecondContainer = styled.div`
  width: 100%;
  background-color: #232323;
  padding: 3rem 7rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: left;

  a {
    text-decoration: underline;
  }

  a:hover {
    cursor: pointer;
  }
  ul {
    list-style-position: inside;
  }

  li, p {
    font-weight: 300;
  }

  b {
    font-weight: bold;
  }

  .answer {
    line-height: 1.4rem;
    font-size: 13px;
  }

  tr {
    font-size: 1.2rem;
    color: #bcc4c0;
    align-self: left;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.2rem;
    width: 12rem;
  }

  table thead th {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
    padding-bottom: 1.5rem;
    display: flex;
    align-self: left;
    font-weight: 800;
  }

  table tbody td {
    font-size: 1rem;
    color: #ffffff;
    padding: 0.8rem 0rem;
    margin: 0.6rem 0rem 0.4rem;
    font-weight: 400;
    cursor: pointer;
  }

  table tbody td:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 426px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 4rem;
  }
`

export const ThirdContainer = styled.div`
  width: 100%;
  background-color: #121212;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }
`

export const ContainerTexto = styled.div`
  width: 60%;
  padding-right: 4rem;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
  }
`

export const ThirdContainerTexto = styled.div`
  width: 60%;
  padding-left: 2rem;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
  }
`

export const ImgCubo = styled.img`
  height: 20rem;
  border-radius: 1.5rem;

  @media only screen and (max-width: 1024px) {
    margin: 3rem auto;
  }

  @media only screen and (max-width: 426px) {
    height: 17rem;
    margin: 2rem auto;
  }
`

export const TextoSpotify = styled.p`
  font-size: 1rem;
  letter-spacing: 3px;
  color: #d9d9d9;
  font-weight: 600;
  margin-top: 2rem;

  @media only screen and (max-width: 426px) {
    font-size: 0.8rem;
  }
`

export const TextoDestaque = styled.h3`
  font-size: 3.5rem;
  color: #ffffff;
  font-weight: 700;
  margin: 2rem 0rem 4rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 2rem 0rem;
  }

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
  }
`

export const ThirdTextoDestaque = styled.h3`
  font-size: 2.5rem;
  color: #ffffff;
  font-weight: 700;
  margin: 2rem 0;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin: 2rem 0;
  }

  @media only screen and (max-width: 426px) {
    font-size: 1.5rem;
  }
`

export const TextoSecundario = styled.h5`
  font-size: 1.5rem;
  color: #d9d9d9;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 426px) {
    font-size: 1rem;
  }

  u {
    color: #ffffff;
    font-weight: 500;
  }

  u:hover {
    cursor: pointer;
  }
`

export const ThirdTextoSecundario = styled.h5`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 426px) {
    font-size: 0.8rem;
  }
`

export const TextoObs = styled.h5`
  font-size: 0.8rem;
  color: #ffffff;

  @media only screen and (max-width: 426px) {
    font-size: 0.6rem;
  }
`

export const Botao = styled.div`
  width: 20rem;
  background-color: #3dcf64;
  border-radius: 4rem;
  padding: 0.8rem 1rem;
  margin: 4rem 0rem 2.5rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  :hover {
    cursor: pointer;
    -webkit-transform: translate(200px, 200px);
    transform: scale(1.1) translate(0%, 0%);
  }
`

export const TextoBotao = styled.h5`
  font-size: 1rem;
  color: #000000;
  padding: 0.8rem 0.4rem;
  font-weight: 800;

  @media only screen and (max-width: 426px) {
    font-size: 0.8rem;
  }
`

export const Search = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 4rem;

  input {
    margin-bottom: 30px;
    width: 45rem;
    border-radius: 8px;
    border: 2px solid #d9d9d9;
    padding-left: 30px;
    margin-left: 1px;
    height: 2.5rem;
    font-size: 14px;
    background-image: url('/search.svg');
    background-position: 8px;
    background-repeat: no-repeat;
    background-size: 14px;
  }

  :focus {
    border: 2px solid #d9d9d9;
    border-radius: 8px;
    outline: none;
  }
`
