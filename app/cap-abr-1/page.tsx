import Button, { ButtonWpp } from "@/src/components/button";
import Cards from "@/src/components/cards";
import Dropdown from "@/src/components/dropdown";
import { Header } from "@/src/components/header";
import Payment from "@/src/components/payment";
import Section from "@/src/components/section";
import Image from "next/image";

export default function Page() {

  const headerList = [
    'Tenha uma loja encantadora, onde os clientes voltam sempre.',
    'Aplique técnicas simples e eficazes para vender mais com encantamento.',
    'Fidelize seus clientes e transforme sua loja em uma marca irresistível.',
    'Use estratégias testadas por grandes marcas para faturar mais e se destacar!',
  ]

  const thisHappenAtYourCompany = [
    'Os clientes entram, olham, mas saem sem comprar?',
    'Você sente que precisa baixar preços para conseguir vender?',
    'Sua loja tem dificuldade em fidelizar clientes e vê eles comprando com a concorrência?',
    'Acha que seu atendimento poderia encantar mais, mas não sabe por onde começar?',
  ]
  const youWith = [
    'Vendas abaixo do esperado e metas não batidas.',
    'Clientes que compram uma vez e nunca mais voltam.',
    'Dependência de promoções e descontos para atrair clientes.',
    'Perdendo clientes para concorrentes que nem oferecem um produto tão bom quanto o seu.',
  ]

  const data = [
    'Aumento de faturamento em 4x na Luiza Barcelos de Cuiabá.',
    'Sucesso absoluto de vendas no Desapega by Malu.',
    'Estratégias aplicadas no São Jorge Café, garantindo mais clientes e vendas desde o primeiro dia.',
    '150% de aumento no faturamento do Supermercado São Jorge.',
  ]

  const dropdownData = [
    {
      title: 'O que exatamente é o Guia Estratégia de Vendas e Encantamento para Lojistas?',
      items: 'O Guia Estratégia de Vendas e Encantamento para Lojistas é um EBOOK digital, prático e direto, que ensina um passo a passo validado para vender mais, encantar clientes e transformar sua loja em uma referência no mercado. Você pode acessá-lo de qualquer dispositivo e aplicar as estratégias imediatamente.'
    },
    {
      title: 'Preciso ter experiência em vendas ou marketing para aplicar o método?',
      items: 'Não! O ebook foi criado para ser acessível tanto para iniciantes quanto para lojistas experientes. Ele traz estratégias diretas, simples e fáceis de implementar, mesmo que você nunca tenha estruturado um planejamento de vendas antes.'
    },
    {
      title: 'Quais são as formas de pagamento?',
      items: 'Você pode pagar no cartão de crédito em até 12x , boleto bancário (à vista), Pix ou até mesmo dividir em dois cartões.'
    },
    {
      title: 'Como posso acessar o Ebook?',
      items: 'Assim que sua compra for confirmada, você receberá um e-mail com o acesso imediato ao EBOOK. Ele será disponibilizado na plataforma para você ler no celular, tablet ou computador, e começar a aplicar as estratégias ainda hoje!'
    }
  ]


  const rightCardData = [
    'Clientes encantados desde o primeiro contato, prontos para comprar mais.',
    'Vendas sem depender de promoções, aplicando estratégias testadas.',
    'Fidelização garantida, transformando compradores em clientes recorrentes.',
    'Loja atrativa e desejada, onde os clientes querem estar.',
    'Time treinado para vender, com abordagens estratégicas e scripts testados!',
  ]

  const leftCardData = [
    'Clientes entram na sua loja, olham e vão embora sem comprar.',
    'Você precisa baixar preços para vender e ainda assim as vendas não decolam.',
    'Seus clientes compram uma vez e depois somem, sem fidelização.',
    'Sua loja não se destaca da concorrência e perde espaço no mercado.',
    'Você sente que seu atendimento poderia encantar mais, mas não sabe por onde começar.',
  ]

  const leftPaymentData = [
    'Passo a passo comprovado para atrair, encantar e fidelizar clientes.',
    'Método aplicável a qualquer loja, independente do segmento ou tamanho.',
    'Ebook prático e direto, fácil de aplicar no dia a dia do seu negócio.',
    'Scripts e estratégias testadas para treinar seu time e vender mais.',
  ]
  const rightPaymentData = [
    'Dicas de encantamento para transformar sua loja em uma experiência inesquecível.',
    'Conteúdo de alta qualidade criado por especialistas em vendas e encantamento.',
    'Acesso imediato ao material, para começar a aplicar hoje mesmo!',
  ]

  return (
    <>
      <Header
        title={<>Siga o passo a passo comprovado para <strong>atrair, encantar e fidelizar clientes</strong>, transformando sua loja em uma referência no mercado!</>}
        description={<>Pare de depender de promoções e perder vendas para a concorrência!</>}
        list={headerList}
        btn_text="QUERO VENDER MAIS!!"
      />
      <Section classNameS="py-12 sm:py-24 text-text1 linear px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center">
            <h4 className="text-2xl sm:text-4xl max-w-xl font-bold">Você enfrenta esses desafios na sua loja?</h4>
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
              <h3 className="text-2xl sm:text-3xl text-left font-bold">Isso acontece no seu negócio?</h3>
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
              <h3 className="text-2xl sm:text-3xl text-left font-bold">Você sofre <br className="hidden sm:block" />com isso?</h3>
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
            <h4 className="max-w-4xl text-2xl sm:text-3xl font-bold">Se você <span className="text-[#FF5F00]">disse sim</span> então o GUIA DE ESTRATÉGIAS DE VENDAS E ENCANTAMENTO PARA LOJISTAS foi feito para você!</h4>
            <div className="w-full sm:max-w-lg">
              <Button>QUERO ME DESTACAR DA CONCORRÊNCIA!</Button>
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
              leftCardTitle={<>Com o Guia de Estratégia de Vendas e Encantamento para Lojistas:</>}
              rightCardTitle={<>Sem um processo estruturado de vendas e encantamento:</>}
            />
          </div>
          <div>
            <Button>QUERO VENDER MAIS!</Button>
          </div>
        </div>
      </Section>
      <Section classNameS="py-12 sm:py-24 text-text1 linear px-4">
        <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-2xl sm:text-4xl font-bold">O que você vai encontrar neste EBOOK prático e direto ao ponto?</h4>
            <ul className="flex flex-col gap-4">
              <li>✅ Estratégias testadas e comprovadas para vender mais e encantar clientes.</li>
              <li>✅ Como transformar sua loja em um ambiente encantador e atrativo, onde os clientes adoram comprar.</li>
              <li>✅ As melhores abordagens e scripts de vendas para treinar seu time e fechar mais negócios.</li>
              <li>✅ Como fidelizar clientes e garantir que voltem sempre, sem precisar de promoções constantes.</li>
              <li>✅ Técnicas práticas para se destacar da concorrência e transformar sua loja em uma marca desejada e encantadora.</li>
            </ul>
            <div>
              <Button>QUERO ATRAIR, ENCANTAR E VENDER MAIS!</Button>
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
            <h4 className="text-3xl sm:text-4xl sm:max-w-xl font-bold">O que está incluso no seu investimento:</h4>
            {/* <p className="sm:text-xl">Pare de perder tempo e dinheiro com contratações erradas. Com um método validado, você vai formar um time produtivo e alinhado.</p> */}
          </div>
          <Payment
            leftData={leftPaymentData}
            rightData={rightPaymentData}
            de='DE R$000'
            porVezes='POR 12X DE'
            porValor='000'
            aVista='ou R$00,00 à vista.'
            hrefLink='https://google.com?'
            hrefLabel='QUERO FINALIZAR A MINHA COMPRA!'
          />
        </div>
      </Section>
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
              <h1 className="text-2xl text-4xl font-bold">Conheça <span className="text-[#FF7F01]">Malu Scaffi</span>, especialista em encantamento empresarial e criadora do Guia de Estratégia de Vendas e Encantamento para Lojistas:</h1>
              <hr className="w-96 border-[1px] border-black rounded-xl" />
              <div className="flex flex-col gap-4">
                <p>Empreendedora há mais de 6 anos, liderando 4 empresas, Malu Scaffi é referência em estratégias comerciais e encantamento de clientes. Mas o que faz dela uma especialista não é só o conhecimento teórico—ela aplicou essas estratégias nos seus próprios negócios e viu os resultados acontecerem!</p>
                <p>Desde o início, Malu sabia que não bastava apenas vender, era preciso encantar e criar experiências únicas. Foi assim que desenvolveu um método poderoso que multiplicou o faturamento das suas empresas e de diversas marcas que seguiam suas orientações.</p>
                <p>Hoje, depois de testar, validar e refinar suas estratégias, Malu quer ensinar você a fazer o mesmo no seu negócio.</p>
                <p>Resultados comprovados:</p>
              </div>
              <ul className="flex flex-col gap-4 max-w-xl">
                {data.map((item: string, index: number) => (
                  <li key={index} className="relative flex items-center ps-7">
                    <svg className="absolute left-0" width="20" height="20" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 13.6562C26 20.836 20.1797 26.6562 13 26.6562C5.8203 26.6562 0 20.836 0 13.6562C0 6.47655 5.8203 0.65625 13 0.65625C20.1797 0.65625 26 6.47655 26 13.6562Z" fill="#FF6100" />
                      <path d="M12.5584 7.00186C12.708 6.54121 13.3597 6.54121 13.5094 7.00186L14.8861 11.2389C14.9531 11.445 15.145 11.5844 15.3617 11.5844H19.8168C20.3012 11.5844 20.5025 12.2042 20.1107 12.4889L16.5064 15.1076C16.3312 15.2349 16.2578 15.4606 16.3248 15.6666L17.7015 19.9037C17.8512 20.3644 17.3239 20.7474 16.9321 20.4627L13.3278 17.8441C13.1525 17.7167 12.9152 17.7167 12.74 17.8441L9.13571 20.4627C8.74386 20.7474 8.21662 20.3644 8.36629 19.9037L9.74301 15.6666C9.80994 15.4606 9.73661 15.2349 9.56137 15.1076L5.95709 12.4889C5.56523 12.2042 5.76662 11.5844 6.25098 11.5844H10.7061C10.9227 11.5844 11.1147 11.445 11.1816 11.2389L12.5584 7.00186Z" fill="white" />
                    </svg>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <p>Criadora de estratégias testadas que fazem empresas venderem mais e encantarem seus clientes, sem depender de descontos ou sorte.</p>
                <p>Agora, no Guia - Estratégia de Vendas e Encantamento para Lojistas, Malu revela exatamente como os lojistas podem aplicar essas estratégias para atrair mais clientes, vender com encantamento e transformar sua loja em uma referência no mercado!</p>
              </div>
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
              <h1 className="text-2xl text-4xl font-bold">Garantia de 7 Dias <span className="text-[#FF7F01]">{`-`} Compra 100% Segura!</span></h1>
              <p className="text-lg">Ainda tem dúvidas? Fique tranquila! Sua compra é 100% segura e livre de riscos.</p>
              <p className="text-lg">A partir da confirmação do pagamento, você terá 7 dias para acessar e testar o Guia - Estratégia de Vendas e Encantamento para Lojistas. Se, por qualquer motivo, sentir que o material não é para você, basta solicitar o reembolso total, sem burocracia.</p>
              <p className="text-lg">Nosso compromisso é com sua satisfação e confiança. Você terá acesso completo ao guia e poderá decidir sem pressão.</p>
              <div><Button>QUERO ACESSAR O GUIA SEM RISCO!</Button></div>
            </div>
          </div>
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
              <p>Nossa equipe está disponível no <strong>WhatsApp</strong> para responder qualquer dúvida sobre o <strong>Guia Estratégia de Vendas e Encantamento para Lojistas</strong> e te ajudar a entender como ele pode transformar suas vendas.</p>
              <p>Se precisar de mais informações antes de garantir seu <strong>ebook</strong>, fale agora mesmo com um especialista e tome a melhor decisão para sua loja!</p>
              <ButtonWpp>QUERO FALAR COM <br />ESPECIALISTAS PELO WHATSAPP!</ButtonWpp>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}