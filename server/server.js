const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Test the database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    debug: true // Enable debug logs
});

// Route to get all submissions
app.get('/api/submissions', (req, res) => {
    db.query('SELECT * FROM contact_submissions ORDER BY created_at DESC', (err, results) => {
        if (err) {
            console.error('Error fetching submissions:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// Route to delete a submission
app.delete('/api/submissions/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM contact_submissions WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Error deleting submission:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'Submission deleted successfully' });
    });
});

// Route to handle contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Save to database
    const sql = 'INSERT INTO contact_submissions (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, email, phone, service, message], (err) => {
        if (err) {
            console.error('Error saving to database:', err);
            return res.status(500).json({ error: 'Failed to save submission' });
        }

        // Define mailOptions here, inside the callback
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #22A8FF;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Service:</strong> ${service}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
            `
        };

        // Send email after defining mailOptions
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: 'Failed to send email' });
            }

            res.status(200).json({ 
                message: 'Email sent successfully',
                submissionId: info.messageId
            });
        });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
