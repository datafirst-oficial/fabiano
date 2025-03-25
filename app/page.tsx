import Button, { ButtonWpp } from "@/src/components/button";
import Cards from "@/src/components/cards";
import Dropdown from "@/src/components/dropdown";
import { Header } from "@/src/components/header";
import Payment from "@/src/components/payment";
import Section from "@/src/components/section";
import Image from "next/image";

export default function Page() {

  const headerList = [
    'Para quem já contratou funcionários que não se encaixaram e precisou demitir rapidamente.',
    'Para empresários que sentem dificuldade em encontrar candidatos alinhados com a cultura da empresa.',
    'Para quem sofre com alta rotatividade e quer um processo seletivo mais eficiente.',
    'Para quem quer um passo a passo validado para contratar com segurança e formar um time de alta performance.',
  ]

  const thisHappenAtYourCompany = [
    'Você não sabe como iniciar um processo seletivo eficiente e acaba contratando sem um método estruturado.',
    'Seus processos seletivos são baseados em achismo ou intuição, sem critérios claros para escolher o melhor candidato.',
    'Alta rotatividade, forçando você a contratar e treinar novos funcionários com frequência.',
    'Falta de clareza sobre o perfil ideal de cada cargo, resultando em contratações frustradas e improdutivas.'
  ]
  const youWith = [
    'Equipe desmotivada e com baixa produtividade.',
    'Funcionários solicitando demissão em pouco tempo.',
    'Prejuízos financeiros com treinamentos e demissões constantes.',
    'Exaustão por ter que fazer o trabalho do colaborador porque ele não sabe executar as próprias funções.'
  ]

  const data = [
    'Empreendedora há mais de 06 anos.',
    'Está à frente de 4 empresas, incluindo a MS Recrutamento e Desenvolvimento, sua mais nova empresa, inaugurada em 2025.',
    'Junto com a sua equipe já realizou mais de 600 contratações para os segmentos de varejo e prestação de serviço com processos seletivos, eficientes e estratégicos.',
    'Formou mais de 30 líderes, incluindo uma que se tornou sua sócia, comprovando sua expertise na construção de times de alta performance.',
    'Já treinou mais de 800 empresários, ajudando-os a aprimorar a gestão de equipes e otimizar suas empresas.'
  ]

  const dropdownData = [
    {
      title: 'O que exatamente é uma Jornada de Contratação Bem Sucedida?',
      items: 'A Jornada de Contratação Bem Sucedida é um guia prático que ensina um passo a passo validado para contratar sem erros, reduzir a rotatividade e formar um time de alta performance. Ele foi desenvolvido para ajudar empresários a estruturar um processo eficiente e seguro.'
    },
    {
      title: 'Preciso ter experiência com recrutamento para aplicar o método?',
      items: 'Não! O guia foi criado para ser acessível tanto para iniciantes quanto para empresários experientes. Ele traz estratégias diretas e simples de implementação, mesmo que você nunca tenha estruturado um processo de contratação antes.'
    },
    {
      title: 'Quais são as formas de pagamento?',
      items: 'Você pode pagar no cartão de crédito em até 12x , boleto bancário (à vista), Pix ou até mesmo dividir em dois cartões.'
    },
    {
      title: 'Como posso acessar o Guia?',
      items: 'Assim que a compra for confirmada, você receberá um e-mail com o acesso imediato ao Guia na plataforma.'
    }
  ]

  const rightCardData = [
    'Contratações erradas que geram prejuízo e retrabalho.',
    'Funcionários desalinhados e sem perfil adequado para o cargo.',
    'Rotatividade alta, forçando você a contratar e treinar sempre.',
    'Falta de clareza para escolher o candidato certo.',
    'Equipe desmotivada e baixa produtividade.'
  ]

  const leftCardData = [
    'Contratações certeiras, sem achismos.',
    'Funcionários alinhados à cultura da empresa desde o início.',
    'Redução da rotatividade e equipe mais estável.',
    'Processo seletivo estruturado, evitando erros e prejuízos.',
    'Time produtivo e motivado, gerando mais resultados.'
  ]

  const leftPaymentData = [
    'Passo a passo para contratar sem erros e formar uma equipe de alta performance.',
    'Método aplicável para qualquer empresa, independente de porte ou segmento.',
    'Guia prático, eficiente e fácil de implementar.',
    'Suporte via chat para dúvidas.'
  ]
  const rightPaymentData = [
    'Aplicável imediatamente para evitar contratações erradas e reduzir a rotatividade.',
    '1 ano de acesso completo à Jornada de Contratação Bem Sucedida.',
    'Criado por especialistas que entendem os desafios dos empresários.',
  ]

  return (
    <>
      <Header
        title={<><strong>Siga o passo a passo para contratar sem erros</strong>, reduzir a rotatividade e formar equipes de alta performance.</>}
        description={<>Pare agora mesmo de perder dinheiro com contratações erradas e equipes desalinhadas!</>}
        list={headerList}
        btn_text="QUERO ACERTAR NA CONTRATAÇÃO"
      />
      <Section classNameS="py-12 sm:py-24 text-text1 linear px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center">
            <h4 className="text-2xl sm:text-4xl max-w-xl font-bold">Você tem esses problemas na sua empresa?</h4>
            <div className="relative sm:w-[680px] h-[264px] w-full h-[275px]">
              <Image
                src="/images/image1.png"
                alt="Problemas na empresa"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="max-w-4xl flex flex-col sm:grid sm:grid-cols-2 gap-8 sm:gap-12">
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-2xl sm:text-3xl text-left font-bold">Isso acontece na sua empresa?</h3>
              <ul className="flex flex-col gap-2 sm:gap-10 text-left">
                {thisHappenAtYourCompany.map((item: string, index: number) => (
                  <li key={index} className="relative flex items-start ps-8 sm:text-xl">
                    <svg className="absolute top-1 left-0" width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8.65625" r="7.5" stroke="#0A70FF" />
                    </svg>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-2xl sm:text-3xl text-left font-bold">Você sofre <br className="hidden sm:block" />com:</h3>
              <ul className="flex flex-col gap-2 sm:gap-10 text-left">
                {youWith.map((item: string, index: number) => (
                  <li key={index} className="relative flex items-start ps-8 sm:text-xl">
                    <svg className="absolute top-1 left-0" width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8.65625" r="7.5" stroke="#0A70FF" />
                    </svg>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 sm:mt-12 flex flex-col gap-6 sm:gap-12 items-center">
            <h4 className="max-w-4xl text-2xl sm:text-3xl font-bold">Se você <span className="text-[#FF5F00]">disse sim</span> a qualquer item, então a Jornada de Contratação Bem Sucedida é para você!</h4>
            <div className="w-full sm:max-w-lg">
              <Button>QUERO CONTRATAR CERTO E EVITAR PREJUÍZOS!</Button>
            </div>
          </div>
        </div>
      </Section>
      <Section classNameS="py-12 sm:py-24 px-4 linear-4">
        <div className="flex flex-col items-center gap-4 sm:gap-8 text-center">
          <h4 className="text-3xl sm:text-4xl max-w-xl font-bold">Não é mágica - mas parece!</h4>
          <div>
            <Cards
              rightCardData={rightCardData}
              leftCardData={leftCardData}
              leftCardTitle={<>Com a Jornada de Contratação<br /> Bem Sucedida:</>}
              rightCardTitle={<>Sem um processo <br />estruturado:</>}
            />
          </div>
          <div>
            <Button>QUERO ACERTAR NA CONTRATAÇÃO!</Button>
          </div>
        </div>
      </Section>
      <Section classNameS="py-12 sm:py-24 text-text1 linear px-4">
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-2xl sm:text-4xl font-bold">O que você vai aprender na <span className="text-[#FF6100]">Jornada de Contratação Bem Sucedida?</span></h4>
            <ul className="flex flex-col gap-4">
              <li>✅ Como criar um processo seletivo eficiente para contratar as pessoas certas desde o início.</li>
              <li>✅ A estrutura ideal de uma vaga para atrair candidatos qualificados e alinhados com sua empresa.</li>
              <li>✅ A melhor forma de avaliar candidatos sem cair no erro de contratar apenas por feeling.</li>
              <li>✅ Como reduzir o turnover e evitar prejuízos com contratações erradas.</li>
              <li>✅ O método de integração que faz os novos colaboradores se adaptarem rápido e performar desde o primeiro dia.</li>
            </ul>
            <div>
              <Button>QUERO ACERTAR NA CONTRATAÇÃO!</Button>
            </div>
          </div>
          <div className="relative w-full sm:h-full h-[400px]">
            <Image
              src="/images/image2.png"
              alt="Jornada da Contratação Bem Sucedida"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Section>
      <Section classNameS="py-12 sm:py-24 linear-4 px-4">
        <div className="flex flex-col items-center gap-8 text-center text-text1">
          <div className="sm:max-w-3xl flex flex-col items-center gap-4 sm:gap-8">
            <h4 className="text-3xl sm:text-4xl sm:max-w-xl font-bold">Chegou a hora de <br />contratar do jeito certo!</h4>
            <p className="sm:text-xl">Pare de perder tempo e dinheiro com contratações erradas. Com um método validado, você vai formar um time produtivo e alinhado.</p>
          </div>
          <Payment
            leftData={leftPaymentData}
            rightData={rightPaymentData}
            de='DE R$297'
            porVezes='POR 6X DE'
            porValor='8,64'
            aVista='ou R$47,00 à vista.'
            hrefLink='https://pay.hotmart.com/T98242290X?off=ngpqku28&checkoutMode=10'
            hrefLabel='QUERO FINALIZAR A MINHA COMPRA!'
          />
        </div>
      </Section>
      <section className="bg-zinc-50">
        <div className="relative w-full flex items-center sm:items-center justify-center sm:px-4 py-8 sm:py-12 overflow-hidden">
          <Image
            src="/images/bg3.png"
            layout="fill"
            alt=""
            objectFit="cover"
            className="sm:block hi2dden"
          />
          <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-8 z-50">
            <div className="relative w-[194px] h-[220px] sm:w-[206px] sm:h-[248px]">
              <Image
                src="/images/image4.png"
                alt="Selo de garantia"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="max-w-4xl text-text1 flex flex-col gap-3 sm:gap-6 justify-start items-start sm:items-start sm:justify-start sm:text-left px-4 sm:px-0">
              <h1 className="text-2xl text-4xl font-bold">Garantia de 7 Dias <span className="text-[#FF7F01]">{`-`} Sem Risco para Você!</span></h1>
              <p className="text-lg font-semibold">Ainda há dúvida? Saiba que sua compra é 100% segura!</p>
              <p className="text-lg ">A partir dos dados do pagamento, você tem 7 dias para testar a Jornada de Contratação Bem Sucedida. Se por algum motivo você sentir que o material não é para você, basta solicitar o reembolso total, sem complicações.</p>
              <p className="text-lg">Nosso compromisso é com sua segurança e confiança. Você tem acesso completo ao guia e pode decidir sem pressão.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="relative h-[1700px] sm:h-full w-full flex items-start sm:items-center justify-center sm:px-4 py-8 sm:py-12 overflow-hidden">
          <Image
            src="/images/bg2.png"
            layout="fill"
            alt=""
            objectFit="cover"
            objectPosition="center"
            className="hidden sm:block"
          />
          {/* <div className="sm:hidden absolute top-0 w-full h-full bg-black/60"></div> */}
          <div className="w-full sm:max-w-6xl sm:grid sm:grid-cols-5 gap-12 sm:gap-12 flex flex-col z-50  ">
            <div className="col-span-3 text-text1 flex flex-col gap-3 sm:gap-6 justify-start items-start sm:items-start sm:justify-start sm:text-left px-4 sm:px-0">
              <h1 className="text-2xl text-4xl font-bold">Conheça <span className="text-[#FF7F01]">Malu Scaffi</span>, especialista em gestão de equipes e criadora da Jornada de Contratação Bem Sucedida:</h1>
              <hr className="w-96 border-[1px] border-black rounded-xl" />
              <ul className="flex flex-col gap-4 max-w-xl">
                {data.map((item: string, index: number) => (
                  <li key={index} className="relative flex items-center ps-10 sm:text-xl">
                    <svg className="absolute left-0" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 13.6562C26 20.836 20.1797 26.6562 13 26.6562C5.8203 26.6562 0 20.836 0 13.6562C0 6.47655 5.8203 0.65625 13 0.65625C20.1797 0.65625 26 6.47655 26 13.6562Z" fill="#FF6100" />
                      <path d="M12.5584 7.00186C12.708 6.54121 13.3597 6.54121 13.5094 7.00186L14.8861 11.2389C14.9531 11.445 15.145 11.5844 15.3617 11.5844H19.8168C20.3012 11.5844 20.5025 12.2042 20.1107 12.4889L16.5064 15.1076C16.3312 15.2349 16.2578 15.4606 16.3248 15.6666L17.7015 19.9037C17.8512 20.3644 17.3239 20.7474 16.9321 20.4627L13.3278 17.8441C13.1525 17.7167 12.9152 17.7167 12.74 17.8441L9.13571 20.4627C8.74386 20.7474 8.21662 20.3644 8.36629 19.9037L9.74301 15.6666C9.80994 15.4606 9.73661 15.2349 9.56137 15.1076L5.95709 12.4889C5.56523 12.2042 5.76662 11.5844 6.25098 11.5844H10.7061C10.9227 11.5844 11.1147 11.445 11.1816 11.2389L12.5584 7.00186Z" fill="white" />
                    </svg>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <p className=""><strong>Criadora do Guia:</strong> Jornada de Contratação Bem Sucedida, um método validado que ensina aos empresários a contratar com mais segurança, reduzir a rotatividade e formar equipes produtivas e alinhadas à cultura da empresa.</p>
              <div className="flex items-center gap-3">
                <Button>QUERO SUA AJUDA ATRAVÉS DO GUIA!</Button>
              </div>

              <div className="w-full max-w-md flex flex-col items-center gap-2 text-center sm:mt-0 mt-4">
                {/* <Calendar className="sm:flex hidden" /> */}
                {/* <Calendar className="flex sm:hidden mt-1" /> */}
              </div>
            </div>
          </div>
          <Image
            src="/images/bg5-sm.png"
            layout="responsive"
            width={`100`}
            height={`100`}
            alt=""
            objectFit="contain"
            className="absolute bottom-0 w-full sm:hidden"
          />
        </div>
      </section>
      <Section classNameS="pb-12 pt-20 sm:py-24 linear px-4">
        <div className="flex flex-col gap-8 sm:gap-16 items-center">
          <div>
            <div className="flex sm:flex-row flex-col gap-8">
              <div className="relative max-w-md h-[450px] sm:h-[420px] flex flex-col items-center gap-4 justify-end linear-2 rounded-3xl p-6">
                <Image
                  src="/images/image3.png"
                  alt="Jornada"
                  width={297}
                  height={392}
                  className="absolute -top-32"
                />
                <p className="text-center text-2xl text-white max-w-xs font-semibold">Tem alguma dúvida? Aqui está a resposta.</p>
                <Button>QUERO FINALIZAR A MINHA COMPRA!</Button>
              </div>
              <div className="flex flex-col gap-4 sm:text-left text-center">
                <h4 className="text-3xl font-bold">Dúvidas Frequentes:</h4>
                <div className="flex flex-col gap-2">
                  <Dropdown
                    data={dropdownData[0]}
                  />
                  <Dropdown
                    data={dropdownData[1]}
                  />
                  <Dropdown
                    data={dropdownData[2]}
                  />
                  <Dropdown
                    data={dropdownData[3]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full max-w-lg flex flex-col items-center gap-8 text-center">
              <h4 className="text-3xl sm:text-4xl max-w-xl font-bold">Tem mais alguma dúvida?</h4>
              <p>Nossa equipe está disponível no WhatsApp para responder qualquer dúvida sobre a Jornada de Contratação Bem Sucedida e te ajudar a tomar a melhor decisão para sua empresa.</p>
              <ButtonWpp>QUERO FALAR COM <br />ESPECIALISTAS PELO WHATSAPP!</ButtonWpp>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}