'use client'

import Forms from "@/src/components/forms";
import { Header } from "@/src/components/header";
import Pattern from "@/src/views/pattern";
import { useState } from "react";

export default function Page() {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Forms
        open={open}
        setOpen={setOpen}
      />
      <Header
        open={open}
        setOpen={setOpen}
        title={<>10 Anos de Crescimento em 2: O <span className="text-[#edbe32]">Plano Para Quem Quer Liderar</span> no Mercado Tributário.</>}
        description={<>No dia 09 de abril, você vai conhecer as quatro metas que transformarão sua carreira e garantirão seu lugar entre os melhores.</>}
        list={[]}
        btn_text="QUERO ACERTAR NA CONTRATAÇÃO"
        badge="Este conteúdo é exclusivo para profissionais que trabalham na Área tributária."
      />
      <Pattern
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}