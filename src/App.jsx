import React, { useState } from 'react';
import bannerImg from './assets/new-banner.png';
import logoXVII from './assets/logoxvii.png';
import logoXVIII from './assets/logoxviii.png';
import logoXIX from './assets/logoxix.png';

function App() {
  // Define 'Inicio' como a aba padrão quando o site carrega
  const [abaAtiva, setAbaAtiva] = useState('INÍCIO');
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* 1. Navbar - Dinâmica */}
      <nav className="bg-semat-dark p-4 shadow-md sticky top-0 z-50 border-b-2 border-semat-sec2">
        <div className="max-w-6xl mx-auto flex justify-center space-x-8 text-sm font-semibold tracking-wider uppercase">
          {['INÍCIO', 'PROGRAMAÇÃO', 'EDITAL', 'SUBMISSÕES', 'CERTIFICADOS'].map((aba) => (
            <button
              key={aba}
              onClick={() => setAbaAtiva(aba)}
              className={`transition-colors duration-200 pb-1 ${
                abaAtiva === aba 
                  ? 'text-white border-b-2 border-semat-light' // Aba ativa: branca com sublinhado laranja
                  : 'text-semat-light hover:text-white'        // Aba inativa: laranja, fica branca no hover
              }`}
            >
              {aba}
            </button>
          ))}
        </div>
      </nav>

      {/* 2. Header / Hero Banner (Apenas a Imagem) */}
      <header className="w-full bg-slate-900 flex justify-center">
        <img 
        src={bannerImg} 
        alt="Banner XIX Semana da Matemática" 
        className="w-full max-w-[1920px] h-auto block"
        />
      </header>

      {/* Conteúdo Principal Dinâmico */}
      <main className="max-w-5xl mx-auto p-6 mt-8 mb-20">
        
        {abaAtiva === 'INÍCIO' ? (
          // --- CONTEÚDO DA ABA INÍCIO ---
          <div className="animate-fade-in">
            {/* Alert Banner */}
            <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-800 p-4 mb-10 rounded-r shadow-sm flex items-center">
              <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p>
                <strong className="font-bold">Atenção:</strong> Certificados de apresentadores e monitores da Semat 2025 adicionados na aba "Certificados".
              </p>
            </div>

            {/* Sobre a SEMAT */}
            <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-semat-sec2 mb-6 text-center border-b border-orange-100 pb-4">
                Sobre a SEMAT
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify mb-4">
                A <strong>Semana de Matemática da UESC</strong> tem como principal objetivo promover o diálogo entre ensino, pesquisa e extensão, valorizando a Matemática em suas diversas dimensões. Reunindo estudantes, professores, pesquisadores e profissionais da área, a SEMAT busca criar um espaço aberto para o compartilhamento de saberes, troca de experiências e incentivo à produção científica e à formação docente.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                Ao longo de suas edições, a SEMAT tem se consolidado como um importante momento de encontro e reflexão, com uma programação diversificada que inclui palestras, minicursos, oficinas, mesas-redondas, apresentações de trabalhos e atividades culturais. Mais do que um evento acadêmico, a SEMAT é também uma celebração da Matemática!
              </p>
            </section>
          </div>

        ) : abaAtiva === 'CERTIFICADOS' ? (
          // --- CONTEÚDO DA ABA CERTIFICADOS ---
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-semat-dark mb-3">Acervo de Certificados</h2>
              <p className="text-gray-600">Selecione a edição do evento para acessar o certificado correspondente.</p>
            </div>

            {/* Fundo da Seção em semat-medio */}
            <div className="bg-semat-medio p-6 md:p-10 rounded-[2rem] shadow-lg ">
              {/* Grid de Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Array de dados dos certificados mapeado diretamente */}
                {[
                  {
                    id: 1,
                    imagem: logoXVII,
                    titulo: "XVII SEMAT - Matemática, Arte e Ouro",
                    ano: "2024",
                    descricao: "Certificados disponíveis para apresentadores, monitores e ouvintes.",
                    link: "https://drive.google.com/drive/folders/1RIdjCpL5dBwbhofjQstittdQwd9ZbOxP",
                    disponivel: true
                  },
                  {
                    id: 2,
                    imagem: logoXVIII,
                    titulo: "XVIII SEMAT - Matemática em sua maioridade: 18 anos de Ciência, Ensino e Tecnologia",
                    ano: "2025",
                    descricao: "Certificados disponíveis para apresentadores e monitores.",
                    link: "https://drive.google.com/drive/folders/1J9wAnehtkr0Y7saN1tzoynajTKWLe2E7",
                    disponivel: true
                  },
                  {
                    id: 3,
                    imagem: logoXIX,
                    titulo: "XIX SEMAT - O Código Invisível do Universo",
                    ano: "2026",
                    descricao: "Os certificados serão disponibilizados após o fim do evento.",
                    link: "#",
                    disponivel: false
                  }
                  
                ].map((cert) => (
                  <div key={cert.id} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border-none group relative">
                    
                    {/* Badge do Ano (Flutuando no canto superior direito) */}
                    <span className="absolute top-4 right-4 z-10 bg-semat-light text-semat-dark text-xs font-black px-3 py-1.5 rounded-lg shadow-md">
                      {cert.ano}
                    </span>

                    {/* Área da Imagem - Condicionalmente clicável */}
                    {cert.disponivel ? (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-50 p-6 flex justify-center items-center border-b border-slate-100 aspect-square relative cursor-pointer block"
                        title="Acessar Drive"
                      >
                        <img 
                          src={cert.imagem} 
                          alt={`Logo da edição de ${cert.ano}`} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </a>
                    ) : (
                      <div className="bg-slate-50 p-6 flex justify-center items-center border-b border-slate-100 aspect-square relative">
                        <img 
                          src={cert.imagem} 
                          alt={`Logo da edição de ${cert.ano}`} 
                          className="w-full h-full object-contain opacity-100"
                        />
                      </div>
                    )}
                    
                    {/* Área de Conteúdo */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Título com espaço livre */}
                      <h3 className="text-lg font-bold text-semat-dark leading-tight mb-3">
                        {cert.titulo}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-6 flex-grow">
                        {cert.descricao}
                      </p>
                      
                      {/* Renderização Condicional do Botão */}
                      {cert.disponivel ? (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full text-center bg-semat-medio hover:bg-semat-dark text-white font-semibold py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                          Acessar Drive
                        </a>
                      ) : (
                        <button 
                          disabled 
                          className="w-full bg-slate-100 text-slate-400 font-semibold py-3 rounded-xl cursor-not-allowed border border-slate-200 flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                          Em Breve
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        ) : (
          // --- CONTEÚDO DAS OUTRAS ABAS (EM BREVE) ---
          <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
            <svg className="w-20 h-20 text-semat-blue mb-6 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h2 className="text-3xl font-bold text-semat-dark mb-4">Página em Construção</h2>
            <p className="text-xl text-gray-600 max-w-lg">
              As informações sobre <strong>{abaAtiva.toLowerCase()}</strong> estarão disponíveis muito em breve. Fique de olho nas nossas atualizações!
            </p>
          </div>
        )}

      </main>

    {/* Botão Flutuante do Instagram (Canto Direito) */}
      <a
        href="https://instagram.com/sematuesc" 
        target="_blank"
        rel="noopener noreferrer"
        // Aqui trocamos para bg-semat-medio e adicionamos os hovers no degradê
        className="fixed bottom-8 right-8 z-50 bg-semat-medio hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 p-3.5 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Instagram da SEMAT"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        
        {/* Tooltip Hover (Ajustado para right-16) */}
        <span className="absolute right-16 bg-semat-dark text-semat-light font-medium text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Siga nosso Instagram
        </span>
      </a>

    </div>
  );
}

export default App;