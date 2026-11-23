import Link from "next/link";

interface PaginaEnConstruccionProps {
  titulo: string;
  descripcion: string;
}

/** Placeholder de una funcionalidad planificada pero todavía no implementada. */
export function PaginaEnConstruccion({ titulo, descripcion }: PaginaEnConstruccionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">{titulo}</h1>
        <span className="rounded-full border border-zinc-300 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          En construcción
        </span>
      </div>
      <p className="max-w-2xl text-zinc-500 dark:text-zinc-400">{descripcion}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        &larr; Volver a la pantalla principal
      </Link>
    </div>
  );
}
