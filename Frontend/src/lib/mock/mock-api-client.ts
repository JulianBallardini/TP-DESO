import type { ApiClient, FiltroPreguntas, FiltroPuestos } from "@/lib/api/api-client";
import {
  PREGUNTA_DESCRIPCION_MAX_LENGTH,
  PREGUNTA_NOMBRE_MAX_LENGTH,
  PREGUNTA_TEXTO_MAX_LENGTH,
  type CandidatoOrdenMerito,
  type Competencia,
  type Cuestionario,
  type Evaluacion,
  type Factor,
  type OpcionRespuesta,
  type OrdenMerito,
  type Pregunta,
  type PreguntaInput,
  type PreguntaListado,
  type Puesto,
  type PuestoBusqueda,
} from "@/types/domain";
import {
  candidatosSeed,
  competenciasSeed,
  cuestionariosSeed,
  evaluacionesSeed,
  factoresSeed,
  opcionesRespuestaSeed,
  preguntasSeed,
  puestosSeed,
} from "./seed";

/** Latencia simulada para ejercitar estados de carga en la UI. */
const DELAY_MS = 250;

function delay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, DELAY_MS));
}

function contiene(valor: string, filtro?: string): boolean {
  if (!filtro) return true;
  return valor.toLocaleLowerCase("es").includes(filtro.toLocaleLowerCase("es"));
}

/**
 * Implementación en memoria del contrato ApiClient.
 * Mantiene las reglas de negocio de CU020/CU021/CU022/CU023 y CU028
 * para que la capa web se comporte igual que contra el backend real.
 *
 * El estado vive en memoria: se reinicia al recargar la página.
 */
export class MockApiClient implements ApiClient {
  private competencias: Competencia[] = structuredClone(competenciasSeed);
  private factores: Factor[] = structuredClone(factoresSeed);
  private opcionesRespuesta: OpcionRespuesta[] = structuredClone(opcionesRespuestaSeed);
  private preguntas: Pregunta[] = structuredClone(preguntasSeed);
  private puestos: Puesto[] = structuredClone(puestosSeed);
  private evaluaciones: Evaluacion[] = structuredClone(evaluacionesSeed);
  private cuestionarios: Cuestionario[] = structuredClone(cuestionariosSeed);

  async getCompetencias(): Promise<Competencia[]> {
    await delay();
    return this.competencias.filter((c) => !c.eliminado);
  }

  async getFactores(competenciaId: number): Promise<Factor[]> {
    await delay();
    return this.factores.filter((f) => f.competenciaId === competenciaId && !f.eliminado);
  }

  async getOpcionesRespuesta(): Promise<OpcionRespuesta[]> {
    await delay();
    return this.opcionesRespuesta.filter((o) => !o.eliminado);
  }

  async buscarPreguntas(filtros: FiltroPreguntas): Promise<PreguntaListado[]> {
    await delay();
    if (!filtros.competenciaId && !filtros.factorId && !filtros.nombre?.trim()) {
      throw new Error("Debe ingresar al menos un criterio de búsqueda.");
    }

    return this.preguntas
      .filter((p) => !p.eliminado)
      .filter((p) => !filtros.competenciaId || p.competenciaId === filtros.competenciaId)
      .filter((p) => !filtros.factorId || p.factorId === filtros.factorId)
      .filter((p) => contiene(p.nombre, filtros.nombre?.trim()))
      .map((p) => ({
        id: p.id,
        competenciaId: p.competenciaId,
        competenciaNombre:
          this.competencias.find((c) => c.id === p.competenciaId)?.nombre ?? "",
        factorId: p.factorId,
        factorNombre: this.factores.find((f) => f.id === p.factorId)?.nombre ?? "",
        nombre: p.nombre,
        pregunta: p.pregunta,
      }));
  }

  async getPregunta(id: number): Promise<Pregunta> {
    await delay();
    const pregunta = this.preguntas.find((p) => p.id === id && !p.eliminado);
    if (!pregunta) throw new Error("La pregunta no existe o fue eliminada.");
    return structuredClone(pregunta);
  }

  async crearPregunta(data: PreguntaInput): Promise<Pregunta> {
    await delay();
    this.validarPregunta(data);

    const nueva: Pregunta = {
      ...data,
      id: Math.max(0, ...this.preguntas.map((p) => p.id)) + 1,
      eliminado: false,
    };
    this.preguntas.push(nueva);
    return structuredClone(nueva);
  }

  async actualizarPregunta(id: number, data: PreguntaInput): Promise<Pregunta> {
    await delay();
    const existente = this.preguntas.find((p) => p.id === id && !p.eliminado);
    if (!existente) throw new Error("La pregunta no existe o fue eliminada.");
    this.validarPregunta(data, id);

    Object.assign(existente, data);
    return structuredClone(existente);
  }

  async eliminarPregunta(id: number, usuario: string): Promise<void> {
    await delay();
    const existente = this.preguntas.find((p) => p.id === id && !p.eliminado);
    if (!existente) throw new Error("La pregunta no existe o fue eliminada.");

    // Baja lógica con registro de auditoría (CU023).
    existente.eliminado = true;
    existente.eliminadoPor = usuario;
    existente.fechaEliminacion = new Date().toISOString();
  }

  async buscarPuestos(filtros: FiltroPuestos): Promise<PuestoBusqueda[]> {
    await delay();
    if (!filtros.codigo?.trim() && !filtros.nombre?.trim() && !filtros.empresa?.trim()) {
      throw new Error("Debe ingresar al menos un criterio de búsqueda.");
    }

    return this.puestos
      .filter((p) => !p.eliminado)
      .filter((p) => contiene(p.codigo, filtros.codigo?.trim()))
      .filter((p) => contiene(p.nombre, filtros.nombre?.trim()))
      .filter((p) => contiene(p.empresa, filtros.empresa?.trim()))
      .map((p) => {
        const cuestionarios = this.cuestionariosDelPuesto(p.id);
        return {
          id: p.id,
          codigo: p.codigo,
          nombre: p.nombre,
          empresa: p.empresa,
          cantidadCandidatos: new Set(cuestionarios.map((c) => c.candidatoId)).size,
          evaluacionesCompletas: cuestionarios.filter((c) => c.estado === "COMPLETO").length,
        };
      });
  }

  async getEvaluaciones(puestoId: number): Promise<Evaluacion[]> {
    await delay();
    return this.evaluaciones
      .filter((e) => e.puestoId === puestoId)
      .sort((a, b) => a.fecha.localeCompare(b.fecha));
  }

  async getOrdenMerito(puestoId: number, evaluacionIds?: number[]): Promise<OrdenMerito> {
    await delay();
    const puesto = this.puestos.find((p) => p.id === puestoId && !p.eliminado);
    if (!puesto) throw new Error("El puesto no existe.");

    // Sin evaluacionIds (o arreglo vacío) se considera la opción TODAS.
    const evaluaciones = this.evaluaciones.filter(
      (e) => e.puestoId === puestoId && (!evaluacionIds?.length || evaluacionIds.includes(e.id)),
    );
    if (evaluaciones.length === 0) {
      throw new Error("El puesto no posee evaluaciones.");
    }

    const candidatos = this.cuestionarios
      .filter((c) => evaluaciones.some((e) => e.id === c.evaluacionId))
      .map((cuestionario) => this.toCandidatoOrdenMerito(cuestionario));

    const alcanzaMinimos = (c: CandidatoOrdenMerito): boolean => {
      const cuestionario = this.cuestionarios.find(
        (q) =>
          q.candidatoId === c.candidatoId &&
          evaluaciones.some((e) => e.id === q.evaluacionId),
      );
      if (!cuestionario) return false;
      return puesto.competencias.every((pc) => {
        const resultado = cuestionario.resultados.find(
          (r) => r.competenciaId === pc.competenciaId,
        );
        return (resultado?.puntaje ?? 0) >= pc.ponderacionMinima;
      });
    };

    const completos = candidatos.filter((c) => c.estadoCuestionario === "COMPLETO");

    return {
      puesto: structuredClone(puesto),
      evaluaciones,
      ordenMerito: completos
        .filter(alcanzaMinimos)
        .sort(
          (a, b) =>
            (b.puntajeObtenido ?? 0) - (a.puntajeObtenido ?? 0) ||
            a.apellido.localeCompare(b.apellido, "es"),
        ),
      sinPonderacionMinima: completos
        .filter((c) => !alcanzaMinimos(c))
        .sort((a, b) => a.apellido.localeCompare(b.apellido, "es")),
      pendientes: candidatos
        .filter((c) => c.estadoCuestionario !== "COMPLETO")
        .sort(
          (a, b) =>
            a.estadoCuestionario.localeCompare(b.estadoCuestionario) ||
            a.apellido.localeCompare(b.apellido, "es"),
        ),
    };
  }

  /** Valida los flujos alternativos 2.A, 2.B y 2.C de CU021/CU022. */
  private validarPregunta(data: PreguntaInput, idActual?: number): void {
    const omisiones: string[] = [];
    if (!data.competenciaId) omisiones.push("Competencia");
    if (!data.factorId) omisiones.push("Factor");
    if (!data.nombre?.trim()) omisiones.push("Nombre de Pregunta");
    if (!data.pregunta?.trim()) omisiones.push("Pregunta");
    if (!data.opcionRespuestaId) omisiones.push("Opción de Respuesta");
    if (omisiones.length > 0) {
      throw new Error(`Faltan completar los siguientes datos: ${omisiones.join(", ")}.`);
    }

    const excedidos: string[] = [];
    if (data.nombre.length > PREGUNTA_NOMBRE_MAX_LENGTH) excedidos.push("Nombre de Pregunta");
    if (data.pregunta.length > PREGUNTA_TEXTO_MAX_LENGTH) excedidos.push("Pregunta");
    if ((data.descripcion?.length ?? 0) > PREGUNTA_DESCRIPCION_MAX_LENGTH) {
      excedidos.push("Descripción");
    }
    if (excedidos.length > 0) {
      throw new Error(`Los siguientes campos exceden su longitud máxima: ${excedidos.join(", ")}.`);
    }

    // Unicidad del nombre y del texto dentro de la competencia y factor.
    const duplicada = this.preguntas.some(
      (p) =>
        p.id !== idActual &&
        !p.eliminado &&
        p.competenciaId === data.competenciaId &&
        p.factorId === data.factorId &&
        (p.nombre.toLocaleLowerCase("es") === data.nombre.trim().toLocaleLowerCase("es") ||
          p.pregunta.toLocaleLowerCase("es") === data.pregunta.trim().toLocaleLowerCase("es")),
    );
    if (duplicada) {
      throw new Error("Ya existe una pregunta con ese nombre o texto para la competencia y el factor seleccionados.");
    }

    const opcion = this.opcionesRespuesta.find(
      (o) => o.id === data.opcionRespuestaId && !o.eliminado,
    );
    if (!opcion) throw new Error("La opción de respuesta seleccionada no existe.");
  }

  private cuestionariosDelPuesto(puestoId: number): Cuestionario[] {
    const evaluacionIds = this.evaluaciones.filter((e) => e.puestoId === puestoId).map((e) => e.id);
    return this.cuestionarios.filter((c) => evaluacionIds.includes(c.evaluacionId));
  }

  private toCandidatoOrdenMerito(cuestionario: Cuestionario): CandidatoOrdenMerito {
    const candidato = candidatosSeed.find((c) => c.id === cuestionario.candidatoId);
    if (!candidato) throw new Error("Candidato no encontrado.");

    const completo = cuestionario.estado === "COMPLETO";
    return {
      candidatoId: candidato.id,
      tipoDocumento: candidato.tipoDocumento,
      numeroDocumento: candidato.numeroDocumento,
      apellido: candidato.apellido,
      nombre: candidato.nombre,
      estadoCuestionario: cuestionario.estado,
      // El puntaje solo se muestra para cuestionarios completos (observación 1 de CU028).
      puntajeObtenido: completo
        ? cuestionario.resultados.reduce((total, r) => total + r.puntaje, 0)
        : undefined,
      fechaInicio: cuestionario.fechaInicio,
      fechaFin: cuestionario.fechaFin,
      ultimoIngreso: cuestionario.ultimoIngreso,
      cantidadAccesos: cuestionario.cantidadAccesos,
    };
  }
}
