import { ReactNode } from "react";

export default function Button({ children}: { children: ReactNode }) {
    return (
        <a href="#inscricao" className="bg-[#44a226] rounded-lg py-4 w-[90%] text-white font-semibold text-center text-xl">
            {children}
        </a>
    )
}