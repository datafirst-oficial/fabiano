import Image from "next/image";
import Button from "../components/button";
import Section from "../components/section";
import { SetStateAction } from "react";
import { SimpleCard } from "../components/cards";

export default function Pattern({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<SetStateAction<boolean>> }) {
    return (
        <>
            <main className="relative bg-black z-50">
                <Section classNameS="bg-zinc-950 sm:py-24 py-12 px-4">
                    {/* <div className="absolute left-0 w-[96px] h-[296px] bg-[#edbe32] blur-[180px]"></div> */}
                    <div className="flex flex-col gap-20 items-center">
                        <div className="max-w-5xl sm:grid sm:grid-cols-2 flex flex-col items-start gap-12 z-50">
                            <div className="flex flex-col gap-4 sm:gap-16 text-left text-white">
                                <h3 className="text-3xl sm:text-4xl sm:text-6xl font-semibold">Com o <span className="text-[#ffde7c]">Planejamento Previdenciário</span> você irá:</h3>
                                <div className="flex flex-col gap-4">
                                    <p className="opacity-80 text-lg underline">Tenha acesso ao planejamento <br />previdenciário por um especialista:</p>
                                    <div className="max-w-sm sm:block hidden">
                                        <Button
                                            open={open}
                                            setOpen={setOpen}
                                        >Agendar consulta de <br />planejamento previdenciário</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <SimpleCard
                                    imagePath="money"
                                    title="Aposentar com um valor digno condizente ao seu padrão de vida"
                                    subtitle="Aumentando a sua aposentadoria em 3x, você conseguirá ter uma vida mais leve e com menos preocupações com o seu trabalho."
                                />
                                <SimpleCard
                                    imagePath="person"
                                    title="Alívio emocional"
                                    subtitle="Você pode deixar de lado as preocupações com o que deve pagar. Você terá clareza: um carnê do quanto deve pagar, com a certeza do quanto irá se aposentar."
                                />
                                <SimpleCard
                                    imagePath="rocket"
                                    title="Criar novas perspectivas"
                                    subtitle="Com a sua aposentadoria nas mãos de especialistas, você poderá focar ainda mais em mais ganhos, com a segurança de uma renda após o término dos trabalhos."
                                />
                            </div>
                            <div className="max-w-sm sm:hidden block">
                                <Button
                                    open={open}
                                    setOpen={setOpen}
                                >Agendar consulta de <br className="sm:block hidden" />planejamento previdenciário</Button>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="relative sm:py-24 py-12 px-4 border-y-4 border-white/20">
                    <div className="absolute left-0 bottom-0 sm:w-[524px] sm:h-[524px]">
                        <Image
                            src="/images/thinking.png"
                            alt="Imagem de pessoa pensando"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    {/* <div className="absolute left-0 w-[96px] h-[296px] bg-[#edbe32] blur-[180px]"></div> */}
                    <div className="flex flex-col gap-20 items-center">
                        <div className="max-w-5xl sm:grid sm:grid-cols-2 flex flex-col items-start gap-4 sm:gap-12 z-50">
                            <div className="flex flex-col gap-4 sm:gap-16 text-left text-white">
                                <h3 className="text-3xl sm:text-5xl font-semibold text-white"><span className="text-[#ffde7c]">Para quem é</span> o Planejamento Previdenciário?</h3>
                                <div className="flex flex-col gap-4">
                                    {/* <p className="opacity-80 text-lg underline">Tenha acesso ao planejamento <br />previdenciário por um especialista:</p> */}
                                    <div className="max-w-sm sm:block hidden">
                                        <Button
                                            open={open}
                                            setOpen={setOpen}
                                        >Solicitar planejamento previdenciário</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <SimpleCard
                                    title="Pessoas que possuem renda acima de 10 mil reais/mês"
                                />
                                <SimpleCard
                                    title="Pessoas que estão com uma idade suficiente para fazer o planejamento"
                                />
                                <SimpleCard
                                    title="Pessoas que ainda não deram entrada no INSS"
                                />
                                <SimpleCard
                                    title="Pessoas que querem antecipar e planejar a aposentadoria"
                                />
                            </div>
                            <div className="max-w-sm sm:hidden block">
                                <Button
                                    open={open}
                                    setOpen={setOpen}
                                >Agendar consulta de <br className="sm:block hidden" />planejamento previdenciário</Button>
                            </div>
                        </div>
                    </div>
                </Section>
                <section className="relative sm:py-24 py-12 bg-zinc-950 px-4">
                    <div className="flex flex-col items-center gap-4 sm:gap-12">
                        <div className="flex flex-col sm:items-center gap-2 text-center">
                            <h2 className="text-3xl sm:text-5xl font-semibold text-white">O que dizem sobre o nosso escritório</h2>
                            <p className="font-thin sm:text-2xl opacity-80 text-white ">Clique e confira os depoimentos:</p>
                        </div>
                        <div className="w-full sm:h-96 sm:py-12 flex sm:flex-row flex-col items-center justify-center">
                            <div className="w-full flex justify-center items-center flex-wrap gap-4 sm:gap-12 z-50">
                                <video width="320" height="360" className="rounded-2xl" controls>
                                    <source src="/images/1.mp4" type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                                <video width="320" height="280" className="rounded-xl" controls>
                                    <source src="/images/2.mp4" type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                                <video width="320" height="360" className="rounded-2xl" controls>
                                    <source src="/images/3.mp4" type="video/mp4" />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                            </div>
                            <div className="absolute h-64 w-full items-center justify-center radial-2 sm:block hidden"></div>
                        </div>
                        <div className="max-w-md z-50">
                            <Button
                                open={open}
                                setOpen={setOpen}
                            >Solicitar planejamento previdenciário</Button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-950 to-black"></div>
                </section>
                <Section classNameS="relative sm:py-24 pb-12 pt-4">
                    <div className="absolute bottom-0 right-0 w-64 h-32 bg-[#ffde7c] blur-[200px] sm:block hidden"></div>
                    <div className="absolute top-48 left-0 w-64 h-32 bg-[#ffde7c] blur-[200px] sm:block hidden"></div>
                    <div className="flex flex-col gap-20 items-center px-4">
                        <div className="max-w-5xl sm:grid sm:grid-cols-3 sm:gap-24 flex flex-col items-start gap-8 z-50">
                            <div className="flex flex-col-reverse sm:flex-col sm:items-end gap-4 sm:gap-24 text-left text-white">
                                <h3 className="text-4xl sm:text-6xl font-semibold sm:text-right">Quem <br className="hidden sm:block" />somos?</h3>
                                {/* <div className="flex flex-col items-end gap-4"> */}
                                <div className="relative w-[200px] h-[200px]">
                                    <Image
                                        src="/images/main-logo.png"
                                        alt=""
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                {/* <p className="opacity-80 text-lg underline">Tenha acesso ao planejamento <br />previdenciário por um especialista:</p> */}
                                <div className="max-w-sm hidden sm:block">
                                    <Button
                                        open={open}
                                        setOpen={setOpen}
                                    >Solicitar planejamento previdenciário</Button>
                                </div>
                                {/* </div> */}
                            </div>
                            <div className="col-span-2 flex flex-col gap-4 sm:gap-8 text-white/80 text-lg">
                                <p className="">Nosso escritório possui <span className="text-[#ffde7c] font-bold">18 anos de história</span>.<br />Fundado em 2006 pelo advogado José Fabiano Lopes Lino de Oliveira, somos um escritório de Advogados Associados liderado pelo nosso CEO.</p>
                                <p className="">Com uma vasta experiência, acumulamos <span className="text-[#ffde7c] font-bold">mais de 5.000 processos que estão em andamento atualmente</span>.</p>
                                <p className="">Durante nossos 18 anos de dedicação, <span className="text-[#ffde7c] font-bold">mais de 20 mil pessoas já foram atendidas pessoalmente em nossa sede</span> em Petrolândia (PE).</p>
                                <p className="">Nossa marca se destaca pelo nosso propósito firme e pelo compromisso inabalável em oferecer a melhor solução jurídica de maneira personalizada para cada cliente.</p>
                                <p className="">Nosso serviço é marcado pela combinação de <span className="text-white font-bold">expertise técnica</span> e uma <span className="text-white font-bold">abordagem humanizada</span>, onde cada caso é tratado com a máxima atenção, pois <span className="text-[#ffde7c] font-bold">compreendemos que estamos lidando com histórias de vida</span>.</p>
                                <p className="">Nosso maior orgulho está em transformar o destino de famílias, garantindo benefícios previdenciários essenciais para nossos clientes. Por isso, deixamos uma marca positiva na vida de quem confia em nós.</p>
                            </div>
                            <div className="">
                                <Button
                                    open={open}
                                    setOpen={setOpen}
                                >Agendar consulta de planejamento previdenciário</Button>
                            </div>
                        </div>
                    </div>
                </Section>
            </main >
        </>
    )
}
