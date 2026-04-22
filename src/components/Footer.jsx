import { useState } from "react";
//import { useLocation } from 'react-router-dom';
// retirar os comentários para deixar aparecer somente em Home

export default function Footer() {
    const [modal, setModal] = useState(null);
    //const location = useLocation();

    //const isHome = location.pathname === '/'; 

    const Modal = ({ title, content }) => (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

            {/* CONTAINER */}
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">

                {/* HEADER */}
                <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>

                {/* CONTEÚDO COM SCROLL */}
                <div className="p-6 overflow-y-auto text-sm text-gray-600 space-y-4 whitespace-pre-line">
                    {content}
                </div>

                {/* FOOTER */}
                <div className="p-4 flex justify-end">
                    <button
                        onClick={() => setModal(null)}
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:opacity-90 transition"
                    >
                        Fechar
                    </button>
                </div>

            </div>
        </div>
    );

    return (
        <footer className="bg-gradient-to-b from-[#16171d] via-[#373b49] to-[#3a3d4a] border-t border-gray-800 mt-20">            
            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

                {/* LOGO / DESCRIÇÃO */}
                {/*{isHome && (    <--- para deixar aparecer somente em Home*/}
                    <div>
                        <h2 className="text-xl font-semibold">Dra. Laís Namen</h2>
                        <p className="text-gray-400 text-sm mt-2">
                            Atendimento psicológico humanizado com foco no bem-estar emocional.
                        </p>
                    </div>
                    {/*
                )}
*/}
                {/* LINKS */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Links Rápidos</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li onClick={() => setModal("privacidade")} className="cursor-pointer hover:underline">
                            Política de Privacidade
                        </li>

                        <li onClick={() => setModal("termos")} className="cursor-pointer hover:underline">
                            Termos de Uso
                        </li>

                        <li onClick={() => setModal("cookies")} className="cursor-pointer hover:underline">
                            Política de Cookies
                        </li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div>
                    <h3 className="font-semibold mb-3">Contato</h3>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li>(31) 98888-8888</li>
                        <li>agendamento@drlais.com.br</li>
                        <li>
                            Rua xxxx , xxxx<br />
                            Bairro, Belo Horizonte - MG
                        </li>
                    </ul>
                </div>

            </div>

            {/* RODAPÉ FINAL */}
            <div className="text-center text-sm text-white py-4 px-4">
                © 2026 Dra. Laís Namen. Todos os direitos reservados. <br />
                Desenvolvido por Antonni Dev
            </div>

            {/* MODAIS */}
            {modal === "privacidade" && (
                <Modal
                    title="Política de Privacidade"
                    content={`Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos as informações dos usuários deste site.

1. Coleta de informações
Coletamos dados fornecidos voluntariamente pelo usuário, como nome, telefone e e-mail, especialmente ao entrar em contato via WhatsApp ou formulários.

2. Uso das informações
As informações coletadas são utilizadas exclusivamente para:
- Responder solicitações de contato
- Agendamento de consultas
- Melhorar a experiência do usuário

3. Compartilhamento de dados
Não compartilhamos, vendemos ou divulgamos seus dados pessoais a terceiros, exceto quando necessário para cumprimento de obrigações legais.

4. Armazenamento e segurança
Adotamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração ou divulgação.

5. Direitos do usuário
O usuário pode solicitar a atualização ou exclusão de seus dados a qualquer momento, entrando em contato pelos canais disponíveis neste site.

6. Alterações nesta política
Esta política pode ser atualizada periodicamente. Recomendamos a revisão frequente deste conteúdo.`}
                />
            )}

            {modal === "termos" && (
                <Modal
                    title="Termos de Uso"
                    content={`Ao acessar este site, o usuário concorda com os termos e condições abaixo:

1. Finalidade do site
Este site tem caráter informativo e tem como objetivo apresentar os serviços profissionais oferecidos.

2. Uso das informações
As informações disponibilizadas não substituem avaliação profissional individual. Para diagnóstico ou tratamento, é necessário atendimento personalizado.

3. Responsabilidades do usuário
O usuário compromete-se a utilizar o site de forma ética e legal, não realizando atividades que possam comprometer sua segurança ou funcionamento.

4. Propriedade intelectual
Todo o conteúdo deste site, incluindo textos, imagens e identidade visual, é protegido por direitos autorais e não pode ser reproduzido sem autorização.

5. Limitação de responsabilidade
Não nos responsabilizamos por decisões tomadas com base nas informações do site sem acompanhamento profissional adequado.

6. Alterações dos termos
Os termos podem ser modificados a qualquer momento, sem aviso prévio.`}
                />
            )}

            {modal === "cookies" && (
                <Modal
                    title="Política de Cookies"
                    content={`Este site utiliza cookies para melhorar a experiência do usuário.

1. O que são cookies
Cookies são pequenos arquivos armazenados no dispositivo do usuário que ajudam a melhorar a navegação.

2. Como utilizamos
Utilizamos cookies para:
- Melhorar o desempenho do site
- Entender como os usuários interagem com o conteúdo
- Personalizar a experiência de navegação

3. Tipos de cookies
- Cookies essenciais: necessários para o funcionamento do site
- Cookies de desempenho: ajudam a entender o uso do site

4. Controle de cookies
O usuário pode configurar seu navegador para bloquear ou remover cookies a qualquer momento.

5. Consentimento
Ao continuar navegando neste site, você concorda com o uso de cookies.`}
                />
            )}
        </footer>
    );
}