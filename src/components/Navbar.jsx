import { Link, useNavigate } from 'react-router-dom'
import Home from '../pages/Home';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="flex justify-between items-center px-7 md:px-10 py-6 shadow-sm bg-gradient-to-b from-[#4b4e5e] to-[#16171d]">

            {/* NOME */}
            <div className="flex flex-col md:flex-row items-center px-5 gap-1 md:gap-3 leading-tight"
                onClick={() => navigate('/')}>
                <h2 className="text-base md:text-3xl font-title tracking-tight">Doutora</h2>
                <h2 className="text-base md:text-3xl font-title tracking-tight">Laís Namen</h2>
            </div>

            {/* MENU */}
            <div className="text-white flex gap-4 md:gap-8 md:pr-10 text-sm md:text-lg">
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