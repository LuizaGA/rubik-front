import React, { useState } from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FirstContainer, SecondContainer, ThirdContainer, ContainerTexto, ThirdContainerTexto, ImgCubo, TextoSpotify, TextoDestaque, ThirdTextoDestaque, TextoSecundario, ThirdTextoSecundario, TextoObs, Botao, TextoBotao, Search } from './styles'

import ArrowIcon from "../../../public/arrow-right.svg"
import ArrowDownIcon from "../../../public/arrow-down.svg"

function FAQ() {

  const [searchTerm, setSearchTerm] = useState("");
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);
  const [answer6, setAnswer6] = useState(false);


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
            <tr>
              <th>Ajuda rápida</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => setAnswer1(!answer1)}>
              <td>Não consigo redefinir a senha</td>
              {answer1 ?
                <td>
                  <img src={ArrowDownIcon} />
                </td>
                :
                <td>
                  <img src={ArrowIcon} />
                </td>
              }
            </tr>
            {answer1 ?
              <tr>
                <b>Endereço de e-mail antigo?</b>
                Você precisa ter acesso ao endereço de e-mail cadastrado na sua conta do Spotify para abrir o link de redefinição de senha que nós enviamos.
                Caso você não tenha acesso, estas são algumas opções:
                - Recupere o acesso ao endereço de e-mail, se possível.
                - Crie uma nova conta e comece do zero.
                <b>Nenhuma conta associada ao endereço de e-mail?</b>
                Tente inserir qualquer outro endereço de e-mail que você possa ter usado para criar uma conta.
                Se você acha que o e-mail foi alterado sem sua permissão, consulte Acha que sua conta foi invadida?

                <b>Não recebeu o e-mail de redefinição de senha?</b>
                Verifique as pastas de spam/lixo eletrônico ou qualquer outra pasta filtrada.
                Se você não tiver acesso ao seu endereço de e-mail, consulte “Endereço de e-mail antigo?”.

                <b>O link para redefinição de senha não funciona?</b>
                Redefina a senha novamente, mas desta vez abra o link do e-mail em uma janela anônima/privada do navegador.

                Redefinir sua senha

              </tr> : null
            }
            <tr onClick={() => setAnswer2(!answer2)}>
              <td>Tem algo errado com a minha conta</td>
              {answer2 ?
                <td>
                  <img src={ArrowDownIcon} />
                </td>
                :
                <td>
                  <img src={ArrowIcon} />
                </td>
              }
            </tr>
            {answer2 ?
              <tr>
                Se notar algo estranho, diferente ou corrompido, é possível que você tenha entrado em outra conta do Spotify.

                Verifique se estão faltando:

                Playlists/músicas curtidas
                Recursos do Premium
                Foto de perfil

                Fale com a gente se o problema continuar.

              </tr> : null
            }
            <tr onClick={() => setAnswer3(!answer3)}>
              <td>Não lembro minhas informações de login</td>
              {answer3 ?
                <td>
                  <img src={ArrowDownIcon} />
                </td>
                :
                <td>
                  <img src={ArrowIcon} />
                </td>
              }
            </tr>
            {answer3 ?
              <tr>
                Se você não se lembrar da sua senha, use a página de redefinição de senha.

                Se não se lembrar do seu e-mail ou nome de usuário, acesse a página de redefinição de senha e insira os endereços de e-mail que você pode ter usado para criar uma conta. Quando o endereço registrado no Spotify for inserido, aparecerá uma mensagem dizendo que o e-mail de redefinição de senha foi enviado.

                Observação: existem várias maneiras de se inscrever: usando um e-mail, um número de telefone, o Facebook, a Apple ou o Google. Tente fazer login usando essas opções para localizar sua conta.

                Redefinir sua senha

              </tr> : null
            }
            <tr onClick={() => setAnswer4(!answer4)}>
              <td>Ajuda para entrar com o Facebook</td>
              {answer4 ?
                <td>
                  <img src={ArrowDownIcon} />
                </td>
                :
                <td>
                  <img src={ArrowIcon} />
                </td>
              }
            </tr>
            {answer4 ?
              <tr>
                Para entrar no Spotify com sua conta do Facebook, use essa rede social na inscrição ou faça a vinculação.

                Também é possível exibir a foto e o nome do seu perfil do Facebook no app e encontrar seus amigos no Spotify com facilidade.

                Cadastre-se com o Facebook
              </tr> : null
            }
            <tr onClick={() => setAnswer5(!answer5)}>
              <td>Formas de pagamento</td>
              {answer5 ?
                <td>
                  <img src={ArrowDownIcon} />
                </td>
                :
                <td>
                  <img src={ArrowIcon} />
                </td>
              }
            </tr>
            {answer5 ?
              <tr>
                Para entrar no Spotify com sua conta do Facebook, use essa rede social na inscrição ou faça a vinculação.

                Também é possível exibir a foto e o nome do seu perfil do Facebook no app e encontrar seus amigos no Spotify com facilidade.

                Cadastre-se com o Facebook
              </tr> : null
            }
            <tr onClick={() => setAnswer6(!answer6)}>
              <td>Criar ou entrar em um plano Família</td>
              {answer6 ?
                <td>
                  <img src={ArrowDownIcon} />
                </td>
                :
                <td>
                  <img src={ArrowIcon} />
                </td>
              }
            </tr>
            {answer6 ?
              <tr>
                Você pode pagar pelo Spotify Premium de muitas maneiras:

                Cartão de crédito/débito
                Cartões pré-pagos
                PayPal
                Vales-presente
                Pagamento móvel
                Plano pré-pago
                Observação: os métodos variam de acordo com o país ou região.

                Para ver as formas de pagamento disponíveis no seu país, acesse www.spotify.com/premium e avance até a página de pagamento. Você não receberá nenhuma cobrança até confirmar os dados de pagamento.
              </tr> : null
            }
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