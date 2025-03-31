import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()

    const { email, idade, profissao, cargo, renda, costuma_participar, opcoes_identifica, atualizado, areas_promissoras, crescer_carreira, seu_diferencial, cafe, nao_pode_faltar } = data

    try {
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