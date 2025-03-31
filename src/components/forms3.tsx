"use client";

import { ChangeEvent, useMemo, useState } from "react";

function Select({ onChange, options, value, name }: { onChange: (opt: string) => void, options: string[], value: string, name: string }) {

    return (
        <div className="flex flex-col gap-1">
            {options.map((opt: string, index: number) => (
                <div className="flex items-center gap-1" key={index}>
                    <input
                        type="radio"
                        id={opt}
                        name={name}
                        checked={value === opt}
                        onChange={() => onChange(opt)}
                    />
                    <label htmlFor={opt}>{opt}</label>
                </div>
            ))}
        </div>
    )

    // return (
    //     <select
    //         value={value}
    //         className="w-full text-sm border border-zinc-400 outline-none text-black bg-transparent rounded-md py-3 sm:py-[6px] px-2"
    //         onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e)}
    //     >
    //         {options.map((opt: string, index: number) => (
    //             <option key={opt + index} value={opt}>{opt}</option>
    //         ))}
    //     </select>
    // )
}

const fields_case1 = [
    {
        name: 'idade',
        type: 'select'

    },
    {
        name: 'profissao',
        type: 'select'

    },
    {
        name: 'cargo',
        type: 'select'

    },
    {
        name: 'renda',
        type: 'select'

    },
    {
        name: 'costuma_participar',
        type: 'select'

    },
    {
        name: 'opcoes_identifica',
        type: 'select'
    },
    {
        name: 'atualizado',
        type: 'select'
    },
    {
        name: 'areas_promissoras',
        type: 'select'
    },
    {
        name: 'crescer_carreira',
        type: 'select'
    },
    {
        name: 'seu_diferencial',
        type: 'select'
    },
    {
        name: 'cafe',
        type: 'text'
    },
    {
        name: 'nao_pode_faltar',
        type: 'text'
    },
]

type DataType = {
    idade: string,
    profissao: string,
    cargo: string,
    renda: string,
    costuma_participar: string,
    opcoes_identifica: string,
    atualizado: string,
    areas_promissoras: string,
    crescer_carreira: string,
    seu_diferencial: string,
    cafe: string,
    nao_pode_faltar: string,
}

const initialData = {
    idade: '',
    profissao: '',
    cargo: '',
    renda: '',
    costuma_participar: '',
    opcoes_identifica: '',
    atualizado: '',
    areas_promissoras: '',
    crescer_carreira: '',
    seu_diferencial: '',
    cafe: '',
    nao_pode_faltar: '',
}

const selectOptions = {
    idade: [
        '18 a 24 anos',
        '25 a 34 anos',
        '35 a 44  anos',
        '45 a 54 anos',
        '55 a 64 anos',
        'Acima de 65',
    ],
    profissao: [
        'Contador',
        'Advogado',
        'Economista',
        'Administrador',
        'Empresário',
    ],
    cargo: [
        'Estagiário',
        'Trainee',
        'Assistente',
        'Coordenador',
        'Gerente',
        'Diretor',
        'Sócio/Proprietário/CEO',
    ],
    renda: [
        'R$ 1.000 até R$ 2.000',
        'R$ 2.001 até R$ 3.000',
        'R$ 3.001 até R$ 5.000',
        'R$ 5.001 até R$ 8.000',
        'R$ 8.001 até R$ 10.001',
        'R$ 10.001 até 20.000',
        'R$ 20.001 até R$ 50.000',
        'R$ 50.001 até R$ 100.000',
        'Acima de R$ 100.000',
    ],
    costuma_participar: [
        'Sim, com frequência',
        'Sim, mas raramente',
        'Não costumo participar',
        'Nunca participei',
    ],
    opcoes_identifica: [
        'Busco me destacar na empresa onde trabalho',
        'Quero crescer, mas ainda não sei como',
        'Estou estagnado(a) e preciso de uma virada',
        'Estou começando e quero construir uma boa base',
    ],
    atualizado: [
        'Muito atualizado(a)',
        'Razoavelmente atualizado(a)',
        'Pouco atualizado(a)',
        'Totalmente desatualizado(a)',
    ],
    areas_promissoras: [
        'Sim, conheço bem',
        'Já ouvi falar, mas não sei detalhes',
        'Não conheço',
        'Nunca parei para pensar sobre isso',
    ],
    crescer_carreira: [
        'Ter mais conhecimento técnico',
        'Desenvolver habilidades comportamentais',
        'Melhorar networking e visibilidade',
        'Não sei exatamente',
    ],
    seu_diferencial: [
        'Conhecimento técnico',
        'Visão estratégica',
        'Relacionamento com clientes e pares',
        'Ainda não tenho clareza sobre isso',
    ]
}

const labels_case1 = [
    'Qual a sua idade?',
    'Qual a sua profissão?',
    'Qual o seu cargo?',
    'Qual a sua renda?',
    'Você costuma participar de palestras, eventos, cursos sobre Desenvolvimento de Carreira e/ou sobre o Mercado Tributário?',
    'Em qual das opções você mais se identifica atualmente?',
    'O quanto você se sente atualizado(a) em relação às mudanças no mercado tributário?',
    'Você conhece as áreas mais promissoras do mercado tributário atualmente? ',
    'Quando pensa em crescer na carreira, o que você considera mais importante neste momento?',
    'O que você acredita ser seu maior diferencial na área tributária?',
    'Imagina que a gente está conversando com calma, com um café na mão. O que você me contaria sobre os desafios que está vivendo na sua carreira?',
    'O que não pode faltar nessa Superlive para que você saia com aquela sensação de “valeu cada minuto”?',
]

export function Form3() {

    const [steps, setSteps] = useState<number>(0)
    const [data, setData] = useState<DataType>(initialData)
    const [error, setError] = useState<string>('')
    const [submited, setSubmited] = useState<boolean>(false)

    const fields = useMemo(() => {

        return fields_case1

    }, [data])

    const labels = useMemo(() => {

        return [
            ...labels_case1
        ]
    }, [data])

    function handleChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement> | string, name: keyof typeof initialData) {
        setError('')

        if (typeof e === 'string') {
            setData(prevState => ({
                ...prevState,
                [name]: e
            }))

            return
        }

        setData(prevState => ({
            ...prevState,
            [name]: e.target.value
        }))
    }

    async function formSubmited() {

        const email = new URLSearchParams(window.location.search).get('email')

        try {
            const response = await fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Accept': `application/json`, // Armazene a chave de API em variáveis de ambiente
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    email
                })
            });

            const result = await response.json();

            setSubmited(true)

            if (!response.ok) {
                throw new Error(result.message || 'Erro ao enviar os dados');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    }

    return (
        <div className="w-full">
            <div className="relative w-full max-w-xl py-24 px-4 sm:p-12 bg-zinc-200 z-50 rounded-xl text-black overflow-hidden">
                {submited ? (
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-2xl font-semibold text-center">
                            Inscrição concluída
                        </h2>
                        <svg className="w-16 h-16 fill-[#ce9a00]" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m221-313 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-228q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm0-320 142-142q12-12 28-11.5t28 12.5q11 12 11 28t-11 28L250-548q-12 12-28 12t-28-12l-86-86q-11-11-11-28t11-28q11-11 28-11t28 11l57 57Zm339 353q-17 0-28.5-11.5T520-320q0-17 11.5-28.5T560-360h280q17 0 28.5 11.5T880-320q0 17-11.5 28.5T840-280H560Zm0-320q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h280q17 0 28.5 11.5T880-640q0 17-11.5 28.5T840-600H560Z" /></svg>
                    </div>
                ) : (
                    <>
                        <div className="mb-4 text-center">
                            <h2 className="text-2xl font-semibold text-center">
                                Para concluir sua inscrição, responda:
                            </h2>
                        </div>
                        <div>
                            <div className="flex flex-col gap-4">
                                <div className="relative">
                                    {fields.map((field, index: number) => {
                                        if (index !== steps) {
                                            return <></>
                                        } else if (field.type === 'text') {
                                            return (
                                                <div key={index} className="flex flex-col items-start gap-1 text-left">
                                                    <label>{labels[index]}</label>
                                                    <input
                                                        // @ts-expect-error: dabsd
                                                        value={data[field.name]}
                                                        maxLength={field.name === 'cellphone' ? 15 : undefined}
                                                        minLength={field.name === 'cellphone' ? 15 : undefined}
                                                        type={field.name === 'email' ? 'email' : undefined}
                                                        placeholder={'Digite aqui...'}
                                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, field.name as keyof typeof initialData)}
                                                        className="w-full text-sm border border-zinc-400 outline-none text-black bg-transparent rounded-md py-3 sm:py-[6px] px-2"
                                                    />
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={index} className="flex flex-col items-start gap-1 text-left">
                                                    <label>{labels[index]}</label>
                                                    <Select
                                                        key={index}
                                                        name={field.name}
                                                        // @ts-expect-error: dabsd
                                                        value={data[field.name]}
                                                        onChange={(opt: string) => handleChange(opt, field.name as keyof typeof initialData)}
                                                        options={selectOptions[field.name as keyof typeof selectOptions]}
                                                    />
                                                </div>
                                            )
                                        }
                                    })}
                                    <span className="absolute -bottom-6 left-1 w-full text-red-500 text-xs">{error}</span>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <button
                                        type="button"
                                        className={`border text-xs uppercase text-zinc-700 flex items-center justify-center gap-1 p-2 rounded-lg ${steps === 0 && 'pointer-events-none opacity-30'}`}
                                        onClick={() => {
                                            if (steps > 0) setSteps(steps - 1)
                                        }}>
                                        <svg className="-rotate-180" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                                        {/* <span>Voltar</span> */}
                                    </button>
                                    {steps < fields.length - 1 ? (
                                        <button
                                            type="button"
                                            className={`border text-xs uppercase bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 p-2 rounded-lg`}
                                            onClick={() => {

                                                if (data[fields[steps].name as keyof DataType].length !== 0 && !data[fields[steps].name as keyof DataType].includes('?')) {
                                                    setSteps(prevState => prevState + 1)
                                                } else {
                                                    setError('Preencha o campo acima corretamente')
                                                }
                                            }}>
                                            {/* <span>Próximo</span> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" /></svg>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {

                                                // @ts-expect-error: dabsd
                                                if (data[fields[steps].name].includes('?')) {
                                                    setError('Preencha o campo acima corretamente')
                                                } else {
                                                    formSubmited()
                                                }
                                            }}
                                            type="submit"
                                            className={`border text-sm bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 p-2 rounded-lg`}>
                                            <span>Enviar aplicação</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}