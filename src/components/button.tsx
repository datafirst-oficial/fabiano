import React, { ReactNode, SetStateAction } from "react";

export default function Button({ children, href, open, setOpen }: { children: ReactNode, href?: string, open?: boolean, setOpen?: React.Dispatch<SetStateAction<boolean>> }) {

    if (href) {
        return (
            <a href="#inscricao" className="w-full bg-[#44a226] rounded-lg py-4 w-[90%] text-white font-semibold text-center text-xl">
                {children}
            </a>
        )
    }

    return (
        <button onClick={() => setOpen && setOpen(!open)} className="w-full bg-[#44a226] rounded-lg py-4 px-24 w-[90%] text-white font-semibold text-center text-xl">
            {children}
        </button>
    )
}