import React, { useState } from 'react';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { FirstContainer, SecondContainer, ThirdContainer, ContainerTexto, ThirdContainerTexto, ImgCubo, TextoSpotify, TextoDestaque, ThirdTextoDestaque, TextoSecundario, ThirdTextoSecundario, TextoObs, Botao, TextoBotao, Search } from './styles'
import { useNavigate } from 'react-router-dom'

import ArrowIcon from "../../assets/icons/arrow-right.svg"
import ArrowDownIcon from "../../assets/icons/arrow-down.svg"
import FamilyPlan from "../../assets/imagens/plano-familia.webp"

function FAQ() {

  const [searchTerm, setSearchTerm] = useState("");
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);
  const [answer6, setAnswer6] = useState(false);

  const navigate = useNavigate()

  return (
    <div>
      <Header />

      <FirstContainer>
        <ContainerTexto>
          <TextoSpotify>ATENDIMENTO DO RUBIK</TextoSpotify>
          <TextoDestaque>Como podemos ajudar?</TextoDestaque>
          <TextoSecundario><u onClick={() => navigate('/login')}>Faça log in</u> para ter ajuda mais rápido</TextoSecundario>
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
              <tr className='answer'>
                <p>Você precisa ter acesso ao endereço de e-mail cadastrado na sua conta do Spotify para abrir o link de redefinição de senha que nós enviamos.</p>
                <p>Caso você não tenha acesso, estas são algumas opções:</p>
                <ul>
                  <li>Recupere o acesso ao endereço de e-mail, se possível.</li>
                  <li>Crie uma nova conta e comece do zero.</li>
                </ul>
                <p>Tente inserir qualquer outro endereço de e-mail que você possa ter usado para criar uma conta.</p>
                <p>Se você acha que o e-mail foi alterado sem sua permissão, consulte <a>Acha que sua conta foi invadida?</a></p>
                <p>Verifique as pastas de spam/lixo eletrônico ou qualquer outra pasta filtrada.</p>
                <p>Se você não tiver acesso ao seu endereço de e-mail, consulte <a>“Endereço de e-mail antigo?”</a>.</p>
                <p>Redefina a senha novamente, mas desta vez abra o link do e-mail em uma janela anônima/privada do navegador.</p>
                <a>Redefinir sua senha</a>

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
              <tr className='answer'>
                <p>Se notar algo estranho, diferente ou corrompido, é possível que você tenha entrado em outra conta do Spotify.</p>

                Verifique se estão faltando:

                <ul>
                  <li>Playlists/músicas curtidas</li>
                  <li>Recursos do Premium</li>
                  <li>Foto de perfil</li>
                </ul>

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
              <tr className='answer'>
                <p>Se você não se lembrar da sua senha, use a página de redefinição de senha.</p>

                <p>Se não se lembrar do seu e-mail ou nome de usuário, acesse a página de redefinição de senha e insira os endereços de e-mail que você pode ter usado para criar uma conta. Quando o endereço registrado no Spotify for inserido, aparecerá uma mensagem dizendo que o e-mail de redefinição de senha foi enviado.</p>

                <p>Observação: existem várias maneiras de se inscrever: usando um e-mail, um número de telefone, o Facebook, a Apple ou o Google. Tente fazer login usando essas opções para localizar sua conta.</p>

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
              <tr className='answer'>
                <p>Para entrar no Spotify com sua conta do Facebook, use essa rede social na inscrição ou faça a vinculação.</p>

                <p>Também é possível exibir a foto e o nome do seu perfil do Facebook no app e encontrar seus amigos no Spotify com facilidade.</p>

                <a>Cadastre-se com o Facebook</a>
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
              <tr className='answer'>
                <p>Você pode pagar pelo Spotify Premium de muitas maneiras:</p>
                <ul>
                  <li>Cartão de crédito/débito</li>
                  <li>Cartões pré-pagos</li>
                  <li>PayPal</li>
                  <li>Vales-presente</li>
                  <li>Pagamento móvel</li>
                  <li>Plano pré-pago</li>
                </ul>
                <p>Observação: os métodos variam de acordo com o país ou região.</p>

                <p>Para ver as formas de pagamento disponíveis no seu país, acesse <a>www.spotify.com/premium</a> e avance até a página de pagamento. Você não receberá nenhuma cobrança até confirmar os dados de pagamento.</p>
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
              <tr className='answer'>
                <p>O Premium Família é um plano com desconto para até 6 pessoas que moram juntas.</p>

                <p>Como cada membro do plano usa sua própria conta, não é necessário compartilhar uma senha e todo mundo pode manter suas próprias músicas e playlists salvas.</p>
                <img src={FamilyPlan}></img>
                <p>O Premium Família inclui:</p>

                <ul>
                <li><a>Match</a> – uma playlist compartilhada que combina o seu gosto musical com o de outras pessoas.</li>
                <li>O <a>Spotify Kids</a>, um app repleto de músicas para cantar junto, trilhas sonoras e playlists feitas especialmente para crianças.</li>
                <li><a>Filtros de conteúdo explícito</a>, para que o administrador do plano possa permitir ou bloquear músicas com conteúdo explícito para membros específicos do plano.</li>
                </ul>
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