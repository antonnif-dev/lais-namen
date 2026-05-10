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
                <div className='md:w-1/3'>
                    <div className="text-gray-200 lg:text-3xl space-y-6 leading-relaxed">

                        <p>
                            Acredito que cuidar de uma criança vai muito além de tratar sintomas — é acolher histórias, escutar silêncios e fortalecer vínculos.
                        </p>

                        <p>
                            Foi na Pediatria que percebi que muitas dores não estavam apenas no corpo, mas também nas emoções, nos comportamentos e nas relações familiares.
                        </p>

                        <p>
                            Nesse encontro com as dores da alma, compreendi o quanto as experiências emocionais moldam o comportamento, a aprendizagem e a forma como a criança se relaciona com o mundo.
                        </p>

                        <p>
                            Foi assim que me apaixonei pela psiquiatria da infância e adolescência.
                        </p>

                        <p>
                            Hoje, minha missão é oferecer um cuidado profundo, humano e baseado em evidências, que leve esperança às famílias e permita que crianças e adolescentes se sintam compreendidos, seguros e capazes de expressar seus sentimentos.
                        </p>

                    </div>
                </div>
                <div className='md:w-1/3 flex justify-center items-center'>
                    <motion.img
                        src="/Foto-Sobre.jpg"
                        className='w-full max-w-[400px]'
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <div className='md:w-1/3 flex items-center'>
                    <div className="text-gray-200 lg:text-3xl space-y-6">

                        <p>
                            Graduada em Medicina - Médica (2015) – Faculdade de Medicina de Barbacena.
                        </p>

                        <p>
                            Pediatra, cursou residência médica pela Universidade Federal de Viçosa (2018).
                        </p>

                        <p>
                            Pós Graduação em Psiquiatria da Infância e Adolescência – AFYA.
                        </p>

                        <p>
                            Pós Graduação em Homeopatia pela Associação Médica Homeopática.
                        </p>

                        <p>
                            Certificação em TEA pelo Dr. Thiago Castro.
                        </p>

                        <p>
                            Atualmente trabalho na internação de psiquiatria do maior hospital pediátrico de Belo Horizonte - São Camilo.
                        </p>

                        <p>
                            Atuo há mais de 11 anos no SUS, sendo referência em saúde mental da infância e adolescência em toda a regional Leste de Belo Horizonte.
                        </p>

                        <p>
                            Além disso, dedico-me com excelência e cuidado aos atendimentos em consultório e também na modalidade on-line.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}