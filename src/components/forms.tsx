export default function Forms() {
    return (
        <form className="w-full max-w-md flex flex-col items-center gap-4">
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold text-white">Digite seu nome:</label>
                    <input name="name" id="name" placeholder="Nome" type="" className="border bg-transparent py-2 px-2 outline-none focus:border-zinc-500 rounded-xl text-zinc-200" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-white">Digite seu email:</label>
                    <input name="email" id="email" placeholder="exemplo@gmail.com" type="" className="border bg-transparent py-2 px-2 outline-none focus:border-zinc-500 rounded-xl text-zinc-200" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-semibold text-white">Digite seu WhatsApp:</label>
                    <input name="phone" id="phone" placeholder="(11) 99999-9999" type="" className="border bg-transparent py-2 px-2 outline-none focus:border-zinc-500 rounded-xl text-zinc-200" />
                </div>
            </div>
            <button type="submit" className="bg-[#44a226] rounded-lg py-4 w-[90%] text-white font-semibold">Enviar informações e participar</button>
        </form>
    )
}