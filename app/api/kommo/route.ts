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

const createContact = async ({ email, name, phone, utm_campaign, utm_content, utm_medium, utm_source, utm_term }: CreateContactType) => {

    const KOMMO_ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViNTc3Nzk5NGU4NzE2YzE1N2NhZWMzYzA0NTE3YjRmNGU1ZDEzMjk1ZTA5ZDYyZGYzYzdkZjdhYzI2M2Q3YTAwZjRiZTlhYWY2NjRhNjcyIn0.eyJhdWQiOiJlMWVlMGFjYi02YWFhLTQwZTAtYjZlOS03NDYzZjQ5NGZlMTYiLCJqdGkiOiJlYjU3Nzc5OTRlODcxNmMxNTdjYWVjM2MwNDUxN2I0ZjRlNWQxMzI5NWUwOWQ2MmRmM2M3ZGY3YWMyNjNkN2EwMGY0YmU5YWFmNjY0YTY3MiIsImlhdCI6MTc0MzcyODk0NiwibmJmIjoxNzQzNzI4OTQ2LCJleHAiOjE3ODQ2Nzg0MDAsInN1YiI6IjEyOTY1ODM1IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MzkxMDE5LCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiN2M2ZWRlNjAtMGU4NC00ZmY1LTgwZmQtYzFjNTQ3Yjk3NWNkIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.aE20PwXVYLxqYGO7-dkGwiUEqTuE3y0d4aRNRjOGxhUHK8yEzwi93vc9dGFMuMRimt6tJ4Z2W1k7ZX4rYaAEdCsHnRXVy-WHf0rtbnOkM5DNIuqZ3vRtRrmaGSHDTCm9VBG7vb_lbN_CpffINxaAy43MOX5Zk_4LTtbxYy4gTKQgBYQ8wvJCpjR9Qoxo-uA_efUD-fXy80JK-jGO4XT7x8vE0_OgU8Vi1WxjuX86XVP00C6YuLJ_6HODPRo6qjpG9eG19Vgh6rNxOP9Ck1ulr9uRAATI2I39SNoc6QCl-cboSJ0Q8Q6HpO-r3SdH3GDheWZ352Kw1jS52fyftU0XFg'

    try {
        const res = await fetch(`https://contatofabianooliveiraadvogadoscombr.kommo.com/api/v4/contacts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${KOMMO_ACCESS_TOKEN}`,
            },
            body: JSON.stringify([
                {
                    "first_name": `${name}`,
                    "custom_fields_values": [
                        { "field_id": "957330", "values": [{ "value": `${email}` }] },
                        { "field_id": "957328", "values": [{ "value": `${phone}` }] },
                        { "field_id": "1007344", "values": [{ "value": `${utm_source}` }] },
                        { "field_id": "1007346", "values": [{ "value": `${utm_campaign}` }] },
                        { "field_id": "1007348", "values": [{ "value": `${utm_medium}` }] },
                        { "field_id": "1007350", "values": [{ "value": `${utm_content}` }] },
                        { "field_id": "1007352", "values": [{ "value": `${utm_term}` }] },
                    ],
                }
            ]),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Erro ao criar contato");

        return data._embedded.contacts[0].id; // Retorna o ID do contato recém-criado
    } catch (e) {
        console.log('error = ',e)
    }

};

const createLead = async (contactId: string) => {

    const KOMMO_ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIwNDE1YTdhMmU1ZWFjNjk2YjFjYjk0Y2FkYWYxYzgzMmMzYjBhYmYwNDllYzI2MTg0MWY1NzQ1YjFkOWRjN2M3NDU5OWFjNjU2NmM2NWUyIn0.eyJhdWQiOiI0MzllYmFjMS04YTM1LTQ5M2QtODY1MS1lYzczY2VlYjEwZDIiLCJqdGkiOiJiMDQxNWE3YTJlNWVhYzY5NmIxY2I5NGNhZGFmMWM4MzJjM2IwYWJmMDQ5ZWMyNjE4NDFmNTc0NWIxZDlkYzdjNzQ1OTlhYzY1NjZjNjVlMiIsImlhdCI6MTc0MzcyNjgzMywibmJmIjoxNzQzNzI2ODMzLCJleHAiOjE3NzUxNzQ0MDAsInN1YiI6IjEyOTY1ODM1IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM0MzkxMDE5LCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMTg2N2ZkMDktMTVhYy00ZmVlLWIwZmUtNjQzZjE5MDY1ZDI4IiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.oBVKtIldlUqDIIplSjthgTuTUkcqgUGS9bjIicR76NtGOcVgob6qMLreZhExd3HNBWT9hhSs9u_P9imgwyMcOWdIg6fkx6FezT4BSasLKqG4arR9I_robBfaTfIQORGRNV4yeTP306ycJW_zG588YH14yA_s8_fdZbzEylyWzObqO6LKtUHEb_7l4N-DS8NwU3DdwwNJr5ZmxPNZpTW3WdHy-XUeJs3XmTX5vkoPqrd7n3qRM7DF0eLSi-4r26mfxhi9oGWHrr7uTrvjvWwBxDfUeEgGhH80QEDSgDFq8uiEAxd2LGFyU7ZJVy_c4gFCexWlCZRrHWr3ZzT4cgjGIA'

    const res = await fetch(`https://contatofabianooliveiraadvogadoscombr.kommo.com/api/v4/leads`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${KOMMO_ACCESS_TOKEN}`,
        },
        body: JSON.stringify([
            {
                name, // Nome do lead
                _embedded: {
                    contacts: [{ id: contactId }], // Associando o contato criado
                },
            },
        ]),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Erro ao criar lead");

    return data;
};

export async function POST(request: Request) {

    const data = await request.json()

    const { name, email, phone, utm_source, utm_campaign, utm_medium, utm_content, utm_term } = data

    try {

        // Criar contato na Kommo e obter o ID
        const contactId = await createContact({ name, email, phone, utm_source, utm_campaign, utm_medium, utm_content, utm_term });

        console.log('AQUI',contactId)

        // Criar lead associando o contato
        // const lead = await createLead(contactId);

        // console.log(lead)

        return NextResponse.json({})
    } catch (error) {
        console.log(error)
        return NextResponse.json({})
    }
}