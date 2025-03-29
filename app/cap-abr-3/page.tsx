"use client"

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
        title={<>A Reforma Tributária nivelou o jogo – e <span className="text-[#edbe32]">quem se preparar primeiro</span>, chega ao topo mais rápido.</>}
        description={<>No dia 09 de abril, eu mostrarei a você as habilidades que te farão crescer como nunca em sua carreira tributária, enquanto o mercado se adapta.</>}
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