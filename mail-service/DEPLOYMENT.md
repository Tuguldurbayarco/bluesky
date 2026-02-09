# cPanel / itools.mn Deployment Checklist

## Prerequisites

- [ ] cPanel hosting with Node.js support (e.g. itools.mn)
- [ ] Node.js version 20.x available in cPanel
- [ ] Email account info@eternalskytour.com (sending). Business receives at eternalskytour@gmail.com

## Step-by-Step Deployment

### 1. Upload Files

- [ ] Upload all files in `mail-service/` to your cPanel Node.js app directory
- [ ] Ensure `server.js` is in the root of the app directory

### 2. Set Node.js Version

- [ ] Go to "Node.js Apps" in cPanel
- [ ] Select your app
- [ ] Set Node.js version to **20.x** (e.g. 20.19.2)
- [ ] Save changes

### 3. Set Environment Variables

- [ ] In your Node.js app settings, find "Environment Variables"
- [ ] Add **one** variable (host and user are hardcoded for eternalskytour.com):

  | Name            | Value                             |
  | --------------- | --------------------------------- |
  | `SMTP_PASSWORD` | Password for info@eternalskytour.com |

- [ ] Optional: `PORT` (default 3000)
- [ ] Save changes and restart the app

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

- [ ] Test main endpoint: `https://eternalskytour.com/mail-service`
- [ ] Test health check: `https://eternalskytour.com/mail-service/health`
- [ ] Test SMTP: `https://eternalskytour.com/mail-service/test-smtp`

## Environment Variables Reference

| Variable        | Required | Description                                   |
| --------------- | -------- | --------------------------------------------- |
| `SMTP_PASSWORD` | ✅ Yes   | Password for info@eternalskytour.com         |
| `PORT`          | ❌ No    | App port (default: 3000)                     |

Hardcoded: host `bizmail6.itools.mn`, port 587, user `info@eternalskytour.com`. Forms send notifications to eternalskytour@gmail.com.

## API Usage (from your website)

POST to `https://eternalskytour.com/mail-service/send-email`:

- **Headers:** `Content-Type: application/json`
- **Body:** `{ "from", "to", "subject", "html" }` (client may send `from`; server uses `SMTP_USER` as sender)

Example: see the fetch calls in `InputForm.tsx` / `FooterInput.tsx` (using env-based URL and emails).

## Troubleshooting

### App Won't Start

- [ ] Check Node.js version is 20.x
- [ ] Verify `SMTP_PASSWORD` is set for info@eternalskytour.com
- [ ] Check cPanel error logs

### SMTP Connection Failed

- [ ] Verify SMTP credentials in cPanel Email
- [ ] Confirm SMTP host (bizmail6.itools.mn) and port 587 in cPanel Email
- [ ] Test SMTP via `/mail-service/test-smtp`

### Environment Variables Not Working

- [ ] Restart the Node.js app after setting variables
- [ ] Check variable names are exact (case-sensitive)
- [ ] Verify no extra spaces in values

## Security Notes

- ✅ Never commit passwords to version control
- ✅ Use environment variables for all sensitive data
- ✅ Regularly rotate SMTP passwords
- ✅ Monitor app logs for suspicious activity
