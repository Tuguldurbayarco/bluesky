const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Load environment variables from .env file (for local development)
if (process.env.NODE_ENV !== "production") {
  try {
    require("dotenv").config();
  } catch (error) {
    console.log("dotenv not available, using system environment variables");
  }
}

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_PATH = "/mail-service"; // Base path for subdirectory deployment

// SMTP configuration using environment variables
const SMTP_CONFIG = {
  host: "bizmail22.itools.mn",
  //host: "mail.saibaitour.mn",
  port: 465, // Standard SMTP port, adjust if needed
  secure: true, // true for 465, false for other ports
  auth: {
    user: "no-reply@saibaitour.mn",
    pass: process.env.SMTP_PASSWORD, // Get password from environment variable
  },
};

// Validate SMTP configuration
if (!process.env.SMTP_PASSWORD) {
  console.error("❌ SMTP_PASSWORD environment variable is not set!");
  console.error(
    "Please set SMTP_PASSWORD in your cPanel Node.js app environment variables."
  );
  console.error(
    "For local development, create a .env file with SMTP_PASSWORD=your_password"
  );
  process.exit(1);
}

console.log("✅ SMTP configuration loaded successfully");
console.log(`📧 SMTP Host: ${SMTP_CONFIG.host}`);
console.log(`📧 SMTP Port: ${SMTP_CONFIG.port}`);
console.log(`📧 SMTP User: ${SMTP_CONFIG.auth.user}`);
console.log(
  `🔒 SMTP Password: ${process.env.SMTP_PASSWORD ? "***SET***" : "NOT SET"}`
);

// Create transporter
const transporter = nodemailer.createTransport(SMTP_CONFIG);

// Middleware
app.use(
  cors({
    origin: "*", // Accept all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all common methods
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Allow common headers
    credentials: false, // No credentials needed for this service
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get(BASE_PATH + "/", (req, res) => {
  res.json({
    message: "Mail Service is running!",
    status: "OK",
    timestamp: new Date().toISOString(),
    basePath: BASE_PATH,
  });
});

// Health check route
app.get(BASE_PATH + "/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "mail-service",
    uptime: process.uptime(),
    basePath: BASE_PATH,
  });
});

// Email sending endpoint
app.post(BASE_PATH + "/send-email", async (req, res) => {
  try {
    const { to, html, subject, from } = req.body;

    // Basic validation
    if (!subject || !html) {
      return res.status(400).json({
        error: "Subject and message are required",
        status: "error",
      });
    }

    // Email content
    const mailOptions = {
      from: SMTP_CONFIG.auth.user,
      to: to,
      subject,
      html,
      text: html,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    res.json({
      message: "Email sent successfully",
      status: "success",
      messageId: info.messageId,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      error: "Failed to send email",
      status: "error",
      details: error.message,
    });
  }
});

// Preflight OPTIONS handler for email endpoint
app.options(BASE_PATH + "/send-email", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.status(200).end();
});

// SMTP test endpoint
app.get(BASE_PATH + "/test-smtp", async (req, res) => {
  try {
    // Verify SMTP connection
    await transporter.verify();
    res.json({
      message: "SMTP connection successful",
      status: "success",
      smtp: {
        host: SMTP_CONFIG.host,
        port: SMTP_CONFIG.port,
        secure: SMTP_CONFIG.secure,
        user: SMTP_CONFIG.auth.user,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("SMTP test error:", error);
    res.status(500).json({
      error: "SMTP connection failed",
      status: "error",
      details: error.message,
    });
  }
});

// Root redirect (optional - redirects root to mail-service)
app.get("/", (req, res) => {
  res.redirect(BASE_PATH);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Base path: ${BASE_PATH}`);
  console.log(`Test URL: http://localhost:${PORT}${BASE_PATH}`);
  console.log(`Health check: http://localhost:${PORT}${BASE_PATH}/health`);
  console.log(`SMTP test: http://localhost:${PORT}${BASE_PATH}/test-smtp`);
  console.log(
    `Email endpoint: http://localhost:${PORT}${BASE_PATH}/send-email`
  );
});

module.exports = app;
