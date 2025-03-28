"use client"

import { FormEvent, useState } from "react";

type DataType = {
    name: string,
    email: string,
    phone: string
}

export default function Forms() {

    const [isSubmiting, setIsSubmiting] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [data, setData] = useState<DataType>({
        name: '',
        email: '',
        phone: ''
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

        if (data.name.length === 0 || data.email.length === 0 || !data.email.includes('@') || data.phone.length !== 15) {
            setError('Preencha corretamente os campso abaixo.')
            setIsSubmiting(false)
            return
        }

        const utms = { utm_source: '', utm_campaign: '', utm_medium: '', utm_content: '', utm_term: '' }
        const params = new URLSearchParams(window.location.search)

        utms.utm_source = params.get('utm_source') || 'nao-traqueado'
        utms.utm_campaign = params.get('utm_campaign') || 'nao-traqueado'
        utms.utm_medium = params.get('utm_medium') || 'nao-traqueado'
        utms.utm_content = params.get('utm_content') || 'nao-traqueado'
        utms.utm_term = params.get('utm_term') || 'nao-traqueado'

        try {
            await fetch('/api/clint', {
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

            window.location.href = `https://metodoencantar.com.br/obrigado-dt/?email=${data.email}`
            setIsSubmiting(false)
            setData({ name: '', email: '', phone: '' });
        } catch (err) {
            console.error('Erro geral:', err);
            setIsSubmiting(false)
        }
    }

    return (
        <form onSubmit={(e) => formSubmit(e)} className="w-full max-w-md flex flex-col items-center gap-4">
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold text-white">Digite seu nome:</label>
                    <input value={data.name} onChange={(e) => onChange({ type: 'name', value: e.target.value })} name="name" id="name" placeholder="Nome" type="" className="border bg-transparent py-2 px-4 outline-none focus:border-zinc-500 rounded-xl text-zinc-200" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-white">Digite seu email:</label>
                    <input value={data.email} onChange={(e) => onChange({ type: 'email', value: e.target.value })} name="email" id="email" placeholder="exemplo@gmail.com" type="" className="border bg-transparent py-2 px-4 outline-none focus:border-zinc-500 rounded-xl text-zinc-200" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-semibold text-white">Digite seu WhatsApp:</label>
                    <input value={data.phone} maxLength={15} onChange={(e) => onChange({ type: 'phone', value: e.target.value })} name="phone" id="phone" placeholder="(11) 99999-9999" type="" className="border bg-transparent py-2 px-4 outline-none focus:border-zinc-500 rounded-xl text-zinc-200" />
                </div>
            </div>
            <button type="submit" className="bg-[#44a226] rounded-lg py-4 w-[90%] text-white font-semibold">
                {isSubmiting ? (
                    <div className="flex-col gap-4 w-full flex items-center justify-center">
                        <div className="w-5 h-5 border-2 text-blue-400 text-4xl animate-spin border-white flex items-center justify-center border-t-blue-400 rounded-full">

                        </div>
                    </div>
                ) : (
                    <span>Enviar informações e participar</span>
                )}
            </button>
        </form>
    )
}