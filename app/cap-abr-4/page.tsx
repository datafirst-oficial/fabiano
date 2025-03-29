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
        title={<>Profissionais Tributários que aprendem <span className="text-[#edbe32]">a Estratégia certa</span> Sempre Chegam ao Topo mais rápido</>}
        description={<>E agora é a sua vez: participe da Super Live e aprenda como acelerar seu crescimento na carreira.</>}
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