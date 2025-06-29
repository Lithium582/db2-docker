# DB2 Docker
Este repositorio contiene manifiestos de IBM DB2 `docker-compose` para Windows, Mac y Linux.

Para configurar DB2 ejecutar docker compose desde la raiz

**EN WINDOWS Y MAC**

Es necesario editar el compose y colocar su nombre de usuario en la configuración de volúmenes; sustituya `<user name>` o `<username>` respectivamente.

Una vez configurado el docker compose acorde a su SO, ejecutar:
```
docker compose -f ./db2/<archivo-correspondiente> up -d
```

Cuando se complete la instalación, podrás acceder al contenedor ejecutando el siguiente comando desde una terminal
```
docker exec -ti db2 bash -c "su db2inst1"
```

### Recursos creados
* Base de datos `TESTDB`
* Usuario `db2inst1` - Password: `password`

## Backup
El deploy de DB2 permite cargar backups desde su máquina host. Para ello, es necesario crear un directorio `/backups` en la raiz del repositorio y se montará el volumen (y sus archivos) dentro del contenedor en el directorio `/backups`

Abrir el siguiente enlace para descargar el archivo de backup

https://docs.google.com/document/d/11PoKjpOkR4ByLyPsZqTMRpgWfGIQZ1qkubtX0IK4DD0/edit?tab=t.0#heading=h.8fcd9phqy2h1
