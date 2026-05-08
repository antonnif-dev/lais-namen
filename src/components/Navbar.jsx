import { Link, useNavigate } from 'react-router-dom'
import Home from '../pages/Home';
//import { motion } from 'framer-motion';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="flex justify-around items-center px-4 py-6 md:gap-8 shadow-sm bg-gradient-to-b from-[#4b4e5e] to-[#16171d]">

            {/* NOME */}
            <div className='flex px-5 gap-1 md:gap-3'
                onClick={() => navigate('/')}>
                {/*<motion.img*/}
                <img
                    src="/Logo-Navbar.png"
                    className="w-full max-w-[600px] h-auto max-h-[150px]"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            {/* MENU */}
            <div className="text-white flex gap-3 md:gap-8 md:pr-10 text-sm md:text-lg lg:text-2xl">
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