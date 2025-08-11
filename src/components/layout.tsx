import type { PropsWithChildren } from "react";
import Header from "./Header";

export function Layout({ children }: PropsWithChildren) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
      <header>
        <Header />
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="container mx-auto px-4 text-center text-gray-200 text-sm">
          <p>&copy; {currentYear} All rights reserved by Weather App</p>
        </div>
      </footer>
    </div>
  );
}
