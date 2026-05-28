import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/productos", label: "Productos" },
    { to: "/quienes-somos", label: "Quiénes Somos" },
    { to: "/faq", label: "FAQ" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(107,33,168,0.10)] px-8 max-sm:px-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[70px]">
        <Link to="/" className="flex items-center gap-1.5 no-underline">
          <span className="text-[2rem] max-sm:text-[1.5rem] inline-block animate-[wiggle_2.5s_infinite]">🦕</span>
          <span className="font-['Fredoka_One',cursive] text-[1.7rem] max-sm:text-[1.3rem] text-[#6B21A8] tracking-wide">
            LETRA<span className="text-[#16A34A]">SAURIO</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 max-md:hidden">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={[
                  "font-bold text-[0.93rem] no-underline px-3 py-1.5 rounded-[20px] transition-all",
                  isActive
                    ? "bg-[#6B21A8] text-white"
                    : "text-gray-800 hover:bg-[#6B21A8] hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="flex items-center gap-1.5 bg-white border-2 border-[#6B21A8] text-[#6B21A8] font-extrabold text-[0.9rem] max-sm:text-[0.8rem] px-[18px] max-sm:px-3 py-2 max-sm:py-1.5 rounded-[30px] transition-all no-underline hover:bg-[#6B21A8] hover:text-white whitespace-nowrap">
            👤 Iniciar sesión
          </Link>
          
          <button 
            className="md:hidden text-[#6B21A8] text-2xl p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 gap-2 z-50">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={[
                  "font-bold text-[1rem] no-underline px-4 py-3 rounded-xl transition-all",
                  isActive
                    ? "bg-[#6B21A8] text-white"
                    : "text-gray-800 hover:bg-[#f3e8ff] hover:text-[#6B21A8]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </header>
  );
}