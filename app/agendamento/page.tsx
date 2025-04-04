"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Page() {

    useEffect(() => {
        setTimeout(() => {

            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }, 100)
    }, []);

    return (
        <div>
            <div className="bg-[#94031c] py-2">
                <p
                    className="text-white sm:justify-start justify-center text-md uppercase font-bold flex gap-4 whitespace-nowrap overflow-hidden text-ellipsis"
                // style={{ display: 'block', width: '100%' }}
                >
                    <span className="tracking-wider">Últimas Vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                    <span className="sm:block hidden">•</span>
                    <span className="tracking-wider sm:block hidden">Últimas vagas para esta semana</span>
                </p>
            </div>
            <div className="h-full sm:min-h-screen w-full bg-gradient-to-r from-[#111] to-[#000] flex items-start sm:items-center justify-center sm:pt-24 pt-16">
                <div className="w-full sm:max-w-7xl max-w-xl flex flex-col items-center text-center gap-12 sm:gap-32 px-4">
                    <div className="flex flex-col gap-12 sm:gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white text-xl sm:text-3xl font-medium">Você foi pré aprovado para agendar uma análise com a minha equipe!</h1>
                            <p className="text-white/80 sm:text-xl font-light">Clique abaixo e agende em um dos horários disponíveis:</p>
                        </div>
                        <div className="sm:h-[1000px] h-[800px]">
                            <div
                                className="calendly-inline-widget -mt-4 sm:-mt-16"
                                data-url="https://calendly.com/contato-fabianooliveiraadvogados/30min"
                                style={{ minWidth: '320px', height: '1000px' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:-mt-40  bg-gradient-to-r from-[#111] to-[#000] flex flex-col items-center gap-4 text-white text-center px-4 pb-16">
                <p className="sm:max-w-2xl text-base sm:text-xl"><strong>ATENÇÃO:</strong> Lembre-se que temos dezenas de pessoas interessadas na análise e você foi um dos selecionados, se você faltar à análise estará tirando a oportunidade de outro, que assim como você, deseja acabar com suas dívidas.</p>
                <p className="sm:max-w-2xl text-sm opacity-40 max-w-3xl font-light">Utilizamos cookies para oferecer uma experiência de atendimento proativa, aprimorar a navegação no site, analisar a utilização do site e ajudar em nossas atividades de marketing. Em alguns países, se você continuar a usar este site e se navegar para outra página, concorda que leu e aceitou a utilização de cookies.</p>
            </div>
            <footer className='bg-zinc-950 py-4 sm:py-8 flex justify-center items-center text-white border-t border-white/20'>
                <div className="flex justify-between items-center w-full max-w-3xl flex-col sm:flex-row gap-2 sm:gap-0 text-white">
                    <div className="relative sm:w-[200px] sm:h-[100px] w-[230px] h-[120px]">
                        <Image
                            src="/images/logo.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                            loading="eager"
                        />
                    </div>
                    <p>© Todos os direitos reservados</p>
                </div>
            </footer>
        </div>
    )
}