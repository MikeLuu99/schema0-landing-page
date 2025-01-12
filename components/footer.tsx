import { Logo } from "./logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#f3ede9] backdrop-bzlur-xl border-t border-white/10 text-black/70">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          <div className="text-center md:text-right">
            <p className="text-black/70 text-sm mb-2">
              © 2024 Schema0. All rights reserved.
            </p>
            <nav className="space-x-4">
              <Link
                href="#"
                className="text-black/70 hover:text-white transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-black/70 hover:text-white transition-colors text-sm"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-black/70 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
