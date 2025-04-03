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
        title={<><span className="text-[#ffde7c]">Aposente-se com um valor até 3x maior</span> que a média dos empresários e proteja a sua aposentadoria com uma <span className="text-[#ffde7c]">estratégia de planejamento previdenciário</span>!</>}
        description={<>Na consultoria de planejamento previdenciário do nosso escritório, você receberá com clareza do quanto deve pagar para se aposentar com um valor digno e suficiente para o seu padrão de vida.</>}
        list={[]}
        btn_text="QUERO ACERTAR NA CONTRATAÇÃO"
        badge="Exclusivo para empresários de possuem renda acima de R$ 10.000,00/mês"
      />
      <Pattern
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}