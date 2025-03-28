import Button from "@/src/components/button";
import Image from "next/image";

export default function Page() {
    return (
        <div className="h-screen flex items-center justify-center bg-black px-4">
            <div className="flex flex-col items-center justify-center gap-8 text-center">
                <div className="relative sm:w-[200px] sm:h-[200px] w-[156px] h-[156px] sm:translate-y-4">
                    <Image
                        src="/images/logo.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl text-white playfair">Inscrição feita com sucesso.</h2>
                        <p className="text-white">Entre no grupo abaixo, nele enviaremos mais informações.</p>
                    </div>
                    <Button href="https://chat.whatsapp.com/Ia2LKLCUapELW0SoJGML6K">Acessar Grupo Vip</Button>
                </div>
            </div>
        </div>
    )
}