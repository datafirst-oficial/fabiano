import { ButtonCapt } from "@/src/components/button";
import { Card, CardItem2 } from "@/src/components/cards";
import { HeaderForms } from "@/src/components/header-forms";
import Section from "@/src/components/section";
import { Slider, Slider2 } from "@/src/components/slider";
import Image from "next/image";
import { ReactNode } from "react";

export default function Page() {

  const cards = [
    <span key={1} className="text-lg">Como usar as principais datas comerciais dos próximos 3 meses – Dia das Mães, Páscoa, Dia dos Namorados e Festa Junina – para gerar mais vendas.</span>,
    <span key={2} className="text-lg">Como atrair clientes e encher sua loja sem depender de sorte.</span>,
    <span key={3} className="text-lg">Como ativar seu time de vendas e garantir que eles batam metas.</span>,
    <span key={4} className="text-lg">Como criar campanhas encantadoras que realmente convertam.</span>,
    <span key={5} className="text-lg">Como estruturar um plano de ação para vender mais e crescer com previsibilidade.</span>,
  ]
  const cardsIcons = [
    <svg key={1} className="h-12 w-12 fill-[#FF5F00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" /></svg>,
    <svg key={2} className="h-12 w-12 fill-[#FF5F00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" /></svg>,
    <svg key={3} className="h-12 w-12 fill-[#FF5F00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" /></svg>,
    <svg key={4} className="h-12 w-12 fill-[#FF5F00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" /></svg>,
    <svg key={5} className="h-12 w-12 fill-[#FF5F00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480Zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm360-720h200-200Zm-200 0h480-480Z" /></svg>
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
                  <div className="flex flex-col gap-4">
                    {cardsIcons[index]}
                    <span>{item}</span>
                    <hr className="sm:hidden block border border-white/10" />
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6 sm:mt-12 flex flex-col gap-6 sm:gap-12 items-center px-4">
              <h4 className="max-w-4xl text-2xl sm:text-3xl font-bold text-white">Tudo isso em um <span className="text-[#FF5F00]">treinamento 100%</span> on-line e gratuito!</h4>
              <div className="w-full sm:max-w-lg">
                <ButtonCapt>QUERO ME DESTACAR DA CONCORRÊNCIA!</ButtonCapt>
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
            <div className="sm:w-96 w-[356px]">
              <ButtonCapt>QUERO ATRAIR, ENCANTAR <br className="block sm:hidden"/>E VENDER MAIS!</ButtonCapt>
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
          <div className="flex flex-col items-center gap-8">
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