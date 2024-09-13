const User = require('./User');

async function testUser() {
  try {
    // Test createUser method
    await User.createUser('administrator'); // Replace 'admin' with an allowed value for the role column
    console.log('User created successfully');

    // Test getUserByRole method
    const user = await User.getUserByRole('administrator'); // Replace 'admin' with an allowed value for the role column
    console.log('User retrieved successfully:', user);

    // Clean up
    const db = require('mysql2/promise').createPool({
      host: 'localhost',
      user: 'root',
      password: 'mahalkosimami143',
      database: 'qr_point_system'
    });
    await db.execute('DELETE FROM users WHERE role = ?', ['administrator']); // Replace 'admin' with an allowed value for the role column
    console.log('Test user deleted successfully');
  } catch (err) {
    console.error('Error testing User.js:', err);
  }
}

testUser();