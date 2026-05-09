import { motion } from 'framer-motion'

export default function Sobre() {
    return (
        <div className="px-10 w-full mx-auto space-y-5">
            <div className='py-5'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl font-bold"
                >
                    Sobre a profissional
                </motion.h1>
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
                <div>
                    <p className="text-gray-200 lg:text-3xl">
                        Médica com experiência em terapia cognitivo-comportamental, ajudando pacientes a lidarem com desafios emocionais...
                    </p>
                </div>
                <div className='flex justify-center lg:w-[350px] shrink-0'>
                    <motion.img
                        src="/Foto-Sobre.jpg"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <div className='md:pt-50'>
                    <p className="text-gray-200 lg:text-3xl">
                        Ingressou na área no ano de 2000* com a promessa de fazer com que...
                    </p>
                </div>
            </div>
        </div>
    );
}