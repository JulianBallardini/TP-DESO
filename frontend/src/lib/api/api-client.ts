import type {
  Competencia,
  Evaluacion,
  Factor,
  OpcionRespuesta,
  OrdenMerito,
  Pregunta,
  PreguntaInput,
  PreguntaListado,
  PuestoBusqueda,
} from "@/types/domain";

/** Filtros de búsqueda de preguntas (CU020). Criterio de texto: "contiene". */
export interface FiltroPreguntas {
  competenciaId?: number;
  factorId?: number;
  nombre?: string;
}

/** Filtros de búsqueda de puestos (CU028). Criterio de texto: "contiene". */
export interface FiltroPuestos {
  codigo?: string;
  nombre?: string;
  empresa?: string;
}

/**
 * Contrato de datos de la capa web.
 *
 * Corresponde al futuro backend REST (capital-humano-api):
 *   GET    /competencias
 *   GET    /competencias/{id}/factores
 *   GET    /opciones-respuesta
 *   GET    /preguntas?competenciaId=&factorId=&nombre=
 *   GET    /preguntas/{id}
 *   POST   /preguntas
 *   PUT    /preguntas/{id}
 *   DELETE /preguntas/{id}            (baja lógica, con auditoría)
 *   GET    /puestos?codigo=&nombre=&empresa=
 *   GET    /puestos/{id}/evaluaciones
 *   GET    /puestos/{id}/orden-merito?evaluacionIds=1,2 (vacío = TODAS)
 */
export interface ApiClient {
  getCompetencias(): Promise<Competencia[]>;
  getFactores(competenciaId: number): Promise<Factor[]>;
  getOpcionesRespuesta(): Promise<OpcionRespuesta[]>;

  // CU020 - Gestionar Preguntas y sus extensiones (CU021/CU022/CU023)
  buscarPreguntas(filtros: FiltroPreguntas): Promise<PreguntaListado[]>;
  getPregunta(id: number): Promise<Pregunta>;
  crearPregunta(data: PreguntaInput): Promise<Pregunta>;
  actualizarPregunta(id: number, data: PreguntaInput): Promise<Pregunta>;
  eliminarPregunta(id: number, usuario: string): Promise<void>;

  // CU028 - Emitir Orden de Mérito
  buscarPuestos(filtros: FiltroPuestos): Promise<PuestoBusqueda[]>;
  getEvaluaciones(puestoId: number): Promise<Evaluacion[]>;
  getOrdenMerito(puestoId: number, evaluacionIds?: number[]): Promise<OrdenMerito>;
}
