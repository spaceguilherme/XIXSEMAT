import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* 1. Navbar - Com as cores personalizadas do tema */}
      <nav className="bg-semat-dark text-semat-light p-4 shadow-md sticky top-0 z-50 border-b-2 border-semat-sec2">
        <div className="max-w-6xl mx-auto flex justify-center space-x-8 text-sm font-semibold tracking-wider uppercase">
          <a href="#" className="hover:text-white transition-colors duration-200">Início</a>
          <a href="#" className="hover:text-white transition-colors duration-200">SEMAT</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Programação</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Edital</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Submissões</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Certificados</a>
        </div>
      </nav>

      {/* 2. Header / Hero Banner (Apenas a Imagem) */}
      <header className="w-full bg-slate-900 flex justify-center">
        <img 
          src="/src/assets/new-banner.png" /* Substitua pelo nome exato do seu arquivo png */
          alt="Banner XIX Semana da Matemática - O Código Invisível do Universo" 
          className="w-full max-w-[1920px] h-auto block"
        />
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-5xl mx-auto p-6 mt-8">
        
        {/* 3. Alert Banner */}
        <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-800 p-4 mb-10 rounded-r shadow-sm flex items-center">
          <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p>
            <strong className="font-bold">Atenção:</strong> Certificados de apresentadores e monitores da Semat 2025 adicionados na aba "Certificados".
          </p>
        </div>

        {/* 4. Sobre a SEMAT */}
        <section className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-semat-sec2 mb-6 text-center border-b border-orange-100 pb-4">
            Sobre a SEMAT
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            A <strong>Semana de Matemática da UESC</strong> tem como principal objetivo promover o diálogo entre ensino, pesquisa e extensão, valorizando a Matemática em suas diversas dimensões. Reunindo estudantes, professores, pesquisadores e profissionais da área, a SEMAT busca criar um espaço aberto para o compartilhamento de saberes, troca de experiências e incentivo à produção científica e à formação docente.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg text-justify mt-4">
            Ao longo de suas edições, a SEMAT tem se consolidado como um importante momento de encontro e reflexão, com uma programação diversificada que inclui palestras, minicursos, oficinas, mesas-redondas, apresentações de trabalhos e atividades culturais. Mais do que um evento acadêmico, a SEMAT é também uma celebração da Matemática!
          </p>
        </section>

        {/* Botão Flutuante do Instagram */}
      <a
        href="https://instagram.com/sematuesc" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3.5 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Instagram da SEMAT"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        
        {/* Tooltip Hover (Opcional, mas dá um toque moderno) */}
        <span className="absolute right-16 bg-semat-dark text-semat-light font-medium text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Siga nosso Instagram!
        </span>
      </a>

      </main>
    </div>
  );
}

export default App;