import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const { name, email, phone, utm_source, utm_campaign, utm_medium, utm_content, utm_term } = data

    try {

        await fetch('https://hook.us2.make.com/ocfjrpsot7ytkix4h0tnce547jb1rxwo', {
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
