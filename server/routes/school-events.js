// const express = require('express');
// const router = express.Router();
// const mysql = require('mysql2/promise');

// const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'mahalkosimami143',
//   database: 'qr_point_system'
// });

// router.post('/create-school-event', async (req, res) => {
//   const { eventName, eventDate, eventPoints } = req.body;

//   try {
//     const query = `INSERT INTO school_events (event_name, event_date, event_points) VALUES (?, ?, ?)`;
//     await db.execute(query, [eventName, eventDate, eventPoints]);
//     res.json({ message: 'School event created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error creating school event' });
//   }
// });

// module.exports = router;