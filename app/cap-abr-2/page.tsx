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
        title={<>A Reforma Tributária veio para revolucionar tudo. <span className="text-[#edbe32]">Quem entender esse momento</span>, vai crescer em poucos anos, o que levaria décadas.</>}
        description={<>As regras mudaram. Quem souber jogá-las, dominará o mercado tributário. Essa é a chance da década para você se tornar indispensável na sua área.</>}
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