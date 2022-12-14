import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem;
  cursor: default;
  margin-bottom: 0.3rem;

  #musica {
    font-size: 1.2rem;
  }

  #artista {
    margin-top: 0.1rem;
    font-size: 1rem;
  }

  &:hover {
    background-color: #4a4a4a;
  }

  #tocando {
    color: #3dcf64;
  }

  #container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 0.5rem;
    gap: 0.5rem;

    img {
      padding: 0 0.5rem;
      height: 1rem;
      cursor: pointer;
    }
  }



  @media only screen and (max-width: 1300px) {
    #musica {
      font-size: 1rem;
    }

    #artista {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 1000px) {
    #musica {
      font-size: 1.2rem;
    }

    #artista {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 800px) {
    #musica {
      font-size: 1rem;
    }

    #artista {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 769px) {
    #musica {
      font-size: 1.2rem;
    }

    #artista {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 530px) {
    #musica {
      font-size: 1rem;
    }

    #artista {
      font-size: 0.9rem;
    }

    #tempo {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 450px) {
    #musica {
      font-size: 0.9rem;
    }

    #artista {
      margin-top: 0.2rem;
      font-size: 0.8rem;
    }

    #tempo {
      font-size: 0.75rem;
    }
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

  @media only screen and (max-width: 450px) {
    img {
      width: 1.5rem;
    }
  }
`

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`