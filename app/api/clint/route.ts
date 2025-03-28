import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const { name, email, phone, utm_source, utm_campaign, utm_medium, utm_content, utm_term } = data

    try {
        await fetch(`https://functions-api.clint.digital/endpoints/integration/webhook/6fbf83dc-3f54-496b-93ea-9fb3e8acbeb2`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                name,
                phone: `55${phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}`,
                utm_source,
                utm_campaign,
                utm_medium,
                utm_content,
                utm_term
            })
        });

        return NextResponse.json({})
    } catch (error) {
        console.log(error)
    }
}