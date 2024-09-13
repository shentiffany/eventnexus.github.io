// router.post('/assign-qr', async (req, res) => {
//     const { studentId, qrCode } = req.body;
  
//     try {
//       const query = `UPDATE students SET qr_code = ? WHERE student_id = ?`;
//       await db.execute(query, [qrCode, studentId]);
//       res.json({ message: 'QR code assigned successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error assigning QR code' });
//     }
//   });
  
//   module.exports = router;