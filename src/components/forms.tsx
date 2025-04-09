"use client"

import { useRouter } from "next/navigation";
import React, { FormEvent, SetStateAction, useState } from "react";

type FormsType = {
    open?: boolean
    setOpen: React.Dispatch<SetStateAction<boolean>>
}

type DataType = {
    name: string,
    email: string,
    phone: string
    renda: string
}

export default function Forms({ setOpen, open }: FormsType) {

    const { push } = useRouter()
    const [error, setError] = useState<string>('')
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false)
    const [data, setData] = useState<DataType>({
        name: '',
        email: '',
        phone: '',
        renda: ''
    })

    function formatPhone(phone: string): string {
        phone = phone.replace(/\D/g, '');

        phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
        phone = phone.replace(/(\d{5})(\d)/, '$1-$2');

        return phone;
    }

    function onChange({ type, value }: { type: keyof DataType, value: string }) {

        if (type === 'phone') {
            setData((prevState) => ({
                ...prevState,
                [type]: formatPhone(value)
            }))
            return
        }

        setData((prevState) => ({
            ...prevState,
            [type]: value
        }))
    }

    async function formSubmit(e: FormEvent) {
        e.preventDefault()
        setIsSubmiting(true)
        setError('')

        if (data.name.length === 0 || data.email.length === 0 || !data.email.includes('@') || data.phone.length !== 15, data.renda.length === 0) {
            setIsSubmiting(false)
            setError('Preencha todos os campos corretamente.')
            return
        }

        setError('')

        const utms = { utm_source: '', utm_campaign: '', utm_medium: '', utm_content: '', utm_term: '' }
        const params = new URLSearchParams(window.location.search)

        utms.utm_source = params.get('utm_source') || 'nao-traqueado'
        utms.utm_campaign = params.get('utm_campaign') || 'nao-traqueado'
        utms.utm_medium = params.get('utm_medium') || 'nao-traqueado'
        utms.utm_content = params.get('utm_content') || 'nao-traqueado'
        utms.utm_term = params.get('utm_term') || 'nao-traqueado'

        try {
            await fetch('/api/kommo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    utm_source: utms.utm_source,
                    utm_campaign: utms.utm_campaign,
                    utm_medium: utms.utm_medium,
                    utm_content: utms.utm_content,
                    utm_term: utms.utm_term,
                }),
            });

            if (data.renda === 'R$ 10.001,00 até R$ 20.000,00;' || data.renda === 'Acima de R$ 20.000,00.') {

                push(`/agendamento?email=${data.email}`)
                setIsSubmiting(false)
                setData({ name: '', email: '', phone: '', renda: '' });
                return
            } 
            push(`/obrigado?email=${data.email}`)
            setIsSubmiting(false)
            setData({ name: '', email: '', phone: '', renda: '' });
        } catch (e) {
            console.log(e)
            setIsSubmiting(false)
        }
    }

    if (!open)
        return <></>

    return (
        <div className="fixed top-0 left-0 h-full w-full z-[99999] flex items-center justify-center">
            <div className="absolute top-0 left-0 h-full w-full bg-black/60" onClick={() => setOpen(!open)}></div>
            <form onSubmit={(e) => formSubmit(e)} className="relative w-full sm:max-w-xl flex flex-col items-center gap-4 bg-zinc-50 rounded-xl z-50 px-4 sm:px-8 pt-8 pb-16 sm:pt-12 sm:pb-16">
                <h2 className="max-w-3xl text-lg sm:text-2xl text-center font-bold">Preencha os dados e agende uma análise com nossos especialistas.</h2>
                <div onClick={() => setOpen(!open)} className="cursor-pointer absolute right-4 top-4 fill-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" /></svg>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-semibold">Digite seu nome:</label>
                            <input required={true} value={data.name} onChange={(e) => onChange({ type: 'name', value: e.target.value })} name="name" id="name" placeholder="Nome" type="" className="border bg-transparent py-2 px-4 outline-none focus:border-zinc-500 rounded-xl text-zinc-800" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold">Digite seu email:</label>
                            <input required={true} value={data.email} onChange={(e) => onChange({ type: 'email', value: e.target.value })} name="email" id="email" placeholder="exemplo@gmail.com" type="" className="border bg-transparent py-2 px-4 outline-none focus:border-zinc-500 rounded-xl text-zinc-800" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-semibold">Digite seu WhatsApp:</label>
                            <input required={true} value={data.phone} maxLength={15} onChange={(e) => onChange({ type: 'phone', value: e.target.value })} name="phone" id="phone" placeholder="(11) 99999-9999" type="" className="border bg-transparent py-2 px-4 outline-none focus:border-zinc-500 rounded-xl text-zinc-800" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="renda" className="font-semibold">Sua renda mensal:</label>
                            <div className="border rounded-2xl p-6">
                                <div className="flex gap-2">
                                    <input type="radio" onChange={() => onChange({ type: 'renda', value: 'R$ 1.000 até R$ 5.000,00;' })} name="renda" id="renda_01" />
                                    <label htmlFor="renda_01" className="">R$ 1.000 até R$ 5.000,00;</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" onChange={() => onChange({ type: 'renda', value: 'R$ 5.001,00 até R$ 10.000,00;' })} name="renda" id="renda_02" />
                                    <label htmlFor="renda_02" className="">R$ 5.001,00 até R$ 10.000,00;</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" onChange={() => onChange({ type: 'renda', value: 'R$ 10.001,00 até R$ 20.000,00;' })} name="renda" id="renda_03" />
                                    <label htmlFor="renda_03" className="">R$ 10.001,00 até R$ 20.000,00;</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" onChange={() => onChange({ type: 'renda', value: 'Acima de R$ 20.000,00.' })} name="renda" id="renda_04" />
                                    <label htmlFor="renda_04" className="">Acima de R$ 20.000,00.</label>
                                </div>
                            </div>
                            {/* <textarea rows={4} value={data.renda} maxLength={15} onChange={(e) => onChange({ type: 'renda', value: e.target.value })} name="renda" id="renda" placeholder="(11) 99999-9999" className="border bg-transparent py-2 px-4 outline-none focus:border-zinc-500 rounded-xl text-zinc-800" /> */}
                        </div>
                    </div>
                    {error && <span className="text-center text-red-500">{error}</span>}
                    <button type="submit" className="w-full bg-[#44a226] rounded-lg py-4 w-[90%] text-white font-semibold">
                        {isSubmiting ? (
                            <div className="flex-col gap-4 w-full flex items-center justify-center">
                                <div className="w-5 h-5 border-2 text-blue-400 text-4xl animate-spin border-white flex items-center justify-center border-t-blue-400 rounded-full">

                                </div>
                            </div>
                        ) : (
                            <span>Agendar</span>
                        )}
                    </button>
                </div>
                <p className="absolute max-w-xs bottom-5 text-center text-xs text-zinc-400">⚠️ As vagas para a consultoria são limitadas e podem encerrar a qualquer momento.</p>
            </form>
        </div>
    )
}
