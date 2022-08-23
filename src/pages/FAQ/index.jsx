import React, { useState } from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FirstContainer, SecondContainer, ThirdContainer, ContainerTexto, ThirdContainerTexto, ImgCubo, TextoSpotify, TextoDestaque, ThirdTextoDestaque, TextoSecundario, ThirdTextoSecundario, TextoObs, Botao, TextoBotao, Search } from './styles'

function FAQ() {

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div>
      <Header />

      <FirstContainer>
        <ContainerTexto>
          <TextoSpotify>ATENDIMENTO DO RUBIK</TextoSpotify>
          <TextoDestaque>Como podemos ajudar?</TextoDestaque>
          <TextoSecundario><u>Faça log in</u> para ter ajuda mais rápido</TextoSecundario>
        <Search>
          <input type="text" placeholder="Buscar" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </Search>
        <table>
          <tbody>
            <tr>
              <td>Ajuda com pagamentos</td>
              <td>Ajuda com o plano</td>
              <td>Ajuda com o app</td>
            </tr>
            <tr>
              <td>Ajuda com dispositivos</td>
              <td>Privacidade e Segurança</td>
              <td>Ajuda com a conta</td>
            </tr>
          </tbody>
        </table>
        </ContainerTexto>
      </FirstContainer>

      <SecondContainer>
        <table>
          <thead>
            <th>Ajuda rápida</th>
          </thead>
          <tbody>
            <tr>
              <td>Não consigo redefinir a senha</td>
              <td>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_29_15)">
                    <path d="M5.37164 2.66551L14.0706 12.331C14.2417 12.5212 14.2417 12.8098 14.0706 13L5.37164 22.6655" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_15">
                      <rect width="19" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
            <tr>
              <td>Tem algo errado com a minha conta</td>
              <td>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_29_15)">
                    <path d="M5.37164 2.66551L14.0706 12.331C14.2417 12.5212 14.2417 12.8098 14.0706 13L5.37164 22.6655" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_15">
                      <rect width="19" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
            <tr>
              <td>Não lembro minhas informações de login</td>
              <td>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_29_15)">
                    <path d="M5.37164 2.66551L14.0706 12.331C14.2417 12.5212 14.2417 12.8098 14.0706 13L5.37164 22.6655" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_15">
                      <rect width="19" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
            <tr>
              <td>Ajuda para entrar com o Facebook</td>
              <td>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_29_15)">
                    <path d="M5.37164 2.66551L14.0706 12.331C14.2417 12.5212 14.2417 12.8098 14.0706 13L5.37164 22.6655" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_15">
                      <rect width="19" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
            <tr>
              <td>Formas de pagamento</td>
              <td>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_29_15)">
                    <path d="M5.37164 2.66551L14.0706 12.331C14.2417 12.5212 14.2417 12.8098 14.0706 13L5.37164 22.6655" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_15">
                      <rect width="19" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
            <tr>
              <td>Criar ou entrar em um plano Família</td>
              <td>
                <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_29_15)">
                    <path d="M5.37164 2.66551L14.0706 12.331C14.2417 12.5212 14.2417 12.8098 14.0706 13L5.37164 22.6655" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_15">
                      <rect width="19" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>


      </SecondContainer>

      <ThirdContainer>
        <ThirdContainerTexto>
          <ThirdTextoDestaque>Visite nossa Comunidade</ThirdTextoDestaque>
          <ThirdTextoSecundario>Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!
          </ThirdTextoSecundario>
        </ThirdContainerTexto>
        <Botao>
          <TextoBotao>Acesse a comunidade do Rubik</TextoBotao>
        </Botao>
      </ThirdContainer>

      <Footer />
    </div>
  )
}

export default FAQ