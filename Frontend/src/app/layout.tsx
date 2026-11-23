import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capit@l Humano | Gestión de Evaluaciones",
  description:
    "Plataforma de Capit@l Humano para gestionar la evaluación de candidatos a puestos vacantes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Capit@l Humano
            </Link>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Gestión de Evaluaciones de Perfiles
            </span>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
