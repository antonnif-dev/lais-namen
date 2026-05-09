import { Link, useNavigate } from 'react-router-dom'
import Home from '../pages/Home';
//import { motion } from 'framer-motion';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="flex justify-around md:justify-between items-center px-4 md:px-20 py-8 gap-1 shadow-sm bg-gradient-to-b from-[#4b4e5e] to-[#16171d]">

            {/* NOME */}
            <div className='flex md:gap-12'
                onClick={() => navigate('/')}>
                <div className='flex gap-1 md:gap-3'>
                    {/*<motion.img*/}
                    <img
                        src="/Logo-Lais-Favicon.png"
                        className="
                                    w-[75px]
                                    sm:w-[70px]
                                    md:w-[90px]
                                    lg:w-[130px]
                                    h-auto
                                    object-contain
                                    "
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <div>
                        <h2 className='titulo-nome !text-2xl lg:text-7xl!'>
                            Dra. Laís Namen
                        </h2>
                    </div>

                    <h3 className='subtitulo-especialidade text-xs lg:text-3xl!'>
                        Saúde Mental da Infância & Adolescência
                    </h3>
                </div>
            </div>

            {/* MENU */}
            <div className="text-white flex gap-3 md:gap-8 md:pr-10 text-sm md:text-lg lg:text-4xl">
                <Link to="/sobre" className="hover:opacity-70 transition">
                    Sobre
                </Link>
                <Link to="/contato" className="hover:opacity-70 transition">
                    Contato
                </Link>
            </div>

        </nav>
    );
}