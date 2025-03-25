"use client"

import { ReactNode, useEffect, useState } from "react";

export default function Button({ children }: { children: ReactNode }) {
    return (
        <a href="#payment" className="w-full text-center flex justify-center uppercase text-lg my-shadow bg-[#FF6100] rounded-full border border-[#FFD8BF] py-3 px-8 text-white font-semibold">{children}</a>
    )
}
export function ButtonCheckout({ children, link }: { children: ReactNode, link: string }) {

    const [searchParams, setSearchParams] = useState<string | null>(null)

    useEffect(() => {

        if (typeof window !== "undefined") {

            const utms = {utm_source: '', utm_campaign: '', utm_medium: '', utm_content: '', utm_term: ''}
            const params = new URLSearchParams(window.location.search)

            utms.utm_source = params.get('utm_source') || 'nao-traqueado'
            utms.utm_campaign = params.get('utm_campaign') || 'nao-traqueado'
            utms.utm_medium = params.get('utm_medium') || 'nao-traqueado'
            utms.utm_content = params.get('utm_content') || 'nao-traqueado'
            utms.utm_term = params.get('utm_term') || 'nao-traqueado'

            setSearchParams(`&utm_source=${utms.utm_source}&utm_campaign=${utms.utm_campaign}&utm_medium=${utms.utm_medium}&utm_content=${utms.utm_content}&utm_term=${utms.utm_term}`)
        }

    }, [])

    return (
        <a href={`${link}${searchParams}`} className="w-full uppercase text-lg my-shadow-2 bg-[#FF6100] rounded-full border border-[#FFD8BF] py-3 px-8 text-white font-semibold">{children}</a>
    )
}
export function ButtonWpp({ children }: { children: ReactNode }) {
    return (
        <a href="https://wa.me/6599277492" className="relative sm:w-[420px] uppercase sm:text-lg my-shadow-2 linear-2 rounded-full border border-[#FFD8BF] py-3 pe-8 ps-20 text-white font-semibold text-left">
            <svg className="absolute left-8" width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.1184 6.95323C37.0315 4.84594 34.546 3.17507 31.8069 2.03799C29.0677 0.900916 26.1297 0.320375 23.1639 0.330201C10.7372 0.330201 0.609201 10.4582 0.609201 22.8849C0.609201 26.8678 1.65614 30.737 3.61346 34.1509L0.427124 45.8493L12.3759 42.7085C15.676 44.5065 19.3858 45.4624 23.1639 45.4624C35.5906 45.4624 45.7186 35.3344 45.7186 22.9077C45.7186 16.8764 43.3744 11.2093 39.1184 6.95323ZM23.1639 41.6388C19.7955 41.6388 16.4954 40.7284 13.6049 39.0214L12.9221 38.6118L5.82114 40.478L7.71018 33.5591L7.25499 32.8536C5.38312 29.8654 4.38939 26.411 4.38729 22.8849C4.38729 12.5521 12.8083 4.13105 23.1412 4.13105C28.1483 4.13105 32.8595 6.08837 36.3872 9.63886C38.1343 11.3774 39.5187 13.4455 40.4603 15.7232C41.4019 18.001 41.8818 20.443 41.8723 22.9077C41.9178 33.2405 33.4967 41.6388 23.1639 41.6388ZM33.4512 27.6189C32.8822 27.3458 30.1056 25.9802 29.6049 25.7754C29.0814 25.5933 28.7172 25.5023 28.3303 26.0485C27.9434 26.6175 26.8737 27.892 26.5551 28.2562C26.2365 28.6431 25.8951 28.6886 25.3261 28.3927C24.7571 28.1196 22.9363 27.5051 20.7969 25.5933C19.1127 24.0912 17.9975 22.2476 17.6561 21.6787C17.3375 21.1097 17.6106 20.8138 17.9065 20.5179C18.1568 20.2676 18.4754 19.8579 18.7486 19.5393C19.0217 19.2206 19.1355 18.9703 19.3175 18.6061C19.4996 18.2192 19.4086 17.9006 19.272 17.6275C19.1355 17.3543 17.9975 14.5777 17.5423 13.4397C17.0871 12.3472 16.6092 12.4838 16.2678 12.461H15.1753C14.7884 12.461 14.1967 12.5976 13.6732 13.1666C13.1725 13.7356 11.7159 15.1011 11.7159 17.8778C11.7159 20.6545 13.7415 23.3401 14.0146 23.7043C14.2877 24.0912 17.9975 29.7811 23.6419 32.2163C24.9847 32.8081 26.0316 33.1495 26.851 33.3998C28.1938 33.8323 29.4228 33.764 30.4014 33.6274C31.4939 33.4681 33.7471 32.2618 34.2023 30.9418C34.6802 29.6217 34.6802 28.5065 34.5209 28.2562C34.3616 28.0058 34.0202 27.892 33.4512 27.6189Z" fill="white" />
            </svg>
            <span>{children}</span>
        </a>
    )
}