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
                        Acredito que cuidar de uma criança vai muito além de tratar sintomas — é acolher histórias, escutar silêncios e fortalecer vínculos. Foi na Pediatria que percebi que muitas dores não estavam apenas no corpo, mas também nas emoções, nos comportamentos e nas relações familiares. Nesse encontro com as dores da alma, compreendi o quanto as experiências emocionais moldam o comportamento, a aprendizagem e a forma como a criança se relaciona com o mundo. Foi assim que me apaixonei pela psiquiatria da infância e adolescência. Hoje, minha missão é oferecer um cuidado profundo, humano e baseado em evidências, que leve esperança às famílias e permita que crianças e adolescentes se sintam compreendidos, seguros e capazes de expressar seus sentimentos.
                    </p>
                </div>
                <div className='flex justify-center lg:w-[400px] shrink-0'>
                    <motion.img
                        src="/Foto-Sobre.jpg"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <div className=' flex items-center'>
                    <p className="text-gray-200 lg:text-3xl">
                        Graduada em Medicina - Médica (2015) – Faculdade de Medicina de Barbacena
                        Pediatra, cursou residência médica pela Universidade Federal de Viçosa (2018)

                        Pós Graduação em Psiquiatria da Infância e Adolescência – AFYA

                        Pós Graduação em Homeopatia pela Associação Médica Homeopática

                        Certificação em TEA pelo dr.Thiago Castro

                        Atualmente trabalho na internação de psiquiatria do maior hospital pediátrico de Belo Horizonte - São Camilo

                        Atuo há mais de 11 anos no SUS, sendo referência em saúde mental da infância e adolescência em toda a regional Leste de Belo Horizonte.

                        Além disso, dedico-me com excelência e cuidado aos atendimentos em consultório e também na modalidade on-line.
                    </p>
                </div>
            </div>
        </div>
    );
}