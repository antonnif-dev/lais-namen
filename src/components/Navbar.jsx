import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <nav className="relative flex justify-between items-center px-4 md:px-20 py-8 shadow-sm bg-gradient-to-b from-[#4b4e5e] to-[#16171d]">

            <div
                className='flex gap-2 md:gap-12 cursor-pointer'
                onClick={() => navigate('/')}
            >
                <div className='flex gap-1 md:gap-3'>
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
                    />
                </div>

                <div className='flex flex-col justify-center'>
                    <h2 className='titulo-nome !text-2xl lg:text-7xl!'>
                        Dra. Laís Namen
                    </h2>

                    <h3 className='subtitulo-especialidade text-xs lg:text-3xl!'>
                        Saúde Mental da Infância & Adolescência
                    </h3>
                </div>
            </div>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex text-white gap-8 pr-10 text-lg lg:text-4xl">
                <Link to="/sobre" className="hover:opacity-70 transition">
                    Sobre
                </Link>

                <Link to="/contato" className="hover:opacity-70 transition">
                    Contato
                </Link>

                <a
                    href="https://www.doctoralia.com.br/lais-namen/pediatra/belo-horizonte#profile-reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition"
                >
                    Depoimentos
                </a>
            </div>

            {/* BOTÃO MOBILE */}
            <button
                className="md:hidden text-white"
                onClick={() => setMenuAberto(!menuAberto)}
            >
                {menuAberto ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* MENU MOBILE */}
            {menuAberto && (
                <div className="
                    absolute
                    top-full
                    left-0
                    w-full
                    flex
                    flex-col
                    items-center
                    gap-6
                    py-6
                    bg-[#16171d]/70
                    backdrop-blur-sm
                    text-white
                    text-xl
                    md:hidden
                    shadow-lg
                    z-50
                ">
                    <Link
                        to="/sobre"
                        onClick={() => setMenuAberto(false)}
                        className="hover:opacity-70 transition"
                    >
                        Sobre
                    </Link>

                    <Link
                        to="/contato"
                        onClick={() => setMenuAberto(false)}
                        className="hover:opacity-70 transition"
                    >
                        Contato
                    </Link>

                    <a
                        href="https://www.doctoralia.com.br/lais-namen/pediatra/belo-horizonte#profile-reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition"
                    >
                        Depoimentos
                    </a>
                </div>
            )}
        </nav>
    );
}