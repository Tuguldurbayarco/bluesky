# cPanel Deployment Checklist

## Prerequisites

- [ ] cPanel hosting with Node.js support
- [ ] Node.js version 20.19.2 available in cPanel
- [ ] SMTP credentials for no-reply@saibaitour.mn

## Step-by-Step Deployment

### 1. Upload Files

- [ ] Upload all files to your cPanel Node.js app directory
- [ ] Ensure `server.js` is in the root of the app directory

### 2. Set Node.js Version

- [ ] Go to "Node.js Apps" in cPanel
- [ ] Select your app
- [ ] Set Node.js version to **20.19.2**
- [ ] Save changes

### 3. Set Environment Variables

- [ ] In your Node.js app settings, find "Environment Variables"
- [ ] Add new environment variable:
  - **Name**: `SMTP_PASSWORD`
  - **Value**: Your actual SMTP password
- [ ] Save changes

### 4. Install Dependencies

- [ ] In cPanel Terminal or via SSH:
  ```bash
  cd /path/to/your/app
  npm install --production
  ```

### 5. Start the App

- [ ] In cPanel Node.js Apps, click "Start" on your app
- [ ] Wait for the app to start (check status)

### 6. Test the Service

- [ ] Test main endpoint: `https://yourdomain.com/mail-service`
- [ ] Test health check: `https://yourdomain.com/mail-service/health`
- [ ] Test SMTP: `https://yourdomain.com/mail-service/test-smtp`

## Environment Variables Reference

| Variable        | Required | Description                                 | Example              |
| --------------- | -------- | ------------------------------------------- | -------------------- |
| `SMTP_PASSWORD` | ✅ Yes   | SMTP password for no-reply@saibaitour.mn    | `your_password_here` |
| `PORT`          | ❌ No    | Override default port (default: 3000)       | `8080`               |
| `BASE_PATH`     | ❌ No    | Override base path (default: /mail-service) | `/email`             |

## Troubleshooting

### App Won't Start

- [ ] Check Node.js version is 20.19.2
- [ ] Verify SMTP_PASSWORD is set
- [ ] Check cPanel error logs

### SMTP Connection Failed

- [ ] Verify SMTP credentials
- [ ] Check if port 465 is blocked
- [ ] Test SMTP connection via `/test-smtp` endpoint

### Environment Variables Not Working

- [ ] Restart the Node.js app after setting variables
- [ ] Check variable names are exact (case-sensitive)
- [ ] Verify no extra spaces in values

## Security Notes

- ✅ Never commit passwords to version control
- ✅ Use environment variables for all sensitive data
- ✅ Regularly rotate SMTP passwords
- ✅ Monitor app logs for suspicious activity
