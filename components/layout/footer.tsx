import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black tracking-wider text-white">
              CACB Música
            </h3>

            <p className="mt-4 max-w-sm leading-relaxed text-zinc-400">
              Record label & creative studio enfocado en visuales,
              branding y lanzamientos para artistas urbanos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Navegación
            </h4>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="/es" className="hover:text-white">
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/es/servicios" className="hover:text-white">
                  Servicios
                </Link>
              </li>

              <li>
                <Link href="/es/lanzamientos" className="hover:text-white">
                  Lanzamientos
                </Link>
              </li>

              <li>
                <Link href="/es/noticias" className="hover:text-white">
                  Noticias
                </Link>
              </li>

              <li>
                <Link href="/es/contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Contacto
            </h4>

            <div className="space-y-3 text-zinc-400">
              <p>contacto@cacbmusica.com</p>

              <p>República Dominicana</p>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="transition hover:text-orange-400"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="transition hover:text-orange-400"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-sm text-zinc-500 md:flex-row">
          
          <p>
            © {new Date().getFullYear()} CACB Música. Todos los derechos reservados.
          </p>

          <p>
            Built for artists.
          </p>
        </div>
      </div>
    </footer>
  );
}