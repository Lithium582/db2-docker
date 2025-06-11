CREATE TABLE IF NOT EXISTS demo.test (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mensaje VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS demo.test (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mensaje VARCHAR(100)
);

-- Usuario para la réplica
CREATE USER 'replica_user'@'%' IDENTIFIED WITH mysql_native_password BY 'replica_pass';
GRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'%';
FLUSH PRIVILEGES;
