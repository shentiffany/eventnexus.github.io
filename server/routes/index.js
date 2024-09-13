const express = require('express');
const router = express.Router();
const path = require('path');
// const QRCode = require('qrcode'); // Include QRCode package
// const excelJS = require('exceljs'); // Include ExcelJS package
// const User = require('../models/User'); // Use your model

// Serve the HTML file
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

router.post('/login', async (req, res) => {
    const role = req.body.role;
    try {
      switch (role) {
        case 'teacher':
          res.redirect('/teacher');
          break;
        case 'student':
          res.redirect('/student');
          break;
        case 'administrator':
          res.redirect('/administrator');
          break;
        default:
          res.status(401).send('Invalid role');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Login Failed!');
    }
  });
  router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;


// // Generate QR code for event
// router.post('/generate-qr', async (req, res) => {
//   const { eventName, eventDate, eventPoints } = req.body;
//   try {
//     const qrData = `${eventName}, ${eventDate}, ${eventPoints}`;
//     const qrCodeUrl = await QRCode.toDataURL(qrData);
//     res.json({ qrCodeUrl });
//   } catch (error) {
//     console.error('Error generating QR code:', error);
//     res.status(500).send('Error generating QR code');
//   }
// });

// // Download student points as Excel
// router.get('/download-points', async (req, res) => {
//   try {
//     const workbook = new excelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Student Points');

//     worksheet.columns = [
//       { header: 'Student Name', key: 'name', width: 30 },
//       { header: 'Points', key: 'points', width: 15 },
//     ];

//     // Fetch student points from the database
//     const students = await User.getAllStudents(); // Replace with your actual function to get students

//     // Add rows to the worksheet
//     students.forEach(student => {
//       worksheet.addRow({ name: student.name, points: student.points });
//     });

//     // Send the Excel file to the client
//     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.setHeader('Content-Disposition', 'attachment; filename=student_points.xlsx');
//     await workbook.xlsx.write(res);
//     res.end();
//   } catch (error) {
//     console.error('Error downloading points:', error);
//     res.status(500).send('Error downloading points');
//   }
// });

module.exports = router;
