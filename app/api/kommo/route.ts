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

    const KOMMO_ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViNTc3Nzk5NGU4NzE2YzE1N2NhZWMzYzA0NTE3YjRmNGU1ZDEzMjk1ZTA5ZDYyZGYzYzdkZjdhYzI2M2Q3YTAwZjRiZTlhYWY2NjRhNjcyIn0.eyJhdWQiOiJlMWVlMGFjYi02YWFhLTQwZTAtYjZlOS03NDYzZjQ5NGZlMTYiLCJqdGkiOiJlYjU3Nzc5OTRlODcxNmMxNTdjYWVjM2MwNDUxN2I0ZjRlNWQxMzI5NWUwOWQ2MmRmM2M3ZGY3YWMyNjNkN2EwMGY0YmU5YWFmNjY0YTY3MiIsImlhdCI6MTc0MzcyODk0NiwibmJmIjoxNzQzNzI4OTQ2LCJleHAiOjE3ODQ2Nzg0MDAsInN1YiI6IjEyOTY1ODM1IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MzkxMDE5LCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiN2M2ZWRlNjAtMGU4NC00ZmY1LTgwZmQtYzFjNTQ3Yjk3NWNkIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.aE20PwXVYLxqYGO7-dkGwiUEqTuE3y0d4aRNRjOGxhUHK8yEzwi93vc9dGFMuMRimt6tJ4Z2W1k7ZX4rYaAEdCsHnRXVy-WHf0rtbnOkM5DNIuqZ3vRtRrmaGSHDTCm9VBG7vb_lbN_CpffINxaAy43MOX5Zk_4LTtbxYy4gTKQgBYQ8wvJCpjR9Qoxo-uA_efUD-fXy80JK-jGO4XT7x8vE0_OgU8Vi1WxjuX86XVP00C6YuLJ_6HODPRo6qjpG9eG19Vgh6rNxOP9Ck1ulr9uRAATI2I39SNoc6QCl-cboSJ0Q8Q6HpO-r3SdH3GDheWZ352Kw1jS52fyftU0XFg'

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
