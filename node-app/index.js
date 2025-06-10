const mysql = require('mysql2/promise');

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'rootpass',
      database: process.env.DB_NAME || 'testdb',
    });

    const [rows] = await connection.execute('SELECT NOW();');
    console.log('✅ Conectado a MySQL. Hora actual:', rows[0]["NOW()"]);
    await connection.end();
  } catch (err) {
    console.error('❌ Error al conectar a MySQL:', err.message);
  }
})();