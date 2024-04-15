const StudentsData = require('../models/students_data');

const deleteData = async (req, res) => {
    try {
        const studentId = req.params.id;
        console.log('==================>',studentId)
        // Check if the student data exists
        const student = await StudentsData.findByPk(studentId);
        if (!student) {
            return res.status(404).json({ msg: 'Student data not found' });
        }
        // Delete the student data
        await student.destroy();
        res.status(200).json({ msg: 'Student data deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
}

module.exports = { deleteData };
