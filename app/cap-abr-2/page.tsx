import { ButtonCapt } from "@/src/components/button";
import { Card, CardItem2 } from "@/src/components/cards";
import { HeaderForms } from "@/src/components/header-forms";
import Section from "@/src/components/section";
import { Slider, Slider2 } from "@/src/components/slider";
import Image from "next/image";
import { ReactNode } from "react";

export default function Page() {

  const cards = [
    <span className="text-lg">Como usar as principais datas comerciais dos próximos 3 meses – Dia das Mães, Páscoa, Dia dos Namorados e Festa Junina – para gerar mais vendas.</span>,
    <span className="text-lg">Como atrair clientes e encher sua loja sem depender de sorte.</span>,
    <span className="text-lg">Como ativar seu time de vendas e garantir que eles batam metas.</span>,
    <span className="text-lg">Como criar campanhas encantadoras que realmente convertam.</span>,
    <span className="text-lg">Como estruturar um plano de ação para vender mais e crescer com previsibilidade.</span>,
  ]

  const carouselData1 = [
    '1', '2', '3', '4', '5', //'1', '2', '3', '4', '5'
  ]
  const carouselData2 = ['1', '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    // '10',
    // '11', 
    // '12', 
    // '13', 
    // '14', 
    // '15', 
    // '16', 
    // '17', 
    '18',
    '19',
    // '20',
    '21',
    '22',
    '23',
    // '24', 
    '25',
    '26',
    '27',
    // '28', 
    '29',
    // '30',
    '31',
    '32',
    '33',
    '34',
    // '35', 
    // '36', 
    // '37', 
    // '38', 
    // '39', 
    // '40',
    // '41', 
    // '42', 
    // '43', 
    // '44', 
    // '45'
  ]



  const cardsData = [
    'Quer vender mais e bater suas metas nos próximos 3 meses usando as datas sazonais a seu favor.',
    'Sente que sua loja tem potencial, mas falta estratégia para atrair clientes.',
    'Está cansado de ver seu time desmotivado porque não há movimento na loja.',
    'Quer criar campanhas estratégicas e parar de contar com a sorte para vender mais.',
    'Busca um método testado para estruturar suas ações e aumentar seu faturamento.'
  ]

  const data = [
    'Aumento de faturamento em 4x na Luiza Barcelos de Cuiabá.',
    'Sucesso absoluto de vendas no Desapega by Malu.',
    'Estratégias aplicadas no São Jorge Café, garantindo mais clientes e vendas desde o primeiro dia.',
    '150% de aumento no faturamento do Supermercado São Jorge.',
  ]

  return (
    <>
      <HeaderForms
        title={<>Venda mais e <span className="text-[#FF5F00]">bata suas metas nos próximos 3 meses</span> usando as datas sazonais a seu favor!</>}
        description={<>Um dia imersivo para planejar as estratégias de vendas dos próximos 3 meses da sua loja para sua loja fazer pico de 200k de faturamento.</>}
        list={[]}
        btn_text="QUERO PARTICIPAR DA IMERSÃO!"
      />
      <main>
        <Section classNameS="py-12 sm:py-24 text-text1 bg-zinc-900">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center px-4">
              <h4 className="text-2xl sm:text-4xl max-w-xl font-bold text-white">O QUE <span className="text-[#FF5F00]">VOCÊ VAI APRENDER</span> NESSA IMERSÃO DE VENDAS?</h4>
            </div>
            <div className="w-full max-w-6xl bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl sm:grid sm:grid-cols-3 flex flex-col items-center gap-6 py-12 border border-white/10 shadow-xl shadow-orange-800/20">
              {cards.map((item: ReactNode, index: number) => (
                <Card key={index}>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2 text-sm rounded-full border border-white/30 text-white bg-[#FF5F00] font-bold py-2 ps-2 pe-4 text-sm my-shadow">
                      <div className="bg-white rounded-full p-1">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M615.91-427H193.78q-22.08 0-37.54-15.46-15.46-15.45-15.46-37.54t15.46-37.54Q171.7-533 193.78-533h422.13L441.96-706.96q-15.96-15.95-15.74-37.61.21-21.65 16.17-37.6 15.96-14.96 37.61-15.18 21.65-.22 37.61 15.74l264 264q7.69 7.7 11.61 17.52 3.91 9.83 3.91 20.09t-3.91 20.09q-3.92 9.82-11.61 17.52L517.04-177.83q-15.52 15.53-37.11 15.53-21.58 0-37.54-15.53-15.96-15.95-15.96-37.82t15.96-37.83L615.91-427Z" /></svg>
                      </div>
                      <span className="text-lg">#0{index + 1}</span>
                    </div>
                    <span>{item}</span>
                    <hr className="sm:hidden block border border-white/10" />
                  </div>
                </Card>
              ))}
              <div className="p-6">
                <div className="p-6 rounded-3xl bg-white text-black flex flex-col gap-4">
                  <h4 className="text-xl font-bold text-left">Tudo isso em um treinamento <span className="text-[#FF5F00]">100% online e gratuito!</span></h4>
                  <ButtonCapt>QUERO PARTICIPAR!</ButtonCapt>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section classNameS="py-12 sm:py-24 px-4 bg-zinc-900 border-t border-t-white/10">
          <div className="sm:grid sm:grid-cols-3 gap-4 sm:gap-8 flex flex-col gap-6">
            <div className="flex flex-col items-start justify-start gap-8 text-white">
              <h4 className="text-2xl sm:text-4xl max-w-xl font-bold">O DAY TRAINING DE <br />VENDAS é para você que…</h4>
              <div className="hidden sm:block">
                <ButtonCapt>QUERO BATER MINHAS METAS!</ButtonCapt>
              </div>
            </div>
            <div className="col-span-2 sm:grid sm:grid-cols-2 flex flex-col gap-4">
              {cardsData.map((card: string, index: number) => (
                <CardItem2
                  key={index}
                  className={index === 4 ? 'col-span-2 py-6' : ''}
                  label={card}
                  icon={
                    <svg className={`absolute top-1 left-0 fill-[#FF5F00] h-8 w-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="m423.23-394.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69l-205.69 205.7ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Z" /></svg>
                  }
                />
              ))}
            </div>
            <div className="block sm:hidden">
              <ButtonCapt>QUERO BATER MINHAS METAS!</ButtonCapt>
            </div>
          </div>
        </Section>
        <Section classNameS="py-12 sm:py-24 text-text1 linear px-4 overflow-hidden">
          <div className="flex flex-col items-center gap-8">
            <h4 className="text-2xl sm:text-4xl font-bold">Veja o que nossas alunas dizem:</h4>
            <div className="relative w-full sm:max-w-3xl">
              <Slider carouselData={carouselData1} />
            </div>
            <div className="sm:w-full w-[356px]">
              <ButtonCapt>QUERO ATRAIR, ENCANTAR <br />E VENDER MAIS!</ButtonCapt>
            </div>
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
                <h1 className="text-2xl text-4xl font-bold"><span className="text-[#FF7F01]">Malu Scaffi</span></h1>
                <hr className="w-96 border-[1px] border-black rounded-xl" />
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="italic font-medium">Especialista em Gestão Empresarial.</p>
                    <p className="italic font-medium">Especialista em Encantamento Empresarial e Estratégias Comerciais.</p>
                  </div>
                  <p>Empreendedora há mais de 6 anos, liderando 4 empresas, sempre aplicando estratégias para vender mais e encantar clientes.</p>
                  <p>Já realizou mais de 300 ações comerciais que aumentaram o faturamento e engajaram clientes em segmentos como prestação de serviços, supermercados, cafeterias e até franquias de calçados</p>
                  <p className="font-bold">Resultados comprovados:</p>
                </div>
                <ul className="flex flex-col gap-2 max-w-xl">
                  {data.map((item: string, index: number) => (
                    <li key={index} className="relative flex items-center ps-7">
                      <svg className="absolute left-0 top-[2px]" width="20" height="20" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 13.6562C26 20.836 20.1797 26.6562 13 26.6562C5.8203 26.6562 0 20.836 0 13.6562C0 6.47655 5.8203 0.65625 13 0.65625C20.1797 0.65625 26 6.47655 26 13.6562Z" fill="#FF6100" />
                        <path d="M12.5584 7.00186C12.708 6.54121 13.3597 6.54121 13.5094 7.00186L14.8861 11.2389C14.9531 11.445 15.145 11.5844 15.3617 11.5844H19.8168C20.3012 11.5844 20.5025 12.2042 20.1107 12.4889L16.5064 15.1076C16.3312 15.2349 16.2578 15.4606 16.3248 15.6666L17.7015 19.9037C17.8512 20.3644 17.3239 20.7474 16.9321 20.4627L13.3278 17.8441C13.1525 17.7167 12.9152 17.7167 12.74 17.8441L9.13571 20.4627C8.74386 20.7474 8.21662 20.3644 8.36629 19.9037L9.74301 15.6666C9.80994 15.4606 9.73661 15.2349 9.56137 15.1076L5.95709 12.4889C5.56523 12.2042 5.76662 11.5844 6.25098 11.5844H10.7061C10.9227 11.5844 11.1147 11.445 11.1816 11.2389L12.5584 7.00186Z" fill="white" />
                      </svg>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <p>Criadora de estratégias testadas que fazem empresas baterem metas usando as datas sazonais a seu favor.</p>
                  <p>Agora, no DAY TRAINING DE VENDAS, Malu vai te ensinar exatamente como usar as próximas datas comerciais para encher sua loja e bater suas metas.</p>
                </div>
                <div className="flex items-center gap-3">
                  <ButtonCapt>QUERO GARANTIR MINHA VAGA GRATUITA!</ButtonCapt>
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
        <Section classNameS="pb-12 pt-12 sm:py-24 px-4 bg-zinc-900 overflow-hidden">
          <div className="flex flex-col items-center gap-8 px-4">
            <h2 className="text-2xl sm:text-4xl font-bodl text-white font-semibold text-center max-w-4xl">Conheça as <span className="text-[#FF5F00]">ações <br className="sm:hidden" /> comerciais que a Malu <br className="sm:hidden" />já criou</span> e que geraram <br className="sm:hidden" />grandes resultados!</h2>
            <div className="relative w-full max-w-[1700px]">
              <Slider2
                carouselData={carouselData2}
              />
            </div>
            <div>
              <ButtonCapt>QUERO PARTICIPAR!</ButtonCapt>
            </div>
          </div>
        </Section>
      </main>
      <footer className="flex items-center justify-center bg-zinc-800 py-4 border-t border-white/10">
        <p className="text-white">Todos os direitos reservados.</p>
      </footer>
    </>
  )
}