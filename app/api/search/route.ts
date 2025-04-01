import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const { email, idade, profissao, cargo, renda, costuma_participar, opcoes_identifica, atualizado, areas_promissoras, crescer_carreira, seu_diferencial, cafe, nao_pode_faltar } = data

    try {
        await fetch(`https://dataf.app.n8n.cloud/webhook/b6ee8c6e-55ad-4e49-ac8d-7e189c8fcc25`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                idade,
                profissao,
                cargo,
                renda,
                costuma_participar,
                opcoes_identifica,
                atualizado,
                areas_promissoras,
                crescer_carreira,
                seu_diferencial,
                cafe,
                nao_pode_faltar,
            })
        });

        await fetch(`https://functions-api.clint.digital/endpoints/integration/webhook/72669971-b0de-497b-bce5-eb41ea3c9bdf`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                idade,
                profissao,
                cargo,
                renda,
                costuma_participar,
                opcoes_identifica,
                atualizado,
                areas_promissoras,
                crescer_carreira,
                seu_diferencial,
                cafe,
                nao_pode_faltar,
            })
        });

        return NextResponse.json({})
    } catch (error) {
        console.log(error)
    }
}