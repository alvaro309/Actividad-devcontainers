# Actividad Dev Containers

## Parte 1: rutas

- `GET /` → curl -i http://localhost:3000/
  HTTP/1.1 200 OK
  X-Powered-By: Express
  Content-Type: application/json; charset=utf-8
  Content-Length: 44
  ETag: W/"2c-iOcnYWuWqA1/mqiJaypR5UZcbaY"
  Date: Sun, 20 Sep 2026 21:42:33 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5

- `GET /hora-db` → curl -i http://localhost:3000/hora-dbpace$ curl -i http://lo
  HTTP/1.1 200 OK
  X-Powered-By: Express
  Content-Type: application/json; charset=utf-8
  Content-Length: 42
  ETag: W/"2a-oYA8i3NbQAvNVZzsZv320Zl/gAQ"
  Date: Sun, 20 Sep 2026 21:42:42 GMT
  Connection: keep-alive
  Keep-Alive: timeout=5

{"hora_actual":"2026-09-20T21:42:42.262Z"}node

- La fecha de `/hora-db` representa: La fecha de /hora-db es el resultado de SELECT NOW() ejecutado en el contenedor de PostgreSQL. Demuestra que la app se conecta realmente a la base de datos usando el hostname db. Está en UTC, por lo que difiere 5 horas de la hora local de Colombia.

## Parte 3: diagnóstico (EADDRINUSE)

- **Por qué ocurre:** Porque el puerto está siendo utilizado en ese momento, precisamente se trata del puerto 3000.
- **Comando para identificar el proceso:** `ps aux | grep node`
- **Cómo lo resolví:** Fui a la primera terminal y presioné ctl+c para acabar ese proceso, aunque también se podría haber terminado con el comando 'kill 1234' (siendo 1234 un ejemplo del que podría ser el código del proceso que obtendríamos con `ps aux | grep node`)
