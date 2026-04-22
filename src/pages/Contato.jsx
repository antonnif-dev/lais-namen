export default function Contato() {

    const whatsappUrl = `https://wa.me/5599999999999?text=${encodeURIComponent("Olá, gostaria de mais informações.")}`

    return (
        <div className="p-10 text-center flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Entre em contato</h1>

            <p className="text-gray-600">
                Clique no botão abaixo para falar diretamente no WhatsApp.
            </p>

            <a
                href={whatsappUrl}
                target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
            >
                Falar no WhatsApp
            </a>
        </div>
    )
}