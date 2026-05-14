import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp
} from "react-icons/fa";

export default function Contato() {

    const whatsappUrl = `https://wa.me/553131420880?text=${encodeURIComponent("Olá, gostaria de mais informações.")}`

    return (
        <div className="space-y-5">
            <div className="p-10 text-center flex flex-col gap-5">
                <h1 className="text-3xl font-bold">Entre em contato</h1>

                <p className="text-white">
                    Clique no botão abaixo para falar diretamente no WhatsApp.
                </p>
                <div className="flex justify-center">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        className="w-lg bg-green-500 text-black px-6 py-3 rounded-xl hover:scale-105 transition"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold">Também por aqui:</h2>
                <div className="flex justify-center gap-10 text-4xl md:text-7xl text-white">

                    <a
                        href="https://instagram.com/dra.laisnamen?igsh=MTI1aDNkZ241MXJ5cA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition pr-3 md:pr-7"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition"
                    >
                        <FaFacebook />
                    </a>

                    <a
                        href="https://doctoralia.com.br/clinicas/ciranda-afeto-e-saude"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition"
                    >
                        <img
                            src="/doctoralia2.png"
                            alt="Doctoralia"
                            className="w-20 md:w-35 h-10 md:h-20"
                        />
                    </a>

                </div>
            </div>
        </div>
    )
}