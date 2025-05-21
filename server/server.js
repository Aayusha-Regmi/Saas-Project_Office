const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
dotenv.config();
// Configure CORS to allow requests from the frontend
const isDevelopment = process.env.NODE_ENV !== 'production';

// In production, you should replace this with your actual frontend domain
const PRODUCTION_DOMAIN = 'https://your-production-domain.com';

const allowedOrigins = isDevelopment 
  ? [
      'http://localhost:3000',
      'http://localhost:5002',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5175',
      'http://localhost:5176',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5174',
      'http://127.0.0.1:5175',
      'http://127.0.0.1:5176'
    ]
  : [
      PRODUCTION_DOMAIN,
      `https://www.${PRODUCTION_DOMAIN.replace('https://', '')}`
    ];
// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});


const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
    files: 3 // Maximum 3 files
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      return cb(null, true);
    }
    cb(new Error('Only .pdf, .doc, and .docx files are allowed'));
  }
});

// This middleware handles the file upload
const uploadFiles = upload.array('files', 3); // 'files' should match the field name in FormData




const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin && isDevelopment) return callback(null, true);
    
    // In production, you might want to be more strict
    if (origin) {
      const originIsAllowed = allowedOrigins.some(allowedOrigin => 
        origin.startsWith(allowedOrigin)
      );
      
      if (originIsAllowed) {
        return callback(null, true);
      }
      
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      console.error(msg);
      return callback(new Error(msg), false);
    }
    
    // In production, block requests with no origin
    return callback(new Error('Not allowed by CORS'), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

console.log('CORS allowed origins:', allowedOrigins);

app.use(cors(corsOptions));
app.use(express.json());


// Handle preflight requests
app.options('*', cors(corsOptions));

// Create MySQL connection
// Connect to the existing database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'saas_project'  // Use existing database name from .env or default to 'saas_project'
});

// Test the database connection
// Connect to the existing database

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create industry_submissions table if not exists
const createIndustryTable = `
    CREATE TABLE IF NOT EXISTS industry_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        title VARCHAR(50) NOT NULL,
        position VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        contact_number VARCHAR(50) NOT NULL,
        post_code VARCHAR(50),
        yearly_revenue1 VARCHAR(50),
        yearly_revenue2 VARCHAR(50),
        country VARCHAR(100) NOT NULL,
        industry VARCHAR(100) NOT NULL,
        file_paths TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`;
//create contact_submissions table if not exists
const createContactTable = `
    CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service VARCHAR(100) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`;
db.query(createContactTable, (err) => {
    if (err) {
        console.error('Error creating contact_submissions table:', err);
    } else {
        console.log('contact_submissions table is ready');
    }
});
db.query(createIndustryTable, (err) => {
    if (err) {
        console.error('Error creating industry_submissions table:', err);
    } else {
        console.log('industry_submissions table is ready');
        
        // Add file_paths column if it doesn't exist
        const alterTableQuery = `
            SELECT COUNT(*) as count 
            FROM information_schema.COLUMNS 
            WHERE TABLE_SCHEMA = DATABASE() 
            AND TABLE_NAME = 'industry_submissions' 
            AND COLUMN_NAME = 'file_paths'`;
            
        db.query(alterTableQuery, (err, results) => {
            if (err) {
                console.error('Error checking for file_paths column:', err);
                return;
            }
            
            if (results[0].count === 0) {
                // Add the file_paths column
                db.query('ALTER TABLE industry_submissions ADD COLUMN file_paths TEXT AFTER industry', (err) => {
                    if (err) {
                        console.error('Error adding file_paths column:', err);
                    } else {
                        console.log('Added file_paths column to industry_submissions table');
                    }
                });
            }
        });
    }
});

// Test the database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Configure email transporter with App Password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
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
// Route to handle industry form submission
// Helper function to clean up uploaded files
const cleanupFiles = (files) => {
  if (!files || !files.length) return;
  
  files.forEach(file => {
    try {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    } catch (err) {
      console.error(`Error cleaning up file ${file.path}:`, err);
    }
  });
};

// Route to handle industry form submission with file uploads
app.post('/api/industry/submit', uploadFiles, (req, res) => {
  const files = req.files || [];
  const formData = req.body;
  
  try {
    // Process form data and files
    const submission = {
      fullName: formData.fullName,
      title: formData.title,
      position: formData.position,
      email: formData.email,
      contactNumber: formData.contactNumber,
      postCode: formData.postCode,
      yearlyRevenue1: formData.yearlyRevenue1,
      yearlyRevenue2: formData.yearlyRevenue2,
      country: formData.country,
      industry: formData.industry,
      filePaths: files.length > 0 ? JSON.stringify(files.map(file => ({
          originalname: file.originalname,
          filename: file.filename,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype
        }))) : null
    };
    
    // Save to database
    const sql = `
      INSERT INTO industry_submissions 
      (full_name, title, position, email, contact_number, post_code, 
       yearly_revenue1, yearly_revenue2, country, industry, file_paths) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
    db.query(sql, [
      submission.fullName, 
      submission.title, 
      submission.position, 
      submission.email, 
      submission.contactNumber, 
      submission.postCode, 
      submission.yearlyRevenue1, 
      submission.yearlyRevenue2, 
      submission.country,
      submission.industry,
      submission.filePaths
    ], (err, result) => {
      if (err) {
        console.error('Error saving to database:', err);
        // Clean up uploaded files if database save fails
        cleanupFiles(files);
        return res.status(500).json({ 
          error: 'Failed to save submission',
          details: process.env.NODE_ENV === 'development' ? err.message : undefined
        });
      }
      
      // Prepare email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: submission.email,
        subject: `New Industry Form Submission from ${submission.fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #22A8FF;">New Industry Form Submission</h2>
            <p><strong>Full Name:</strong> ${submission.fullName}</p>
            <p><strong>Title:</strong> ${submission.title || 'N/A'}</p>
            <p><strong>Position:</strong> ${submission.position || 'N/A'}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Contact Number:</strong> ${submission.contactNumber || 'N/A'}</p>
            <p><strong>Post Code:</strong> ${submission.postCode || 'N/A'}</p>
            <p><strong>Yearly Revenue 1:</strong> ${submission.yearlyRevenue1 || 'N/A'}</p>
            <p><strong>Yearly Revenue 2:</strong> ${submission.yearlyRevenue2 || 'N/A'}</p>
            <p><strong>Country:</strong> ${submission.country || 'N/A'}</p>
            <p><strong>Industry:</strong> ${submission.industry || 'N/A'}</p>
            <p><strong>Attachments:</strong> ${files.length > 0 ? files.map(f => f.originalname).join(', ') : 'None'}</p>
          </div>
        `,
        attachments: files.map(file => ({
          filename: file.originalname,
          path: file.path,
          cid: file.filename
        }))
      };
      
      // Function to send email with retry logic
      const sendEmailWithRetry = async (retryCount = 0) => {
        try {
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent:', info.messageId);
          return info;
        } catch (error) {
          console.error(`Error sending email (attempt ${retryCount + 1}):`, error);
          
          // If we've tried 3 times, give up
          if (retryCount >= 2) {
            throw error;
          }
          
          // Wait for 2 seconds before retrying
          await new Promise(resolve => setTimeout(resolve, 2000));
          return sendEmailWithRetry(retryCount + 1);
        }
      };

      // Send email with retry logic
      sendEmailWithRetry()
        .then(() => {
          res.status(200).json({ 
            message: 'Form submitted successfully',
            submissionId: result.insertId
          });
        })
        .catch(error => {
          console.error('Failed to send email after multiple attempts:', error);
          // Even if email fails, we still consider this a success since data is saved
          res.status(200).json({ 
            message: 'Form submitted successfully but there was an issue sending the notification email',
            submissionId: result.insertId,
            warning: 'Email notification failed to send after multiple attempts'
          });
        })
        .finally(() => {
          // Always clean up files after sending email (whether successful or not)
          cleanupFiles(files);
        });
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    // Clean up any uploaded files if an error occurs
    cleanupFiles(files);
    res.status(500).json({ 
      error: 'An unexpected error occurred',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Route to get all industry submissions
app.get('/api/industry/submissions', (req, res) => {
    db.query('SELECT * FROM industry_submissions ORDER BY created_at DESC', (err, results) => {
        if (err) {
            console.error('Error fetching industry submissions:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

// Route to delete an industry submission
app.delete('/api/industry/submissions/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM industry_submissions WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('Error deleting industry submission:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json({ message: 'Industry submission deleted successfully' });
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

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
