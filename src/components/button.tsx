import React, { ReactNode, SetStateAction } from "react";

export default function Button({ children, href, open, setOpen, classNames }: { children: ReactNode, href?: string, open?: boolean, setOpen?: React.Dispatch<SetStateAction<boolean>>, classNames?: string }) {

    if (href) {
        return (
            <a href={href} className={`${classNames} w-full bg-[#44a226] rounded-lg py-4 w-[90%] text-white font-semibold text-center text-xl`}>
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