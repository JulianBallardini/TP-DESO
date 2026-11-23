/**
 * Modelos del dominio del TP "Capit@l Humano".
 * Derivados del enunciado: Gestión de Evaluaciones de Perfiles.
 */

export type TipoCompetencia = "TECNICA" | "ACTITUDINAL";

export interface Competencia {
  id: number;
  codigo: string;
  nombre: string;
  descripcion?: string;
  tipo: TipoCompetencia;
  eliminado: boolean;
}

export interface Factor {
  id: number;
  competenciaId: number;
  codigo: string;
  nombre: string;
  descripcion?: string;
  eliminado: boolean;
}

/** Opción individual dentro de un conjunto de opciones de respuesta. */
export interface Opcion {
  orden: number;
  descripcion: string;
  /** Valor entre 0 y 10. Las ponderaciones del conjunto deben sumar 10. */
  ponderacion: number;
}

/** Conjunto de opciones de respuesta reutilizable por las preguntas (CU024). */
export interface OpcionRespuesta {
  id: number;
  nombre: string;
  descripcion?: string;
  opciones: Opcion[];
  eliminado: boolean;
}

export interface Pregunta {
  id: number;
  competenciaId: number;
  factorId: number;
  nombre: string;
  /** Texto de la pregunta en sí. */
  pregunta: string;
  descripcion?: string;
  opcionRespuestaId: number;
  /** Baja lógica (CU023), con registro de auditoría. */
  eliminado: boolean;
  eliminadoPor?: string;
  fechaEliminacion?: string;
}

/** Longitudes máximas de los campos de pregunta (CU021/CU022, flujo 2.B). */
export const PREGUNTA_NOMBRE_MAX_LENGTH = 100;
export const PREGUNTA_TEXTO_MAX_LENGTH = 500;
export const PREGUNTA_DESCRIPCION_MAX_LENGTH = 500;

/** Datos de una pregunta para el alta/modificación (CU021/CU022). */
export type PreguntaInput = Omit<
  Pregunta,
  "id" | "eliminado" | "eliminadoPor" | "fechaEliminacion"
>;

/** Fila de la grilla de resultados de CU020 (datos desnormalizados). */
export interface PreguntaListado {
  id: number;
  competenciaId: number;
  competenciaNombre: string;
  factorId: number;
  factorNombre: string;
  nombre: string;
  pregunta: string;
}

/** Competencia requerida por un puesto, con su ponderación mínima (0 a 10). */
export interface PuestoCompetencia {
  competenciaId: number;
  ponderacionMinima: number;
}

export interface Puesto {
  id: number;
  codigo: string;
  nombre: string;
  descripcion?: string;
  empresa: string;
  competencias: PuestoCompetencia[];
  eliminado: boolean;
}

/** Fila de la grilla de búsqueda de puestos de CU028. */
export interface PuestoBusqueda {
  id: number;
  codigo: string;
  nombre: string;
  empresa: string;
  cantidadCandidatos: number;
  evaluacionesCompletas: number;
}

/** Evaluación de un puesto: agrupa los cuestionarios de sus candidatos. */
export interface Evaluacion {
  id: number;
  puestoId: number;
  nombre: string;
  fecha: string;
}

export type TipoDocumento = "DNI" | "LE" | "LC" | "PP";

export interface Candidato {
  id: number;
  numeroCandidato: number;
  apellido: string;
  nombre: string;
  tipoDocumento: TipoDocumento;
  numeroDocumento: string;
  fechaNacimiento?: string;
  genero?: "H" | "M";
  nacionalidad?: string;
  email?: string;
  escolaridad?: string;
  eliminado: boolean;
}

export type EstadoCuestionario = "ACTIVO" | "EN_PROCESO" | "COMPLETO";

export interface ResultadoCompetencia {
  competenciaId: number;
  puntaje: number;
}

export interface Cuestionario {
  id: number;
  evaluacionId: number;
  candidatoId: number;
  estado: EstadoCuestionario;
  fechaInicio?: string;
  /** Solo para cuestionarios completos. */
  fechaFin?: string;
  /** Solo para cuestionarios incompletos. */
  ultimoIngreso?: string;
  cantidadAccesos: number;
  resultados: ResultadoCompetencia[];
}

/** Fila del reporte de orden de mérito (CU028). */
export interface CandidatoOrdenMerito {
  candidatoId: number;
  tipoDocumento: TipoDocumento;
  numeroDocumento: string;
  apellido: string;
  nombre: string;
  estadoCuestionario: EstadoCuestionario;
  /** Solo se muestra para cuestionarios completos. */
  puntajeObtenido?: number;
  fechaInicio?: string;
  fechaFin?: string;
  ultimoIngreso?: string;
  cantidadAccesos: number;
}

/** Reporte completo de CU028 para un puesto y una o varias evaluaciones. */
export interface OrdenMerito {
  puesto: Puesto;
  evaluaciones: Evaluacion[];
  /** Completos que alcanzan las ponderaciones mínimas, ordenados por puntaje desc. */
  ordenMerito: CandidatoOrdenMerito[];
  /** Completos que NO alcanzan las ponderaciones mínimas. */
  sinPonderacionMinima: CandidatoOrdenMerito[];
  /** Cuestionarios no completos (activos / en proceso). */
  pendientes: CandidatoOrdenMerito[];
}
