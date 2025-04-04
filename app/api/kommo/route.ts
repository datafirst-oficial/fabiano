import { NextResponse } from "next/server";

type CreateContactType = {
    name: string
    email: string
    phone: string
    utm_source: string
    utm_campaign: string
    utm_medium: string
    utm_content: string
    utm_term: string
}

export async function POST(request: Request) {

    const data = await request.json()

    const { name, email, phone, utm_source, utm_campaign, utm_medium, utm_content, utm_term } = data

    try {

        await fetch('https://hook.us2.make.com/emr85nnn13shy38unxbo9x2hwabw1cxq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                utm_source,
                utm_campaign,
                utm_medium,
                utm_content,
                utm_term,
            })
        })

        return NextResponse.json({})
    } catch (error) {
        console.log(error)
        return NextResponse.json({})
    }
}