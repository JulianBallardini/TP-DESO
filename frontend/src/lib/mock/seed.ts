import type {
  Candidato,
  Competencia,
  Cuestionario,
  Evaluacion,
  Factor,
  OpcionRespuesta,
  Pregunta,
  Puesto,
} from "@/types/domain";

/**
 * Datos de prueba de la capa mock.
 * Basados en los ejemplos del enunciado del TP.
 */

export const competenciasSeed: Competencia[] = [
  {
    id: 1,
    codigo: "GP",
    nombre: "Gestión de Proyectos",
    descripcion: "Competencias de dirección y gestión de proyectos TIC.",
    tipo: "TECNICA",
    eliminado: false,
  },
  {
    id: 2,
    codigo: "DS",
    nombre: "Desarrollo de Software",
    descripcion: "Competencias técnicas de construcción de software.",
    tipo: "TECNICA",
    eliminado: false,
  },
  {
    id: 3,
    codigo: "LEA",
    nombre: "Lealtad",
    tipo: "ACTITUDINAL",
    eliminado: false,
  },
  {
    id: 4,
    codigo: "TE",
    nombre: "Trabajo en Equipo",
    tipo: "ACTITUDINAL",
    eliminado: false,
  },
];

export const factoresSeed: Factor[] = [
  { id: 1, competenciaId: 1, codigo: "GP-ALC", nombre: "Gestión del alcance", eliminado: false },
  { id: 2, competenciaId: 1, codigo: "GP-TIE", nombre: "Gestión del tiempo", eliminado: false },
  { id: 3, competenciaId: 2, codigo: "DS-POO", nombre: "Programación Orientada a Objetos", eliminado: false },
  { id: 4, competenciaId: 2, codigo: "DS-BD", nombre: "Bases de Datos", eliminado: false },
  { id: 5, competenciaId: 3, codigo: "LEA-CRE", nombre: "Credibilidad", eliminado: false },
  { id: 6, competenciaId: 3, codigo: "LEA-COM", nombre: "Compromiso", eliminado: false },
  { id: 7, competenciaId: 4, codigo: "TE-COM", nombre: "Comunicación", eliminado: false },
  { id: 8, competenciaId: 4, codigo: "TE-COL", nombre: "Colaboración", eliminado: false },
];

export const opcionesRespuestaSeed: OpcionRespuesta[] = [
  {
    id: 1,
    nombre: "Verdadero / Falso",
    descripcion: "Dos opciones excluyentes.",
    opciones: [
      { orden: 1, descripcion: "Verdadero", ponderacion: 10 },
      { orden: 2, descripcion: "Falso", ponderacion: 0 },
    ],
    eliminado: false,
  },
  {
    id: 2,
    nombre: "Escala de valoración",
    descripcion: "Valoración de malo a excelente.",
    opciones: [
      { orden: 1, descripcion: "Malo", ponderacion: 0 },
      { orden: 2, descripcion: "Regular", ponderacion: 1 },
      { orden: 3, descripcion: "Bueno", ponderacion: 2 },
      { orden: 4, descripcion: "Muy bueno", ponderacion: 3 },
      { orden: 5, descripcion: "Excelente", ponderacion: 4 },
    ],
    eliminado: false,
  },
  {
    id: 3,
    nombre: "Escala de acuerdo (Likert)",
    descripcion: "Grado de acuerdo con una afirmación.",
    opciones: [
      { orden: 1, descripcion: "Totalmente en desacuerdo", ponderacion: 0 },
      { orden: 2, descripcion: "En desacuerdo", ponderacion: 1 },
      { orden: 3, descripcion: "Neutral", ponderacion: 2 },
      { orden: 4, descripcion: "De acuerdo", ponderacion: 3 },
      { orden: 5, descripcion: "Totalmente de acuerdo", ponderacion: 4 },
    ],
    eliminado: false,
  },
];

export const preguntasSeed: Pregunta[] = [
  {
    id: 1,
    competenciaId: 1,
    factorId: 1,
    nombre: "WBS y alcance",
    pregunta:
      "¿La descomposición de estructura de trabajo (WBS) forma parte de la definición del alcance?",
    opcionRespuestaId: 1,
    eliminado: false,
  },
  {
    id: 2,
    competenciaId: 1,
    factorId: 1,
    nombre: "Línea base de requerimientos",
    pregunta:
      "Cuando se define un alcance, ¿debe definirse una línea base de los requerimientos?",
    opcionRespuestaId: 1,
    eliminado: false,
  },
  {
    id: 3,
    competenciaId: 1,
    factorId: 2,
    nombre: "Dependencia fin a comienzo",
    pregunta:
      "En el cronograma de un proyecto, ¿qué significa que una actividad sea del tipo “fin a comienzo”?",
    opcionRespuestaId: 2,
    eliminado: false,
  },
  {
    id: 4,
    competenciaId: 1,
    factorId: 2,
    nombre: "Valor ganado",
    pregunta:
      "¿La metodología de Valor Ganado permite predecir cuánto dinero se gastará en un proyecto según sus avances a la fecha?",
    opcionRespuestaId: 1,
    eliminado: false,
  },
  {
    id: 5,
    competenciaId: 2,
    factorId: 3,
    nombre: "Encapsulamiento",
    pregunta: "¿Qué principio de la POO permite ocultar el estado interno de un objeto?",
    opcionRespuestaId: 2,
    eliminado: false,
  },
  {
    id: 6,
    competenciaId: 2,
    factorId: 3,
    nombre: "Polimorfismo",
    pregunta: "¿Qué concepto permite que una misma interfaz tenga múltiples implementaciones?",
    opcionRespuestaId: 2,
    eliminado: false,
  },
  {
    id: 7,
    competenciaId: 2,
    factorId: 4,
    nombre: "Normalización",
    pregunta: "¿Cuál es el objetivo principal de la normalización en bases de datos relacionales?",
    opcionRespuestaId: 2,
    eliminado: false,
  },
  {
    id: 8,
    competenciaId: 2,
    factorId: 4,
    nombre: "Índices",
    pregunta: "¿Qué estructura mejora la velocidad de las consultas sobre una tabla?",
    opcionRespuestaId: 2,
    eliminado: false,
  },
  {
    id: 9,
    competenciaId: 3,
    factorId: 5,
    nombre: "Frases de credibilidad",
    pregunta: "¿Con cuál de las siguientes frases te identificás más en tu vida profesional?",
    opcionRespuestaId: 3,
    eliminado: false,
  },
  {
    id: 10,
    competenciaId: 3,
    factorId: 6,
    nombre: "Objetivos colectivos",
    pregunta: "Para mí el logro de objetivos colectivos es importante porque:",
    opcionRespuestaId: 3,
    eliminado: false,
  },
  {
    id: 11,
    competenciaId: 4,
    factorId: 7,
    nombre: "Consignas poco claras",
    pregunta: "Cuando un compañero no entiende una consigna, ¿qué hacés?",
    opcionRespuestaId: 3,
    eliminado: false,
  },
  {
    id: 12,
    competenciaId: 4,
    factorId: 8,
    nombre: "Ayuda al equipo",
    pregunta: "Si un compañero está atrasado con una tarea crítica, ¿cuál es tu reacción?",
    opcionRespuestaId: 3,
    eliminado: false,
  },
];

export const puestosSeed: Puesto[] = [
  {
    id: 1,
    codigo: "JP-001",
    nombre: "Jefe de Proyecto",
    descripcion: "Responsable de planificar y dirigir proyectos de software.",
    empresa: "TechCorp",
    competencias: [
      { competenciaId: 1, ponderacionMinima: 6 },
      { competenciaId: 4, ponderacionMinima: 5 },
    ],
    eliminado: false,
  },
  {
    id: 2,
    codigo: "DEV-002",
    nombre: "Desarrollador Java Senior",
    descripcion: "Desarrollo de aplicaciones empresariales en Java.",
    empresa: "TechCorp",
    competencias: [
      { competenciaId: 2, ponderacionMinima: 7 },
      { competenciaId: 4, ponderacionMinima: 4 },
    ],
    eliminado: false,
  },
  {
    id: 3,
    codigo: "AF-003",
    nombre: "Analista Funcional",
    descripcion: "Análisis de requerimientos y documentación funcional.",
    empresa: "InnovaSoft",
    competencias: [
      { competenciaId: 1, ponderacionMinima: 5 },
      { competenciaId: 3, ponderacionMinima: 6 },
    ],
    eliminado: false,
  },
];

export const candidatosSeed: Candidato[] = [
  { id: 1, numeroCandidato: 1001, apellido: "García", nombre: "María", tipoDocumento: "DNI", numeroDocumento: "30111222", eliminado: false },
  { id: 2, numeroCandidato: 1002, apellido: "Pérez", nombre: "Juan", tipoDocumento: "DNI", numeroDocumento: "28999888", eliminado: false },
  { id: 3, numeroCandidato: 1003, apellido: "Rodríguez", nombre: "Lucía", tipoDocumento: "DNI", numeroDocumento: "33444555", eliminado: false },
  { id: 4, numeroCandidato: 1004, apellido: "Gómez", nombre: "Martín", tipoDocumento: "LE", numeroDocumento: "16777888", eliminado: false },
  { id: 5, numeroCandidato: 1005, apellido: "Fernández", nombre: "Sofía", tipoDocumento: "DNI", numeroDocumento: "35000111", eliminado: false },
  { id: 6, numeroCandidato: 1006, apellido: "López", nombre: "Diego", tipoDocumento: "LC", numeroDocumento: "20222333", eliminado: false },
  { id: 7, numeroCandidato: 1007, apellido: "Martínez", nombre: "Valentina", tipoDocumento: "DNI", numeroDocumento: "31222999", eliminado: false },
];

export const evaluacionesSeed: Evaluacion[] = [
  { id: 1, puestoId: 1, nombre: "Evaluación 2026 - Q1", fecha: "2026-03-31" },
  { id: 2, puestoId: 1, nombre: "Evaluación 2026 - Q2", fecha: "2026-06-30" },
  { id: 3, puestoId: 2, nombre: "Evaluación 2026 - Q1", fecha: "2026-03-31" },
  // El puesto 3 no posee evaluaciones (flujo alternativo 6.A de CU028).
];

export const cuestionariosSeed: Cuestionario[] = [
  {
    id: 1,
    evaluacionId: 1,
    candidatoId: 1,
    estado: "COMPLETO",
    fechaInicio: "2026-02-01T09:15:00Z",
    fechaFin: "2026-02-01T10:05:00Z",
    cantidadAccesos: 2,
    resultados: [
      { competenciaId: 1, puntaje: 8 },
      { competenciaId: 4, puntaje: 6 },
    ],
  },
  {
    id: 2,
    evaluacionId: 1,
    candidatoId: 2,
    estado: "COMPLETO",
    fechaInicio: "2026-02-02T14:00:00Z",
    fechaFin: "2026-02-02T14:40:00Z",
    cantidadAccesos: 1,
    resultados: [
      { competenciaId: 1, puntaje: 5 },
      { competenciaId: 4, puntaje: 7 },
    ],
  },
  {
    id: 3,
    evaluacionId: 1,
    candidatoId: 3,
    estado: "EN_PROCESO",
    fechaInicio: "2026-02-03T11:00:00Z",
    ultimoIngreso: "2026-02-05T18:30:00Z",
    cantidadAccesos: 3,
    resultados: [],
  },
  {
    id: 4,
    evaluacionId: 1,
    candidatoId: 4,
    estado: "COMPLETO",
    fechaInicio: "2026-02-02T08:00:00Z",
    fechaFin: "2026-02-02T09:10:00Z",
    cantidadAccesos: 1,
    resultados: [
      { competenciaId: 1, puntaje: 7 },
      { competenciaId: 4, puntaje: 8 },
    ],
  },
  {
    id: 5,
    evaluacionId: 2,
    candidatoId: 5,
    estado: "COMPLETO",
    fechaInicio: "2026-05-10T10:00:00Z",
    fechaFin: "2026-05-10T11:00:00Z",
    cantidadAccesos: 4,
    resultados: [
      { competenciaId: 1, puntaje: 6 },
      { competenciaId: 4, puntaje: 5 },
    ],
  },
  {
    id: 6,
    evaluacionId: 2,
    candidatoId: 6,
    estado: "ACTIVO",
    cantidadAccesos: 0,
    resultados: [],
  },
  {
    id: 7,
    evaluacionId: 3,
    candidatoId: 1,
    estado: "COMPLETO",
    fechaInicio: "2026-02-15T09:00:00Z",
    fechaFin: "2026-02-15T09:45:00Z",
    cantidadAccesos: 1,
    resultados: [
      { competenciaId: 2, puntaje: 8 },
      { competenciaId: 4, puntaje: 6 },
    ],
  },
  {
    id: 8,
    evaluacionId: 3,
    candidatoId: 7,
    estado: "COMPLETO",
    fechaInicio: "2026-02-16T16:00:00Z",
    fechaFin: "2026-02-16T16:50:00Z",
    cantidadAccesos: 2,
    resultados: [
      { competenciaId: 2, puntaje: 6 },
      { competenciaId: 4, puntaje: 5 },
    ],
  },
];
