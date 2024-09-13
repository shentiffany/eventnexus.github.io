const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mahalkosimami143',
  database: 'qr_point_system'
});

const allowedRoles = ['administrator', 'teacher', 'student', 'Administrator', 'Teacher', 'student']; // Add 'administrator' to the allowed roles
module.exports = {
  async createUser(role) {
    if (!allowedRoles.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    const query = `INSERT INTO users (role) VALUES (?)`;
    await db.execute(query, [role]);
  },

  async getUserByRole(role) {
    if (!allowedRoles.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    const query = `SELECT * FROM users WHERE role = ?`;
    const [results] = await db.execute(query, [role]);
    return results[0];
  }
};