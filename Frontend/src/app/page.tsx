import Link from "next/link";

interface OpcionMenu {
  titulo: string;
  descripcion: string;
  href?: string;
}

/** Menú principal: refleja los CU del análisis. Solo los de la Etapa 7 están habilitados. */
const opciones: OpcionMenu[] = [
  {
    titulo: "Gestionar Preguntas",
    descripcion: "Buscar, crear, modificar y eliminar preguntas (CU020).",
    href: "/preguntas",
  },
  {
    titulo: "Emitir Orden de Mérito",
    descripcion: "Listado de candidatos por puesto, ordenado por puntaje (CU028).",
    href: "/orden-merito",
  },
  {
    titulo: "Gestionar Puestos",
    descripcion: "Alta, modificación y baja de puestos o funciones (CU008).",
  },
  {
    titulo: "Gestionar Competencias",
    descripcion: "Administración de competencias técnicas y actitudinales (CU012).",
  },
  {
    titulo: "Gestionar Factores",
    descripcion: "Administración de los factores de cada competencia (CU016).",
  },
  {
    titulo: "Opciones de Respuesta",
    descripcion: "Conjuntos de opciones y sus ponderaciones (CU024).",
  },
  {
    titulo: "Evaluar Candidatos",
    descripcion: "Asociar candidatos a puestos y generar cuestionarios (CU025).",
  },
  {
    titulo: "Reporte Comparativo",
    descripcion: "Requerido para el puesto vs. obtenido por el candidato (CU027).",
  },
  {
    titulo: "Importar Candidatos",
    descripcion: "Importación desde el sistema de Gestión de Candidatos y CV (CU006).",
  },
  {
    titulo: "Exportar Resultados",
    descripcion: "Exportación de resultados en formato CSV (CU007).",
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Pantalla principal</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Seleccione una funcionalidad del sistema.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {opciones.map((opcion) => {
          const card = (
            <div
              className={`h-full rounded-xl border p-5 ${
                opcion.href
                  ? "border-zinc-200 transition-colors hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-zinc-500"
                  : "border-zinc-200 opacity-60 dark:border-zinc-800"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-semibold">{opcion.titulo}</h2>
                {!opcion.href && (
                  <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Próximamente
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {opcion.descripcion}
              </p>
            </div>
          );

          return opcion.href ? (
            <Link key={opcion.titulo} href={opcion.href}>
              {card}
            </Link>
          ) : (
            <div key={opcion.titulo} aria-disabled>
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
