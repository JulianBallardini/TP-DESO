# Backend: Capit@l Humano

API REST del TP de DDS/DESO (gestión de evaluaciones de perfiles).

**Estado actual:** solo existe la estructura de carpetas (paquetes). Las clases e
interfaces se crean recién cuando se implementa cada caso de uso.

Este documento describe cómo debe quedar el proyecto al finalizar la
implementación, según el diseño de clases del grupo:
[`../../docs/diagramaClases-Grupo30 (corregido).puml`](../../docs/diagramaClases-Grupo30%20(corregido).puml).

## Stack

Lo que ya trae el proyecto base (`pom.xml`, generado con Spring Initializr):

- Java 25 + Maven (con wrapper `mvnw`)
- Spring Boot: webmvc + webflux, data-jpa (JPA/Hibernate), security, docker-compose
- PostgreSQL (driver) + Lombok
- Tests: JUnit 5 (+ starters de test incluidos)

Base de datos local: PostgreSQL 16 en Docker, base `capital_humano`
(ver [`../../database/README.md`](../../database/README.md)). La base arranca
vacía y las tablas se definen desde el backend al implementar el dominio
(patrón DAO sobre JPA).

## Estructura final de paquetes

Paquete raíz del dominio: `com.capitalhumano`. La clase principal ya está en
`com.capitalhumano.CapitalHumanoApplication` (el paquete inicial
`com.example.demo` fue reemplazado).

```
src/
├── main/
│   ├── java/com/capitalhumano/
│   │   ├── CapitalHumanoApplication.java   # clase principal @SpringBootApplication
│   │   ├── config/                         # configuración Spring (CORS, security, etc.)
│   │   ├── modelo/                         # entidades de dominio + enums
│   │   ├── dto/                            # objetos de transporte Gestor <-> UI
│   │   ├── dao/                            # interfaces de acceso a datos (patrón DAO)
│   │   ├── service/                        # lógica de negocio (gestores) e interfaces técnicas
│   │   └── ui/                             # frontera REST (@RestController)
│   └── resources/
│       └── application.properties          # datasource -> localhost:5432/capital_humano
└── test/java/com/capitalhumano/            # tests JUnit 5 + Mockito
```

### `modelo`: entidades de dominio y enums (18 + 3)

Entidades: `Usuario`, `Candidato`, `Evaluacion`, `Cuestionario`, `Puesto`,
`CaracteristicaPuesto`, `Competencia`, `Factor`, `BloquePreguntas`, `Pregunta`,
`OpcionRespuesta`, `ItemOpcionRespuesta`, `PreguntaCuestionario`,
`ResultadoFactor`, `ResultadoCompetencia`, `RegistroAuditoria`,
`ConfiguracionSistema`, `OpcionPregunta`.

Enums: `EstadoCuestionario` (ACTIVO, EN_PROCESO, COMPLETO, INCOMPLETO,
SIN_CONTESTAR), `TipoDocumento` (DNI, LE, LC, PP), `Genero` (H, M, X).

### `dto`: objetos de transporte Gestor ↔ UI (17)

`UsuarioDTO`, `CandidatoGestionDTO`, `CandidatoCuestionarioDTO`,
`CandidatoOrdenMeritoDTO`, `ResultadoComparativoDTO`, `ResultadoImportacionDTO`,
`PuestoDTO`, `CaracteristicaPuestoDTO`, `CompetenciaDTO`, `FactorDTO`,
`PreguntaDTO`, `PreguntaExamenDTO`, `RespuestaCandidatoDTO`,
`OpcionRespuestaDTO`, `ItemOpcionRespuestaDTO`, `EvaluacionDTO`,
`OpcionPreguntaDTO`.

### `dao`: interfaces de acceso a datos (13)

`IUsuarioDAO`, `ICandidatoDAO`, `IPuestoDAO`, `ICompetenciaDAO`, `IFactorDAO`,
`IPreguntaDAO`, `IOpcionRespuestaDAO`, `IEvaluacionDAO`, `ICuestionarioDAO`,
`IBloquePreguntasDAO`, `IPreguntaCuestionarioDAO`, `IRegistroAuditoriaDAO`,
`IConfiguracionSistemaDAO`.

Las implementaciones (JPA: EntityManager o Spring Data) se agregan al implementar cada CU.

### `service`: gestores e interfaces técnicas (15 + 2)

Gestores: `GestorAutenticacion`, `GestorPuestos`, `GestorCompetencias`,
`GestorFactores`, `GestorPreguntas`, `GestorOpcionesRespuesta`,
`GestorEvaluaciones`, `GestorCuestionario`, `GestorReportes`,
`ImportadorExportador`, `ServicioIA`, `FinalizarCuestionarios`,
`CandidatoCSVAdapter`, `ExportadorResultadosCSV`, `ExportadorCandidatosExcel`.

Interfaces técnicas: `IServicioIA`, `ICandidatoImportador`.

### `ui`: frontera REST (10)

Las clases boundary del diseño, implementadas como `@RestController`
manteniendo los nombres del diagrama: `UIAutenticacion`, `UIGestionPuestos`,
`UIGestionCompetencias`, `UIGestionFactores`, `UIGestionPreguntas`,
`UIGestionOpciones`, `UIEvaluarCandidatos`, `UICompletarCuestionario`,
`UIReportes`, `UIImportarExportar`.

## Convenciones

- Los nombres de clases e interfaces son los literales del diagrama Grupo30
  corregido (`docs/`). El desarrollo debe adecuarse al diseño.
- Cada clase se crea en su paquete recién al implementar su caso de uso
  (etapa 7: CU020 Gestionar Preguntas y CU028 Emitir Orden de Mérito).
- Los archivos `.gitkeep` solo existen para que git registre las carpetas
  vacías; se pueden borrar cuando el paquete tenga clases reales.
