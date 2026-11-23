import type { ApiClient } from "./api-client";
import { MockApiClient } from "@/lib/mock/mock-api-client";

/**
 * Punto de acceso único a la capa de datos.
 *
 * Hoy: MockApiClient (datos en memoria, ver src/lib/mock/seed.ts).
 * Futuro: reemplazar por un HttpApiClient construido sobre http-client.ts
 * apuntando al backend Spring Boot (NEXT_PUBLIC_API_URL).
 */
export const apiClient: ApiClient = new MockApiClient();

export type { ApiClient, FiltroPreguntas, FiltroPuestos } from "./api-client";
