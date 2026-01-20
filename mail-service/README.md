# Mail Service - SMTP Backend

A minimal SMTP backend service for saibaitour.mn using Node.js and Nodemailer.

## Node.js Version

- **Required**: Node.js 20.19.2 (exact version)
- **cPanel**: Set Node.js version to 20.19.2 in cPanel

## Local Development

1. **Switch to correct Node.js version:**

```bash
nvm use 20.19.2
# or if not installed: nvm install 20.19.2
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Test the service:

- Main endpoint: http://localhost:3000/mail-service
- Health check: http://localhost:3000/mail-service/health
- SMTP test: http://localhost:3000/mail-service/test-smtp

## cPanel Deployment

1. Upload all files to your cPanel Node.js app directory
2. **Important**: Set Node.js version to **20.19.2** in cPanel
3. Install dependencies: `npm install --production`
4. **Set Environment Variables** in cPanel:
   - Go to your Node.js app in cPanel
   - Find "Environment Variables" section
   - Add: `SMTP_PASSWORD` = `your_actual_smtp_password`
5. Start the app: `npm start`

## Environment Variables

The service requires these environment variables to be set in cPanel:

- **SMTP_PASSWORD**: Your SMTP password for no-reply@saibaitour.mn
- **PORT**: (Optional) Override default port 3000
- **BASE_PATH**: (Optional) Override default /mail-service path

### Setting Environment Variables in cPanel:

1. **In cPanel Node.js App Manager:**

   - Go to "Node.js Apps" in cPanel
   - Click on your app
   - Find "Environment Variables" section
   - Add: `SMTP_PASSWORD` = `your_smtp_password`

2. **Or via SSH/File Manager:**
   - Create `.env` file in your app directory
   - Add: `SMTP_PASSWORD=your_smtp_password`

**⚠️ Security Note:** Never commit passwords to version control. Use environment variables for all sensitive data.

## Deployment URLs

After deployment, your service will be available at:

- **Main service**: `https://saibaitour.mn/mail-service`
- **Health check**: `https://saibaitour.mn/mail-service/health`
- **SMTP test**: `https://saibaitour.mn/mail-service/test-smtp`
- **Email endpoint**: `https://saibaitour.mn/mail-service/send-email`

## API Endpoints

### GET `/mail-service`

Returns service status and information.

### GET `/mail-service/health`

Health check endpoint for monitoring.

### GET `/mail-service/test-smtp`

Tests SMTP connection configuration.

### POST `/mail-service/send-email`

Sends an email using the configured SMTP settings.

**Request Body:**

```json
{
  "from": "no-reply@saibaitour.mn",
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "html": "<h1>Email content in HTML format</h1>",
  "text": "Plain text version (optional)"
}
```

**Response:**

```json
{
  "message": "Email sent successfully",
  "status": "success",
  "messageId": "<message-id>",
  "timestamp": "2025-08-22T..."
}
```

## Email Configuration

The service is configured to send emails from a no-reply address:

- **From Address**: `no-reply@saibaitour.mn` (all emails sent from this address)
- **SMTP Host**: bizmail22.itools.mn
- **SMTP Port**: 465 (SSL)
- **SMTP User**: no-reply@saibaitour.mn
- **SMTP Password**: [configured]

## Frontend Integration

The service is integrated with the frontend forms:

- **Contact Forms**: Send notifications to `info@saibaitour.mn`
- **Booking Forms**: Send tour booking requests to `info@saibaitour.mn`
- **Customer Confirmations**: Send automated confirmations to user emails
- **Reply Handling**: User emails are included in HTML body for business staff to reply

## CORS Configuration

The service is configured to accept requests from **any origin**:

- **Origin**: `*` (all origins allowed)
- **Methods**: GET, POST, PUT, DELETE, OPTIONS
- **Headers**: Content-Type, Authorization, X-Requested-With
- **Credentials**: Disabled (not needed for this service)

This allows the service to be called from:

- Web browsers (frontend applications)
- Mobile apps
- Other backend services
- Any domain or subdomain

## Testing

After deployment, test these endpoints:

- `https://saibaitour.mn/mail-service` - Main service status
- `https://saibaitour.mn/mail-service/health` - Health check
- `https://saibaitour.mn/mail-service/test-smtp` - SMTP connection test
- `https://saibaitour.mn/mail-service/send-email` - Send test email

## Next Steps

This is the complete setup with email functionality:

1. ✅ Basic Express server with subdirectory support
2. ✅ Nodemailer configuration and SMTP setup
3. ✅ Email sending endpoint with validation
4. ✅ SMTP connection testing
5. 🔄 Add rate limiting and security features (optional)

## Example Usage

**Test SMTP Connection:**

```bash
curl https://saibaitour.mn/mail-service/test-smtp
```

**Send Test Email:**

```bash
curl -X POST https://saibaitour.mn/mail-service/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "from": "no-reply@saibaitour.mn",
    "to": "test@example.com",
    "subject": "Test Email",
    "html": "<h1>This is a test message</h1><p>Sent from the mail service.</p>"
  }'
```

**Send Business Notification:**

```bash
curl -X POST https://saibaitour.mn/mail-service/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "from": "no-reply@saibaitour.mn",
    "to": "info@saibaitour.mn",
    "subject": "New Contact Form Submission",
    "html": "<h2>New Contact Form Submission</h2><p><strong>Name:</strong> John Doe</p><p><strong>Email:</strong> john@example.com</p><p><strong>Customer Email:</strong> john@example.com</p>"
  }'
```
