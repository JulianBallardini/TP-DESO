/**
 * Cliente HTTP base para el futuro backend (capital-humano-api, Spring Boot).
 *
 * Todavía no se usa: la aplicación funciona con MockApiClient.
 * Cuando el backend exponga los endpoints del contrato (ver api-client.ts),
 * se implementa un HttpApiClient sobre este helper.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function httpRequest<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const detalle = await response.text();
    throw new ApiError(
      response.status,
      detalle || `Error ${response.status} al llamar a ${path}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export function toQueryString(params: Record<string, string | number | undefined>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      search.set(key, String(value));
    }
  }
  const query = search.toString();
  return query ? `?${query}` : "";
}
