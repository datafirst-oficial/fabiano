import type React from "react";
import { Form3 } from "./forms3";

export function Search() {

	return (
		<div
			className={`w-full sm:max-w-lg flex items-center justify-center`}
		>
			<div className="relative w-full max-w-xl py-24 px-4 sm:p-12 bg-zinc-200 z-50 rounded-xl text-black overflow-hidden">
				<div className="mb-4 text-center">
					<h2 className="text-2xl font-semibold text-center">
						Para concluir sua inscrição, responda:
					</h2>
					{/* <p className="text-zinc-500 text-sm">Preencha as perguntas corretamente abaixo para aplicar</p> */}
				</div>
				<div>
					<Form3 />
				</div>
			</div>
		</div>
	);
}
