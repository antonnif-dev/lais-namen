import { motion } from 'framer-motion'

export default function Sobre() {
    return (
        <div className="px-10 max-w-3xl mx-auto space-y-5">
            <div className='py-5'>
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
                <motion.img
                    src="/Foto-Sobre.jpg"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <div>
                <p className="text-gray-200">
                    Ingressou na área no ano de 2000* com a promessa de fazer com que...
                </p>
            </div>
        </div>
    );
}