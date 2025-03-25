import Image from "next/image";
import { ReactNode } from "react";
import Button from "./button";

interface FormProps {
    title: ReactNode
    description: ReactNode
    list?: string[]
    btn_text: string
}

export function Header({ description, title, list, btn_text }: FormProps) {
    return (
        <header className="relative bg-[#f8f8f8] h-[1264px] sm:h-screen w-full flex items-start sm:items-center justify-center sm:px-4 py-8 sm:py-12 overflow-hidden">
            <Image
                src="/images/bg1.png"
                layout="fill"
                alt=""
                objectFit="cover"
                className="hidden sm:block"
            />
            {/* <div className="sm:hidden absolute top-0 w-full h-full bg-black/60"></div> */}
            <div className="w-full sm:max-w-6xl sm:grid sm:grid-cols-5 gap-12 sm:gap-12 flex flex-col z-50  ">
                <div id="forms" className="col-span-3 text-text1 flex flex-col gap-3 sm:gap-6 justify-start items-start sm:items-start sm:justify-start sm:text-left px-4 sm:px-0">
                    {/* <div className="sm:w-full sm:flex rounded-2xl border border-[#B9E89B] px-4 text-base sm:px-12 py-3 items-center gap-2 text-[#B9E89B] text-sm">
                        <span className="hidden sm:block h-[10px] w-[10px] bg-[#B9E89B] rounded-full"></span>
                        <p>Workshop Intensivo sobre <br className="block sm:hidden"/>Suplementação Materno Infantil</p>
                    </div> */}
                    <div className="relative sm:w-[192px] w-[200px] h-[64px]">
                        <Image
                            src="/images/logo.png"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h1 className="text-2xl sm:text-[40px] sm:leading-[48px]">{title}</h1>
                    <p className="text-base sm:text-xl max-w-lg">{description}</p>
                    <ul className="flex flex-col gap-2 max-w-xl">
                        {list?.map((item: string, index: number) => (
                            <li key={index} className="relative flex items-center p2s-7 sm:text-xl">
                            {/* <svg className="absolute left-0" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.47485 15.5488C6.34308 15.6805 6.12944 15.6805 5.99767 15.5488L0.238592 9.78968C0.106821 9.65791 0.106821 9.44427 0.238593 9.3125L2.60302 6.94807C2.73493 6.81616 2.94884 6.81632 3.08056 6.94842L5.99755 9.87404C6.12931 10.0062 6.34331 10.0063 6.4752 9.87427L15.9194 0.420475C16.0512 0.28859 16.2649 0.288536 16.3967 0.420354L18.7614 2.78501C18.8932 2.91679 18.8932 3.13043 18.7614 3.2622L6.47485 15.5488Z" fill="#B9E89B" />
                            </svg> */}
                            <p>✅ {item}</p>
                        </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3">
                        <Button>{btn_text}</Button>
                        <svg className="hidden sm:block" width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27.5" cy="28.1562" r="27.5" fill="#0A70FF" />
                            <path d="M17.3232 36C17.3232 36.9261 18.0739 37.6768 19 37.6768H34.0915C35.0176 37.6768 35.7683 36.9261 35.7683 36C35.7683 35.0739 35.0176 34.3232 34.0915 34.3232H20.6768V20.9085C20.6768 19.9824 19.9261 19.2317 19 19.2317C18.0739 19.2317 17.3232 19.9824 17.3232 20.9085V36ZM33.8143 18.8143L17.8143 34.8143L20.1857 37.1857L36.1857 21.1857L33.8143 18.8143Z" fill="white" />
                        </svg>
                    </div>

                    <div className="w-full max-w-md flex flex-col items-center gap-2 text-center sm:mt-0 mt-4">
                        {/* <Calendar className="sm:flex hidden" /> */}
                        {/* <Calendar className="flex sm:hidden mt-1" /> */}
                    </div>
                </div>
            </div>
            <Image
                src="/images/bg4-sm.png"
                layout="responsive"
                width={`100`}
                height={`100`}
                alt=""
                objectFit="contain"
                className="absolute bottom-0 w-full sm:hidden block"
            />
        </header>
    )
}