import Image from "next/image";

export default function Page() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#111] to-[#000]">
            <div className="w-full max-w-xl flex flex-col items-center text-center gap-4 sm:gap-8 px-4">
                <div className="relative sm:w-[300px] sm:h-[156px] w-[230px] h-[120px]">
                    <Image
                        src="/images/logo.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                        loading="eager"
                    />
                </div>
                <div className="text-white sm:-mt-8">
                    <h1 className="text-2xl sm:text-3xl font-semibold ss4">Parabéns por dar o primeiro passo</h1>
                    <p className="text-zinc-200 sm:text-lg">Nosso time de especialistas entrará em contato com você via Whatsapp o quanto antes!</p>
                </div>
            </div>
        </div>
    )
}