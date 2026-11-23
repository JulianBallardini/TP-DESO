# Base de datos local

PostgreSQL 16 en Docker para el backend Spring Boot.

La base arranca vacía: las tablas se modelan desde el backend
(entidades JPA con `ddl-auto`, o migraciones Flyway).

## Levantar la base

```sh
cd database
docker compose up -d
```

Esto crea el contenedor `capital-humano-db` con la base `capital_humano` vacía,
un volumen persistente y un healthcheck (`docker compose ps` para ver el estado).

> Nota: es la misma base que usa el proyecto `TP-Dise-o`
> (`capital-humano-api/demo`). Si ya tenías ese contenedor corriendo,
> primero `docker rm -f capital-humano-db` y después `docker compose up -d`
> desde esta carpeta. Los datos previos quedan en el volumen viejo
> `demo_pgdata`, que no se borra.

## Conexión

| Parámetro | Valor |
| --- | --- |
| Host | `localhost` |
| Puerto | `5432` |
| Base | `capital_humano` |
| Usuario | `capital` |
| Contraseña | `capital123` |

Credenciales solo para desarrollo local.

JDBC:

```
jdbc:postgresql://localhost:5432/capital_humano
```

psql dentro del contenedor:

```sh
docker exec -it capital-humano-db psql -U capital -d capital_humano
```

## Configuración del backend (application.properties)

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/capital_humano
spring.datasource.username=capital
spring.datasource.password=capital123

# Mientras modelamos las entidades, Hibernate crea/actualiza las tablas:
spring.jpa.hibernate.ddl-auto=update
```

Si más adelante se adopta Flyway para versionar el esquema, poner
`ddl-auto=validate` (o `none`) para evitar que Hibernate y Flyway
modifiquen el esquema a la vez.

## Comandos útiles

```sh
docker compose ps           # estado y salud
docker compose logs -f db   # logs de postgres
docker compose down         # detiene el contenedor (los datos persisten en el volumen)
docker compose down -v      # reset total: borra también el volumen, la base vuelve a arrancar vacía
```
