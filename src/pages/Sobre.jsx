import { motion } from 'framer-motion'

export default function Sobre() {
    return (
        <div className="p-10 max-w-3xl mx-auto space-y-5">
            <div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl font-bold"
                >
                    Sobre a profissional
                </motion.h1>

                <p className="text-gray-200">
                    Médica com experiência em terapia cognitivo-comportamental, ajudando pacientes a lidarem com desafios emocionais...
                </p>
            </div>
            <div className='flex justify-center'>
                <img src="/teste2.jpg"
                    alt="Foto da profissional" />
            </div>
        </div>
    );
}