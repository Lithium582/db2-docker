**Aplicación de prueba para una demo de Master-Slave en MySQL**
- Primero debe ejecutarse el archivo "runContainer" para ejecutar el contenedor
- Luego, el archivo "execDockerBashPrimary" para entrar al contenedor primario
- Una vez dentro, ejecutar:

`SHOW BINARY LOG STATUS;`

Anotar File y Position

- Ahora entrar al contenedor réplica ("execDockerBashReplica"), y conectarlo al primario

```
CHANGE REPLICATION SOURCE TO
  SOURCE_HOST='mysql_primary',
  SOURCE_USER='replica_user',
  SOURCE_PASSWORD='replica_pass',
  SOURCE_LOG_FILE='mysql-bin.000003',
  SOURCE_LOG_POS=158;
```

Nota: cambiar en este comando los parámetros SOURCE_LOG_FILE y SOURCE_LOG_POS

Verificar que la réplica está funcionando:

```START REPLICA;
SHOW REPLICA STATUS\G;
```

Debería verse esto:

Replica_IO_Running: Yes
Replica_SQL_Running: Yes

---

Una vez que la réplica se conectó, ejecutar este comando en primary:

```
CREATE TABLE IF NOT EXISTS demo.test2 (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mensaje VARCHAR(100)
);
```

Después, hacer un insert:

`INSERT INTO demo.test2 (mensaje) VALUES ('¡Hola desde el primario!');`

En replica, verificar:
`SELECT * FROM demo.test2;`


Comandos útiles:

```
SHOW VARIABLES LIKE 'server_id';
SHOW DATABASES;
SHOW TABLES;
```