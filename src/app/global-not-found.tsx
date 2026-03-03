import Link from "next/link";
import "./globals.css";
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex items-center justify-center text-[#A2F5CE]">
        <div className="text-center">
          <h1 className="text-9xl font-bold tracking-widest text-[#A2F5CE]">404</h1>
          <p className="text-xl mt-4 text-[#7CD9B5]">Oops... Página não encontrada</p>

          <div className="mt-8">
            <Link 
              href="/"
              className="px-6 py-3 border border-[#4AE0A4] hover:bg-[#4AE0A4] hover:text-[#0B2E2A] transition-colors rounded-lg font-medium"
            >
              Voltar ao início
            </Link>
          </div>

          <div className="mt-10 p-10 relative blur-3xl hover: blur-0">
            <div className="absolute inset-0 blur-3xl opacity-20 bg-[#4AE0A4] rounded-full w-64 h-64 -translate-x-1/2 left-1/2"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
