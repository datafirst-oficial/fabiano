import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const { name, email, phone, utm_source, utm_campaign, utm_medium, utm_content, utm_term } = data

    try {

        await fetch(`https://dataf.app.n8n.cloud/webhook/b6ee8c6e-55ad-4e49-ac8d-7e189c8fcc25`, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer 2668943:46a53778646398e717d5d07ca6252f09",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                first_name: name.split(' ')[0],
                last_name: name.split(' ')[name.split(' ').length - 1],
                phone: Number(`55${phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}`),
                utm_source,
                utm_campaign,
                utm_medium,
                utm_content,
                utm_term
            })
        });

        await fetch(`https://api.manychat.com/fb/subscriber/createSubscriber`, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer 2668943:46a53778646398e717d5d07ca6252f09",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: name.split(' ')[0],
                last_name: name.split(' ')[name.split(' ').length - 1],
                phone: Number(`55${phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')}`),
                "has_opt_in_sms": true,
                "has_opt_in_email": true,
                "consent_phrase": "valid user"
            })
        });

    } catch (error) {
        console.log(error)
    }

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