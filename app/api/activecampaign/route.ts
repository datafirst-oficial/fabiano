import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const { name, email, phone, utm_source, utm_campaign, utm_medium, utm_content, utm_term } = data

    const customFields = [
        { id: 28, value: utm_source, name: 'utm_source_04.25' },
        { id: 29, value: utm_campaign, name: 'utm_campaign_04.25' },
        { id: 30, value: utm_medium, name: 'utm_medium_04.25' },
        { id: 31, value: utm_content, name: 'utm_content_04.25' },
        { id: 32, value: utm_term, name: 'utm_term_04.25' }
      ];

    try {
        const response = await fetch(`https://grupomsmarketing.api-us1.com/api/3/contacts`, {
            method: 'POST',
            headers: {
                'Api-Token': '384e7ff110db821cd91aea6153a4ad9857905757995d79d28c29a0098edc013b4bde8e7d',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contact: {
                    email,
                    firstName: name,
                    phone,
                }
            })
        });

        const data = await response.json();
        const contactId = data?.contact?.id;

        console.log(contactId)

        for (const field of customFields) {
            await fetch(`https://grupomsmarketing.api-us1.com/api/3/fieldValues`, {
                method: 'POST',
                headers: {
                    'Api-Token': '384e7ff110db821cd91aea6153a4ad9857905757995d79d28c29a0098edc013b4bde8e7d',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fieldValue: {
                        contact: contactId,
                        field: field.id,
                        value: field.value,
                    }
                })
            });
        }

        return NextResponse.json({})
    } catch (error) {
        console.log('ERRO')
        // console.log(error)
        // console.error('Erro na integração com o ActiveCampaign:', error);
        // return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}