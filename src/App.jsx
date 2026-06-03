import React, { useState } from 'react';
import bannerImg from './assets/new-banner.png';

function App() {
  // Define 'Inicio' como a aba padrão quando o site carrega
  const [abaAtiva, setAbaAtiva] = useState('Inicio');
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
    </div>
  );
}

export default App;