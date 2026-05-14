import { motion } from 'framer-motion';

export default function Home() {

    const whatsappUrl = `https://wa.me/553131420880?text=${encodeURIComponent("Olá, gostaria de agendar uma sessão.")}`

    return (
        <div className="px-10 space-y-5">
            <div className="w-full h-[500px] overflow-hidden flex justify-center">
                <motion.img
                    src="/Foto-Home2.png"
                    className="
            h-full
            w-auto
            object-cover
            object-center
        "
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            {/* HERO */}
            <section className="text-center flex flex-col items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold font-title"
                >
                    Cuidado médico humanizado em saúde mental da infância e adolescência para fortalecer vínculos, acolher emoções e transformar relações familiares.
                </motion.h1>
                {/* 
                <p className="text-gray-400 max-w-xl mx-auto text-center">
                    Atendimento psicológico humanizado para ansiedade, estresse e autoconhecimento.
                </p>
                */}
                <div className="flex justify-center py-5">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-xl hover:scale-105 transition"
                    >
                        Agendar via WhatsApp
                    </a>
                </div>
            </section>

            {/* BENEFÍCIOS */}
            <section className="grid md:grid-cols-3 gap-6">
                {["Transtornos do Neurodesenvolvimento",
                    "Transtorno do Espectro Autista (TEA)",
                    "Ansiedade",
                    "Depressão",
                    "Transtorno Obsessivo-Compulsivo (TOC)",
                    "Transtorno Bipolar",
                    "Transtornos do sono",
                    "Dificuldades emocionais e comportamentais",
                    "Dificuldades escolares e de aprendizagem",
                    "Questões familiares e de vínculo",
                    "Situações de trauma, luto ou mudanças importantes",
                    "Automutilação e sofrimento emocional na adolescência",
                    "Uso de substâncias na adolescência"
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="p-6 shadow rounded-xl border bg-[#373b49]"
                    >
                        <h3 className="font-semibold text-white">{item}</h3>
                    </motion.div>
                ))}
            </section>

        </div>
    );
}